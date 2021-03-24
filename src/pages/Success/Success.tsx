import { FC } from "react";
import {
  SuccessButtonContainer,
  SuccessHeading,
  SuccessPageContainer,
  SuccessFlexContainer,
  SuccessParagraph,
} from "./Success.elements";
import { Button, device } from "./../../globalStyles";
import { useMediaQuery } from "react-responsive";
import { useSelector } from "react-redux";

const Success: FC = () => {
  const isMobileS = useMediaQuery({ query: device.mobileS });
  const tablet = useMediaQuery({ query: device.tablet });
  const { stripe } = useSelector((state: any) => state);

//   const successPictures = [
//     {
//       src: "https://jlc-serves.s3.amazonaws.com/successImg1.jpg",
//       alt: "Young Adult Group",
//       text: "Handing out ramen soups and hot chocolate to the homeless!",
//     },
//     {
//       src: "https://jlc-serves.s3.amazonaws.com/successImg2.jpeg",
//       alt: "Preparing lunch bags",
//       text: "Preparing lunch bags for missions!",
//     },
//     {
//       src: "https://jlc-serves.s3.amazonaws.com/successImg3.jpeg",
//       alt: "Adult Group",
//       text: "A bag and water for everyone!",
//     },
//     {
//       src: "https://jlc-serves.s3.amazonaws.com/successImg4.jpg",
//       alt: "Adult Group",
//       text: "Adult group serving the Philadelphia community!",
//     },
//   ];

  return (
    <SuccessPageContainer>
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
    </SuccessPageContainer>
  );
};

export default Success;
