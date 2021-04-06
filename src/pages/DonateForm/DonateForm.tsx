import { useState, FC } from "react";
import axios from "axios";
import { loadStripe } from "@stripe/stripe-js";
import {
  Form,
  FormContainer,
  SubmitButton,
  FormFieldContainer,
  DonateHeading1,
  DonateHeading3,
  DonateParagraph,
  PaymentMethodContainer,
  Input,
  PaymentMethod,
  FormFieldLeft,
  FormFieldRight,
  PaymentMethodLogo,
} from "./DonateForm.elements";
import { useDispatch } from "react-redux";
import { stageDonation } from "./../../redux/actions/stripe";
import { useForm, SubmitHandler } from "react-hook-form";
import visaLogo from "../../media/paymentLogos/visaLogo.svg";
import mastercardLogo from "../../media/paymentLogos/mastercardLogo.svg";
import discoverLogo from "../../media/paymentLogos/discoverLogo.svg";
import amexLogo from "../../media/paymentLogos/amexLogo.svg";
import jcbLogo from "../../media/paymentLogos/jcbLogo.svg";
import dinersLogo from "../../media/paymentLogos/dinersLogo.svg";
import paypalLogo from "../../media/paymentLogos/paypalLogo.svg";
import Paypal from "../../components/Paypal/Paypal";

// Stripe Initiation
const testKey =
  "pk_test_51IUfrBJhW8qJo9NGLa5bT8ioIPUNBSd0dCIfLU7kWDwt1bxWgt90Gxx59ssei7H8IgQpu0jgT6stiabm8OPZVxub00FpULdVC0";
const liveKey =
  "pk_live_51IUfrBJhW8qJo9NGXGscu6tDs5seyDWzYnUBOBWk2DOQlRxQXJbnGUgX0x2mKyO9EeduffwCEhOcHNgZW3g6qEAO00ChaMtoFZ";
const stripePromise = loadStripe(liveKey);


// Types


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
type Inputs = {
  amount: number;
  donator?: string;
  location?: string;
};

// PaymentList
const paymentMethods = [
  {
    logo: visaLogo,
    state: "visa",
  },
  {
    logo: mastercardLogo,
    state: "mastercard",
  },
  {
    logo: discoverLogo,
    state: "discover",
  },
  {
    logo: amexLogo,
    state: "amex",
  },
  {
    logo: jcbLogo,
    state: "jcb",
  },
  {
    logo: dinersLogo,
    state: "diners",
  },
  {
    logo: paypalLogo,
    state: "paypal",
  }
];



const DonateForm: FC = () => {
  const dispatch = useDispatch();
  const { register, handleSubmit, watch } = useForm<Inputs>();
  const watchAmount = watch("amount")
  const watchDonator = watch("donator")
  const watchLocation = watch("location")

  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<
    string | null
  >("");
  const [paymentMethodAlarm, setPaymentMethodAlarm] = useState<boolean>(false);
  const [disableButton, setDisableButton] = useState<boolean>(false);

  // Staging redux state for memory
  const stageCheckOut = async (props: OnSuccessfulCheckout) => {
    try {
      if (props.donator === "") {
        props.donator = "Anonymous";
      }
      await dispatch(stageDonation(props));
    } catch (err) {
      console.error(err.message);
    }
  };

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      setDisableButton(true);
      if (selectedPaymentMethod === "") {
        setPaymentMethodAlarm(true);
        setDisableButton(false);
        return
      }

      if (selectedPaymentMethod !== "paypal") {
        stageCheckOut(data);
        const stripe = await stripePromise;

        const response: any = await axios.post(
          "https://jlc-serves2.herokuapp.com/api/stripe/create-checkout-session",
          data
        );

        const result = await stripe?.redirectToCheckout({
          sessionId: response.data.id,
        });

        if (result!.error) {
          setDisableButton(false);
          console.log(result!.error);
        }
        setDisableButton(false);
      } else {
        stageCheckOut(data);
        console.log("Paypal");
      }
    } catch (err) {}
  };

  return (
    <>
      <FormContainer>
        <Form onSubmit={handleSubmit(onSubmit)} style={{ overflow: "hidden" }}>
          <DonateHeading1>Donate</DonateHeading1>
          <DonateParagraph>
            Take part in spreading the gospel and helping the less fortunate.
          </DonateParagraph>
          <FormFieldContainer>
            <FormFieldLeft>
              <div>
                <DonateHeading3 poppins>Amount</DonateHeading3>
                <Input  defaultValue=".00" {...register("amount")} />
                <DonateHeading3 poppins>Name</DonateHeading3>
                <Input defaultValue="" {...register("donator")} />
                <DonateHeading3 poppins>Location</DonateHeading3>
                <Input defaultValue="" {...register("location")} />
              </div>
            </FormFieldLeft>
            <FormFieldRight>
              <div style={{ display: "flex" }}>
                <DonateHeading3 style={{ marginRight: "2rem" }} poppins>
                  Payment Method
                </DonateHeading3>
                {paymentMethodAlarm && (
                  <DonateHeading3 style={{ color: "red" }}>
                    Please select a payment method.
                  </DonateHeading3>
                )}
              </div>

              <PaymentMethodContainer>
                {paymentMethods &&
                  paymentMethods.map((item, index) => {
                    return (
                      <PaymentMethod
                        key={index}
                        selected={
                          selectedPaymentMethod === item.state ? true : false
                        }
                        onClick={() => setSelectedPaymentMethod(item.state)}
                        filler={item.state === "empty" && true}
                      >
                        {item.state !== "empty" && (
                          <PaymentMethodLogo src={item.logo} alt={item.state} />
                        )}
                      </PaymentMethod>
                    );
                  })}
              </PaymentMethodContainer>
            </FormFieldRight>
          </FormFieldContainer>
          {selectedPaymentMethod === "paypal" ? (
            <Paypal amount={watchAmount} donator={watchDonator} location={watchLocation} />
          ) : (
            <SubmitButton
              type="submit"
              disabled={disableButton ? true : false}
              value="Proceed To Checkout"
              primary
            />
          )}
        </Form>
      </FormContainer>
    </>
  );
};

export default DonateForm;
