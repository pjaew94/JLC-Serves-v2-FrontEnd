import { FC, useState, useEffect } from "react";
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

interface HamburgerType {
  setShowNavigator: any;
  showNavigator: boolean;
}
const HamburgerFC: FC<HamburgerType> = ({ setShowNavigator, showNavigator }) => {
  return (
    <>
      {window.location.pathname !== "/donations" ? (
        <Hamburger onClick={() => setShowNavigator(!showNavigator)}>
          <HamburgerLine1 />
          <HamburgerLine2 />
        </Hamburger>
      ) : (
        <MemberLoginButton to={"/donate"}>Donate</MemberLoginButton>
      )}
    </>
  );
};

const Navbar: FC = () => {
  const [scrollingUp, setScrollingUp] = useState(true);
  const [showNavigator, setShowNavigator] = useState(false);
  const isMobileS = useMediaQuery({ query: device.mobileS });
  const tablet = useMediaQuery({ query: device.tablet });

  useEffect(() => {
    const threshold = 0;
    let lastScrollY = window.pageYOffset;
    let ticking = false;

    const updateScrollDir = () => {
      const scrollY = window.pageYOffset;

      if (Math.abs(scrollY - lastScrollY) < threshold) {
        ticking = false;
        return;
      }
      setScrollingUp(scrollY > lastScrollY ? false : true);
      lastScrollY = scrollY > 0 ? scrollY : 0;
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollDir);
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollingUp]);

  const smoothLinks = window.location.pathname !== "/donations" && (
    <>
      <NavbarScrollLink to="home" spy={true} smooth={true} duration={1500}>
        Home
      </NavbarScrollLink>
      <NavbarScrollLink
        to="who-we-are"
        spy={true}
        smooth={true}
        duration={1500}
      >
        Who We Are
      </NavbarScrollLink>
      <NavbarScrollLink to="mission" spy={true} smooth={true} duration={1500}>
        Our Mission
      </NavbarScrollLink>
      <NavbarScrollLink to="thank-you" spy={true} smooth={true} duration={1500}>
        Thank You
      </NavbarScrollLink>
    </>
  );



  return (
    <>
      <NavbarContainer scrollUp={scrollingUp}>
        <JLCLogo to="/">
          JLC Serves<LogoPeriod>.</LogoPeriod>
        </JLCLogo>
        {isMobileS || tablet ? (
          <HamburgerFC
            setShowNavigator={setShowNavigator}
            showNavigator={showNavigator}
          />
        ) : (
          <LinksContainer>
            {smoothLinks}
            <MemberLoginButton to={"/donate"}>Donate</MemberLoginButton>
          </LinksContainer>
        )}
      </NavbarContainer>
      {isMobileS || tablet ? (
        <Navigator navigator={showNavigator}>
          <NavbarScrollLink
            to="home"
            spy={true}
            smooth={true}
            duration={1000}
            onSetActive={() => setShowNavigator(false)}
            inNavigator
          >
            Home
          </NavbarScrollLink>
          <NavbarScrollLink
            to="who-we-are"
            spy={true}
            smooth={true}
            duration={1000}
            onSetActive={() => setShowNavigator(false)}
            inNavigator
          >
            Who We Are
          </NavbarScrollLink>
          <NavbarScrollLink
            to="mission"
            spy={true}
            smooth={true}
            duration={1000}
            onSetActive={() => setShowNavigator(false)}
            inNavigator
          >
            Our Mission
          </NavbarScrollLink>
          <NavbarScrollLink
            to="thank-you"
            spy={true}
            smooth={true}
            duration={1000}
            onSetActive={() => setShowNavigator(false)}
            inNavigator
          >
            Thank You
          </NavbarScrollLink>
          <MemberLoginButton to={"/donate"}>Donate</MemberLoginButton>
        </Navigator>
      ) : null}
    </>
  );
};

export default Navbar;
