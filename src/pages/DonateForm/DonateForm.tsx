import { useState, FC } from "react";
import axios from "axios";
import {
  Elements,
  useElements,
  useStripe,
  CardElement,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import {
  Form,
  FormContainer,
  BillingDetailsFields,
  SubmitButton,
  CardElementContainer,
  DonateHeading1,
  DonateHeading3,
  CardWarning,
  DonateParagraph,
} from "./DonateForm.elements";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { device } from "./../../globalStyles";
import { completeDonation } from './../../redux/actions/stripe';

const stripePromise = loadStripe(
  "pk_test_51IUfrBJhW8qJo9NGLa5bT8ioIPUNBSd0dCIfLU7kWDwt1bxWgt90Gxx59ssei7H8IgQpu0jgT6stiabm8OPZVxub00FpULdVC0"
);

type Comment = {
  text: string;
  user: string;
  status: string;
};

type OnSuccessfulCheckout = {
  amount: number;
  donator?: string;
  message?: string;
  location?: string;
  comment?: Comment[];
};

type BillingDetailsTypes = {
  name: string;
};

const CheckoutForm: FC = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [isProcessing, setProcessingTo] = useState(false);
  const [checkoutError, setCheckoutError] = useState("");
  const stripe = useStripe();
  const elements = useElements();
  // Set error message based on onChange property in card element
  const handleCardDetailsChange = (e) => {
    e.error ? setCheckoutError(e.error.message) : setCheckoutError("");
  };
  // Execute only when payment is successful
  const onSuccessfulCheckout = async (props: OnSuccessfulCheckout) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      if (props.donator === "") {
        props.donator = "Anonymous";
      }
      const data = JSON.stringify(props);
      await axios.post("https://jlc-serves2.herokuapp.com/api/donation", data, config);
      await dispatch(completeDonation(props))
      history.push("/success");
    } catch (err) {
      console.error(err.message);
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const billingDetails: BillingDetailsTypes = {
      name: e.target.name.value,
    };
    if (billingDetails.name === "") billingDetails.name = "Anonymous";

    setProcessingTo(true);

    const cardElement = elements!.getElement("card");

    try {
      const { data: clientSecret } = await axios.post(
        "https://jlc-serves2.herokuapp.com/api/stripe/payment_intents",
        {
          amount: e.target.amount.value * 100,
        }
      );

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

      const props = {
        amount: e.target.amount.value,
        donator: e.target.name.value,
        location: e.target.location.value,
      };

      onSuccessfulCheckout(props);
    } catch (err) {
      setCheckoutError(err.message);
    }
  };

  const isMobileS = useMediaQuery({ query: device.mobileS });
  const tablet = useMediaQuery({ query: device.tablet });
  const laptopL = useMediaQuery({ query: device.laptopL });
  const desktop = useMediaQuery({ query: device.desktop });
  const desktopL = useMediaQuery({ query: device.desktopL });


  const iframeStyles = {
    base: {
      color: "#black",
      fontSize:
        isMobileS || tablet || laptopL
          ? "1.1rem"
          : desktop 
          ? "1rem"
          : desktopL
          ? "1.6rem"
          : "2.2rem",
      iconColor: "#000",
      "::placeholder": {
        color: "gray",
      },
    },
    invalid: {
      iconColor: "#ff6961",
      color: "#ff6961",
    },
    complete: {
      iconColor: "#cbf4c9",
    },
  };

  const cardElementOpts = {
    style: iframeStyles,
    hidePostalCode: true,
  };

  return (
    <FormContainer>
      <Form onSubmit={handleFormSubmit}>
        <DonateHeading1>Donate</DonateHeading1>
        <DonateParagraph>
          Take part in spreading the gospel and helping the less fortunate.
        </DonateParagraph>
        <BillingDetailsFields />
        <CardElementContainer>
          <DonateHeading3 poppins>Payment</DonateHeading3>
          <CardElement
            options={cardElementOpts}
            onChange={handleCardDetailsChange}
          />
          {checkoutError !== "" && <CardWarning>{checkoutError}</CardWarning>}
        </CardElementContainer>
        <SubmitButton
          type="submit"
          disabled={isProcessing || !stripe}
          value={isProcessing ? "Processing..." : "Donate"}
          primary
        ></SubmitButton>
      </Form>
    </FormContainer>
  );
};

const DonateForm: FC = () => {
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm />
    </Elements>
  );
};

export default DonateForm;
