import { useState, FC } from "react";
import axios from "axios";
import {
  Elements,
  CardNumberElement,
  CardCvcElement,
  CardExpiryElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { useForm } from "react-hook-form";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
  "pk_test_51IUfrBJhW8qJo9NGLa5bT8ioIPUNBSd0dCIfLU7kWDwt1bxWgt90Gxx59ssei7H8IgQpu0jgT6stiabm8OPZVxub00FpULdVC0"
);

type Comment = {
  text: string;
  user: string;
  status: string;
};

type Inputs = {
  amount: number;
  donator: string;
  message?: string;
  location?: string;
  comment?: Comment[];
};

type CheckoutFormTypes = {
  price: number;
  onSuccessfulCheckout: () => void;
};

type BillingDetailsTypes = {
  name: string;
  location: string;
  message: StringConstructor;
};

const CheckoutForm: FC<CheckoutFormTypes> = ({
  price,
  onSuccessfulCheckout,
}) => {
  const [isProcessing, setProcessingTo] = useState(false);
  const [checkoutError, setCheckoutError] = useState("");

  const stripe = useStripe();
  const elements = useElements();

  const handleCardDetailsChange = (e) => {
    e.error ? setCheckoutError(e.error.message) : setCheckoutError("");
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const billingDetails: BillingDetailsTypes = {
      name: e.target.donator.value,
      location: e.target.location.value,
      message: e.target.message.value,
    };

    setProcessingTo(true);

    const cardElement = elements!.getElement("card");

    try {
      const { data: clientSecret } = await axios.post("/api/payment_intents", {
        amount: price * 100,
      });

      const paymentMethodReq = await stripe!.createPaymentMethod({
        type: "card",
        card: cardElement!,
        billing_details: billingDetails,
      });

      if (paymentMethodReq.error) {
        setCheckoutError(paymentMethodReq.error.message!);
        setProcessingTo(false);
        return;
      }

      const { error } = await stripe!.confirmCardPayment(clientSecret, {
        payment_method: paymentMethodReq.paymentMethod.id,
      });

      if (error) {
        setCheckoutError(error.message!);
        setProcessingTo(false);
        return;
      }

      onSuccessfulCheckout();
    } catch (err) {
      setCheckoutError(err.message);
    }
  };

  return <form onSubmit={handleFormSubmit}>
      
  </form>;
};

const DonateForm: FC = () => {
  const onSuccessfulCheckout = () => {};

  const price = 10;

  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm price={price} onSuccessfulCheckout={onSuccessfulCheckout} />
    </Elements>
  );
};

export default DonateForm;
