import * as Yup from "yup";
import Order from "../schemas/Order.js";
// import { model } from "mongoose";
import Category from "../models/Category.js";
import Product from "../models/Product.js";
import User from "../models/User.js";

class OrderController {
	async store(req, res) {
		const schema = Yup.object().shape({
			products: Yup.array()
				.required()
				.of(
					Yup.object().shape({
						id: Yup.number().required(),
						quantity: Yup.number().required(),
					}),
				),
		});

		try {
			schema.validateSync(req.body, { abortEarly: false });
		} catch (err) {
			return res.status(400).json({ errors: err.errors });
		}

		const { products } = req.body;

		const productsId = products.map((product) => product.id);
		const findProducts = await Product.findAll({
			where: {
				id: productsId,
			},
			include: [
				{
					model: Category,
					as: "category",
					attributes: ["name"],
				},
			],
		});

		const formattedProducts = findProducts.map((product) => {
			const productIndex = products.findIndex((item) => item.id === product.id);

			const newProduct = {
				id: product.id,
				name: product.name,
				price: product.price,
				category: product.category.name,
				url: product.url,
				quantity: products[productIndex].quantity,
			};
			return newProduct;
		});

		const order = {
			user: {
				id: req.userId,
				name: req.userName,
			},
			products: formattedProducts,
			status: "Pedido realizado",
		};
		const createdOrder = await Order.create(order);

		return res.status(201).json(createdOrder);
	}

	async index(req, res) {
		const orders = await Order.find();
		return res.json(orders);
	}

	async update(req, res) {
		const schema = Yup.object().shape({
			status: Yup.string().required(),
		});

		try {
			schema.validateSync(req.body, { abortEarly: false });
		} catch (err) {
			return res.status(400).json({ errors: err.errors });
		}

		const { admin: isAdmin } = await User.findByPk(req.userId);
		if (!isAdmin) {
			return res.status(401).json({ error: "Acesso não autorizado" });
		}

		const { id } = req.params;
		const { status } = req.body;

		try {
			await Order.findByIdAndUpdate(id, { status }, { new: true });
		} catch (err) {
			return res.status(400).json({ error: "Pedido não encontrado" });
		}

		return res.json({ message: "Pedido atualizado com sucesso!" });
	}
}

export default new OrderController();
