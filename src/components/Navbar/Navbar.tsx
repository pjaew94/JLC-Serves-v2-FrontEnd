import { FC, useState } from "react";
import {
  Navigator,
  JLCLogo,
  LinksContainer,
  NavbarContainer,
  NavbarScrollLink,
  MemberLoginButton,
  LogoPeriod,
  Hamburger,
  HamburgerLine1,
  HamburgerLine2,
} from "./Navbar.elements";
import { useMediaQuery } from "react-responsive";
import { device } from "./../../globalStyles";

const Navbar: FC = () => {
  const [showNavigator, setShowNavigator] = useState(false);
  const isMobileS = useMediaQuery({ query: device.mobileS });
  const tablet = useMediaQuery({ query: device.tablet });

  return (
    <>
      <NavbarContainer>
        <JLCLogo to="/">
          JLC Serves<LogoPeriod>.</LogoPeriod>
        </JLCLogo>
        {isMobileS || tablet ? (
          <Hamburger onClick={() => setShowNavigator(!showNavigator)}>
            <HamburgerLine1 />
            <HamburgerLine2 />
          </Hamburger>
        ) : (
          <LinksContainer>
            <NavbarScrollLink to="home" spy={true} smooth={true} duration={1000} >
              Home
            </NavbarScrollLink>
            <NavbarScrollLink to="who-we-are" spy={true} smooth={true} duration={1000} >Who We Are</NavbarScrollLink>
            <NavbarScrollLink to="mission" spy={true} smooth={true} duration={1000}>Our Mission</NavbarScrollLink>
            <NavbarScrollLink to="thank-you" spy={true} smooth={true} duration={1000}>Thank You</NavbarScrollLink>
            <MemberLoginButton to="/login">Member Login</MemberLoginButton>
          </LinksContainer>
        )}
      </NavbarContainer>
      {isMobileS || tablet ? (
        <Navigator navigator={showNavigator}>
          <NavbarScrollLink to="home" spy={true} smooth={true} duration={1000} inNavigator>Home</NavbarScrollLink>
          <NavbarScrollLink to="who-we-are" spy={true} smooth={true} duration={1000} inNavigator>Who We Are</NavbarScrollLink>
          <NavbarScrollLink to="mission" spy={true} smooth={true} duration={1000} inNavigator>Our Mission</NavbarScrollLink>
          <NavbarScrollLink to="thank-you" spy={true} smooth={true} duration={1000} inNavigator>Thank You</NavbarScrollLink>
          <MemberLoginButton to="/login">Member Login</MemberLoginButton>
        </Navigator>
      ) : null}
    </>
  );
};

export default Navbar;
