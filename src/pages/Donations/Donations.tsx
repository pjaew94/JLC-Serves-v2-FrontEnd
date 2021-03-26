import { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../../components/Navbar/Navbar";
import { SuccessHeading } from "../Success/Success.elements";
import {
  DonationCard,
  DonationsContainer,
  DonationsPageContainer,
  LogoContainer,
  Logo,
  DonationCardContent,
  Donator,
  Bold,
  DonationDate,
} from "./Donations.elements";
import { getDonations } from "./../../redux/actions/donation";
import { useMediaQuery } from "react-responsive";
import { device } from "../../globalStyles";


const Donations: FC = () => {
  const dispatch = useDispatch();
  const { donation } = useSelector((state: any) => state);

  const isMobileS = useMediaQuery({ query: device.mobileS });

  useEffect(() => {
    dispatch(getDonations());
  }, []);

  return (
    <>
      <Navbar />
      <DonationsPageContainer>
        {isMobileS ? (
          <>
            <SuccessHeading>Thank You To</SuccessHeading>
            <SuccessHeading>Our Contributors!</SuccessHeading>
          </>
        ) : (
          <>
            <SuccessHeading>Thank You To All</SuccessHeading>
            <SuccessHeading>Of Our Contributors!</SuccessHeading>
          </>
        )}
        <DonationsContainer>
          {donation && donation.donations.map((item, i) => {
            return (
              <DonationCard lastCard={i + 1 !== donation.donations.length && true}>
                <LogoContainer>
                  <Logo />
                </LogoContainer>
                <DonationCardContent>
                  <Donator>
                    {item.donator} donated <Bold>${item.amount}</Bold>
                  </Donator>
                  <DonationDate>{item.date}</DonationDate>
                </DonationCardContent>
              </DonationCard>
            );
          })}
        </DonationsContainer>
      </DonationsPageContainer>
    </>
  );
};

export default Donations;
