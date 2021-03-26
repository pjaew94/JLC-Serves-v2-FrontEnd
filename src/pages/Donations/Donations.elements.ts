import styled from "styled-components";
import {
  colors,
  FlexContainer,
  PageContainer,
  Paragraph,
  device,
  paragraphFontSize,
} from "../../globalStyles";
import { RiHeart2Line } from "react-icons/ri";

export const DonationsPageContainer = styled(PageContainer)`
  padding-top: 8%;
  flex-direction: column;

  @media only screen and ${device.mobileS} {
      padding-top: 100px;
}

@media only screen and ${device.tablet} {
    padding-top: 150px;
}
@media only screen and ${device.laptopL} {

}
@media only screen and ${device.desktop} {
}
@media only screen and ${device.desktopL} {

}
@media only screen and ${device.desktopXL} {
}
`;

type DonationCardTypes = {
    lastCard?: boolean;
}
export const DonationCard = styled(FlexContainer)<DonationCardTypes>`
  width: 450px;
  padding: 30px 0;
  border-bottom: ${props => props.lastCard && "1px solid #d3d3d3"};
  align-items: flex-start;
  justify-content: flex-start;

  @media only screen and ${device.mobileS} {
      width: 280px;

  }

  @media only screen and ${device.tablet} {
  }
  @media only screen and ${device.laptopL} {
      width: 400px;
  }
  @media only screen and ${device.desktop} {
  }
  @media only screen and ${device.desktopL} {
    padding: ${30 * 1.6}px 0;
      width: 600px;
  }
  @media only screen and ${device.desktopXL} {
  }
`;

export const LogoContainer = styled(FlexContainer)`
  background: ${colors.softGreenColor};
  border-radius: 50%;
  margin-right: 20px;
  padding: 15px;
  @media only screen and ${device.mobileS} {
  }

  @media only screen and ${device.tablet} {
  }
  @media only screen and ${device.laptopL} {
  }
  @media only screen and ${device.desktop} {
  }
  @media only screen and ${device.desktopL} {
    margin-right: ${20 * 1.6}px;
    padding: ${15 * 1.6}px;
  }
  @media only screen and ${device.desktopXL} {
  }
`;

export const Logo = styled(RiHeart2Line)`
  color: ${colors.primaryColor};
  font-size: 1.2rem;
  @media only screen and ${device.mobileS} {
  }

  @media only screen and ${device.tablet} {
  }
  @media only screen and ${device.laptopL} {
  }
  @media only screen and ${device.desktop} {
  }
  @media only screen and ${device.desktopL} {
    font-size: ${1.2 * 1.6}rem;
  }
  @media only screen and ${device.desktopXL} {
  }
`;

export const DonationCardContent = styled(FlexContainer)`
  flex-direction: column;
  align-items: flex-start;
`;

export const Donator = styled(Paragraph)`
  margin-bottom: 10px;
  @media only screen and ${device.mobileS} {
  }

  @media only screen and ${device.tablet} {
  }
  @media only screen and ${device.laptopL} {
  }
  @media only screen and ${device.desktop} {
  }
  @media only screen and ${device.desktopL} {
  }
  @media only screen and ${device.desktopXL} {
  }
`;

export const Bold = styled.span`
  font-weight: 700;
  color: #000;
  font-size: ${paragraphFontSize.default};
  line-height: 1.5rem;
  font-family: "PT Serif", serif;

  @media only screen and ${device.mobileS} {
    font-size: ${paragraphFontSize.XS};
  }
  @media only screen and ${device.laptopL} {
    font-size: ${paragraphFontSize.S};
  }
  @media only screen and ${device.desktop} {
    font-size: ${paragraphFontSize.default};
  }
  @media only screen and ${device.desktopL} {
    font-size: ${paragraphFontSize.L};
  }
  @media only screen and ${device.desktopXL} {
    font-size: ${paragraphFontSize.XL};
  } ;
`;

export const DonationDate = styled(Paragraph)`
  color: #d3d3d3;
`;

export const DonationsContainer = styled(FlexContainer)`
  height: auto;
  padding: 2vh 0;
  flex-direction: column;
  overflow-y: scroll;
  @media only screen and ${device.mobileS} {
  }

  @media only screen and ${device.tablet} {
  }
  @media only screen and ${device.laptopL} {
  }
  @media only screen and ${device.desktop} {
  }
  @media only screen and ${device.desktopL} {
  }
  @media only screen and ${device.desktopXL} {
  }
`;
