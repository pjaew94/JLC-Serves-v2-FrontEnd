import { FC, useEffect, useState, useCallback } from "react";
import {
  SuccessButtonContainer,
  SuccessHeading,
  SuccessPageContainer,
  SuccessFlexContainer,
  SuccessParagraph,
} from "./Success.elements";
import { Button, device } from "./../../globalStyles";
import { useMediaQuery } from "react-responsive";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { emptyDonation } from "../../redux/actions/stripe";

const Success: FC = () => {
  const isMobileS = useMediaQuery({ query: device.mobileS });
  const tablet = useMediaQuery({ query: device.tablet });
  const dispatch = useDispatch();
  const { stripe } = useSelector((state: any) => state);

  const [successOrCanceled, setSuccessOrCanceled] = useState<boolean>(true);

  const url = "https://jlc-serves2.herokuapp.com"

  const storeData = useCallback(
    async () => {
      if (stripe.storeInMemory === true) {

        const config = {
          headers: {
            "Content-Type": "application/json",
          },
        };
        const data = JSON.stringify(stripe);
        await axios.post(
          `${url}/api/donation`,
          data,
          config
        );
      }
       dispatch(emptyDonation());
    },
    []
  )

  useEffect(() => {
    const query = new URLSearchParams(window.location.search);

    if (query.get("success")) {
      setSuccessOrCanceled(true);
      storeData();
      console.log('Hit once')
    }
    if (query.get("canceled")) {
      setSuccessOrCanceled(false);
    }
  }, []);

  return (
    <SuccessPageContainer>
      {successOrCanceled ? (
        <SuccessFlexContainer>
          {isMobileS || tablet ? (
            <>
              <SuccessHeading>Thank You For</SuccessHeading>
              <SuccessHeading>Your Donation!</SuccessHeading>
            </>
          ) : (
            <SuccessHeading>Thank You For Your Donation!</SuccessHeading>
          )}
          <SuccessParagraph>
            We've successfully received your donation of ${stripe.amount}! Thank
            you for taking part in what we do as people of faith. We ask of you
            one last favor to share our story with more people.
          </SuccessParagraph>

          <SuccessButtonContainer>
            <Button style={{ marginRight: "5%" }} to="/" primary>
              Home
            </Button>
            <Button to="/donations" primary={false}>
              See Donations
            </Button>
          </SuccessButtonContainer>
        </SuccessFlexContainer>
      ) : (
        <SuccessFlexContainer>
          <SuccessHeading>Oops!</SuccessHeading>

          <SuccessParagraph>
            There was an issue with your payment process!
          </SuccessParagraph>

          <SuccessButtonContainer>
            <Button to="/donate" primary>
              Try Again
            </Button>
          </SuccessButtonContainer>
        </SuccessFlexContainer>
      )}
    </SuccessPageContainer>
  );
};

export default Success;
