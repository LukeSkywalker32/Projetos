
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
  'pk_test_51RS788PEBj3rzJv8lopnsUabUJpX5dQtGePbtRhhJQ5VrtSbnNvurJapG1CuuNjbXtt0sEI5FfDuaBiJPETKwOcW00cJMicUeP',
);

export default stripePromise;