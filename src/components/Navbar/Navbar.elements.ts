import styled from "styled-components";
import {
  PageContainer,
  device,
  FlexContainer,
  colors
} from "../../globalStyles";
import { Link as ScrollLink } from "react-scroll";
import { Link } from 'react-router-dom';

type NavbarContainerTypes = {
    scrollUp?: boolean
}
export const NavbarContainer = styled(PageContainer)<NavbarContainerTypes>`
  justify-content: space-between;
  position: absolute;
  top: 0;
  left: 0;
  padding-top: 30px;
  z-index: 11;
  transition: 0.2s all ease-in;


  @media only screen and ${device.mobileS} {
      background: white;
      padding-bottom: 20px;
      position: fixed;
      transform: ${props => props.scrollUp ? "translateY(0)" : "translateY(-100px)"};
}
@media only screen and ${device.tablet} {
    background: white;
    padding-bottom: 30px;
    position: fixed;
}
@media only screen and ${device.laptopL} {
    padding-top: ${30 * 0.9}px;
}
@media only screen and ${device.desktop} {
}
@media only screen and ${device.desktopL} {
    padding-top: ${30 * 1.6}px;
}
@media only screen and ${device.desktopXL} {
    padding-top: ${30 * 2.2}px;
} ;
`;

export const LinksContainer = styled(FlexContainer)``;

type ScrollLinkTypes = {
    inNavigator?: boolean;
}
export const NavbarScrollLink = styled(ScrollLink)<ScrollLinkTypes>`
  color: #000;
  font-family: "Poppins";
  font-weight: "400";
  font-size: 1rem;
  cursor: pointer;
  margin-right: ${props => props.inNavigator ? "0px" : "40px"};
  margin-bottom: ${props => props.inNavigator ? "40px" : "0px"};
  &:after {
    display:block;
    content: '';
    border-bottom: solid 2px ${colors.primaryColor};  
    transform: scaleX(0);  
    transition: transform 250ms ease-in-out;
    transform-origin: 0% 50%;
  }
  &:hover {
      &:after {
        transform: scaleX(1); 
      }
  }

  @media only screen and ${device.mobileS} {
      font-size: ${1 * 1.2}rem;
  }
  @media only screen and ${device.tablet} {
    font-size: ${1 * 1.4}rem;
  }
  @media only screen and ${device.laptopL} {
    font-size: ${1 * 0.9}rem;
    margin-right: ${40 * 0.9}px;
  }
  @media only screen and ${device.desktop} {
  }
  @media only screen and ${device.desktopL} {
    font-size: ${1 * 1.6}rem;
    margin-right: ${40 * 1.6}px;
  }
  @media only screen and ${device.desktopXL} {
    font-size: ${1 * 2.2}rem;
    margin-right: ${40 * 2.2}px;
  } ;
`;

export const MemberLoginButton = styled(Link)`
  font-size: 1rem;
  font-family: "Poppins";
  font-weight: "400";
  padding: 13px 15px;
  border-radius: 2px;
  cursor: pointer;
  background: ${colors.primaryColor};
  color: ${colors.softGreenColor};
  border: 2px solid ${colors.primaryColor};
  transition: 0.3s all ease-in-out;
  &:hover {
      background: ${colors.softGreenColor};
      color: ${colors.primaryColor};
  }
@media only screen and ${device.mobileS} {
    padding: ${13 * 0.9}px ${15 * 0.9}px;
    border-radius: ${2 * 0.9}px;
    font-size: ${1 * 1.2}rem;
}
@media only screen and ${device.tablet} {
    padding: ${13 * 1.2}px ${15 * 1.2}px;
    border-radius: ${2 * 0.9}px;
    font-size: ${1 * 1.4}rem;
}
@media only screen and ${device.laptopL} {
    padding: ${13 * 0.9}px ${15 * 0.9}px;
    border-radius: ${2 * 0.9}px;
    font-size: ${1 * 0.9}rem;
}
@media only screen and ${device.desktop} {
}
@media only screen and ${device.desktopL} {
    padding: ${13 * 1.6}px ${15 * 1.6}px;
    border-radius: ${2 * 1.6}px;
    font-size: ${1 * 1.6}rem;
}
@media only screen and ${device.desktopXL} {
    padding: ${13 * 2.2}px ${15 * 2.2}px;
    border-radius: ${2 * 2.2}px;
    font-size: ${1 * 2.2}rem;
} ;
`

export const JLCLogo = styled(Link)`
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  font-size: 1.5rem;
  margin-left: 20px;
  cursor: pointer;
  transition: 0.3s all ease-in-out;
  color: black;

  @media only screen and ${device.mobileS} {
    font-size: ${1.5 * 0.8}rem;
    margin-left: 0px;
}
@media only screen and ${device.tablet} {
    font-size: ${1.5 * 0.8}rem;
    margin-left: ${20 * 0.9}px;
}
@media only screen and ${device.laptopL} {
    font-size: ${1.5 * 0.9}rem;
    margin-left: ${20 * 0.9}px;
}
@media only screen and ${device.desktop} {
}
@media only screen and ${device.desktopL} {
    font-size: ${1.5 * 1.6}rem;
    margin-left: ${20 * 1.6}px;
}
@media only screen and ${device.desktopXL} {
    font-size: ${1.5 * 2.2}rem;
    margin-left: ${20 * 2.2}px;
} ;
`;

export const LogoPeriod = styled.span`
font-family: "Poppins", sans-serif;
font-weight: 700;
font-size: 2rem;
margin-left: 5px;
color: ${colors.primaryColor};

@media only screen and ${device.mobileS} {
}
@media only screen and ${device.tablet} {
}
@media only screen and ${device.laptopL} {
    font-size: ${2 * 0.9}rem;
    margin-left: ${5 * 0.9}px;
}
@media only screen and ${device.desktop} {
}
@media only screen and ${device.desktopL} {
    font-size: ${2 * 1.6}rem;
    margin-left: ${5 * 1.6}px;
}
@media only screen and ${device.desktopXL} {
    font-size: ${2 * 2.2}rem;
    margin-left: ${5 * 2.2}px;
} ;
`

export const Hamburger = styled.div`
    padding: 10px 0 10px 10px;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    flex-direction: column;
    cursor: pointer;
`

export const HamburgerLine1 = styled.span`
    height: 3px;
    width: 35px;
    margin-bottom: 5px;
    background: black;
`

export const HamburgerLine2 = styled.span`
    height: 3px;
    width: 20px;
    background: black;
`

type NavigatorTypes = {
    navigator: boolean
}
export const Navigator = styled(FlexContainer)<NavigatorTypes>`
    flex-direction: column;
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    transition: 0.3s all ease-in-out;
    background: white;
    z-index: 10;
    transform: ${(props) => props.navigator ? "translateX(0)" : "translateX(100vw)"};
    

    @media only screen and ${device.tablet} {
        width: 40vw;
        padding-left: 10%;
        align-items: flex-start;
        transform: ${(props) => props.navigator ? "translateX(60vw)" : "translateX(100vw)"};
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    }
`

