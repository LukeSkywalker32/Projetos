import {
  PaymentElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";

import { useState } from "react";
import { toast } from "react-toastify";
import "../styles.css";

import { useLocation, useNavigate } from "react-router-dom";
import { useCart } from "../../../hooks/CartContext";
import { api } from "../../../services/api";

export function CheckoutForm() {
  const { cartProducts, clearCart } = useCart();
  const navigate = useNavigate();

  const stripe = useStripe();
  const elements = useElements();
  const {
    state: { dmpCheckerLink },
  } = useLocation();

  const [message, setMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      console.error("Stripe ou Elements com falha, tente novamente.");
      return;
    }
    setIsLoading(true);

    const { error, paymentIntent } = await stripe.confirmPayment({
      elements,
      redirect: "if_required",
    });

    if (error) {
      setMessage(error.message);
      toast.error(error.message);
    } else if (paymentIntent && paymentIntent.status === "succeeded") {
      try {
        const products = cartProducts.map((product) => {
          return {
            id: product.id,
            quantity: product.quantity,
            price: product.price,
          };
        });
        const { status } = await api.post(
          "/orders",
          {
            products,
          },
          {
            validateStatus: () => true,
          }
        );
        if (status === 200 || status === 201) {
          setTimeout(() => {
            navigate(
              `/complete?payment_intent_client_secret=${paymentIntent.client_secret}`
            );
          }, 3000);
          clearCart();
          toast.success("🎉🎉 Pedido realizado com Sucesso!");
        } else if (status === 409) {
          toast.error("🤦‍♂️ Falha ao realizar seu pedido!");
        } else {
          throw new Error();
        }
      } catch (error) {
        toast.error("😭😭 Erro de sistema Tente novamente");
      }
    } else {
      navigate(
        `/complete?payment_intent_client_secret=${paymentIntent.client_secret}`
      );
    }

    setIsLoading(false);
  };

  const paymentElementOptions = {
    layout: "accordion",
  };

  return (
    <div className="container">
      <form id="payment-form" onSubmit={handleSubmit}>
        <PaymentElement id="payment-element" options={paymentElementOptions} />
        <button
          disabled={isLoading || !stripe || !elements}
          id="button-form"
          type="submit"
        >
          <span id="button-text">
            {isLoading ? (
              <div className="spinner" id="spinner" />
            ) : (
              "Pagar Agora"
            )}
          </span>
        </button>
        {/* Show any error or success messages */}
        {message && <div id="payment-message">{message}</div>}
      </form>
      <div id="dpm-annotation">
        <p>
          Os métodos de pagamento abaixo são fornecidos por região.&nbsp;
          <a
            href={dmpCheckerLink}
            target="_blank"
            rel="noopener noreferrer"
            id="dpm-integration-checker"
          >
            Visualizar métodos de pagamento disponíveis
          </a>
        </p>
      </div>
    </div>
  );
}
