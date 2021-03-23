import styled from "styled-components";
import { FC } from "react";
import {
  FlexContainer,
  device,
  colors,
  buttonFontSize,
  Heading1,
  TypesHeading,
  Paragraph,
} from "../../globalStyles";

export const FormContainer = styled(FlexContainer)`
  width: 100vw;
  min-height: 100vh;
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: auto;
  padding: 100px 70px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  border-radius: 5px;

  @media only screen and ${device.mobileS} {
    min-height: 100vh;
    width: 100vw;
  }
  @media only screen and ${device.tablet} {
    padding: ${100 * 0.5}px ${70 * 1}px;
  }

  @media only screen and ${device.laptopL} {
    padding: ${100 * 0.5}px ${70 * 1}px;
  }
  @media only screen and ${device.desktop} {
  }
  @media only screen and ${device.desktopL} {
    padding: ${100 * 1.6}px ${70 * 1.6}px;
  }
  @media only screen and ${device.desktopXL} {
    padding: ${100 * 2.2}px ${70 * 2.2}px;
  }
`;

const FormFieldContainer = styled(FlexContainer)`
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 20px;

  @media only screen and ${device.mobileS} {

  }
  @media only screen and ${device.tablet} {
    margin-bottom: ${20 * 0.9}px;
  }

  @media only screen and ${device.laptopL} {
    margin-bottom: ${20 * 0.9}px;
  }
  @media only screen and ${device.desktop} {
  }
  @media only screen and ${device.desktopL} {
    margin-bottom: ${20 * 1.6}px;
  }
  @media only screen and ${device.desktopXL} {
    margin-bottom: ${20 * 2.2}px;
  }
`;

export const CardElementContainer = styled.div`
  height: auto;
  width: 300px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  padding: 20px 0 40px 0;
  & .StripeElement {
    width: 100%;
    padding: 0.8rem 0.7rem;
    border-radius: 5px;
    border: 1px solid rgb(216, 216, 216);
    font-family: "PT Serif";
  }

  @media only screen and ${device.mobileS} {

  }
  @media only screen and ${device.tablet} {
    width: ${300 * 0.9}px;
    padding: ${20 * 0.9}px 0 ${40 * 0.9}px;

    & .StripeElement {
      padding: ${0.8 * 0.9}rem ${0.7 * 0.9}rem;
      border: ${1 * 0.9}px solid rgb(216, 216, 216);
    }
  }

  @media only screen and ${device.laptopL} {
    width: ${300 * 0.9}px;
    padding: ${20 * 0.9}px 0 ${40 * 0.9}px;

    & .StripeElement {
      padding: ${0.8 * 0.9}rem ${0.7 * 0.9}rem;
      border: ${1 * 0.9}px solid rgb(216, 216, 216);
    }
  }
  @media only screen and ${device.desktop} {
    
  }
  @media only screen and ${device.desktopL} {
    width: ${300 * 1.6}px;
    padding: ${20 * 1.6}px 0 ${40 * 1.6}px;

    & .StripeElement {
      padding: ${0.8 * 1.6}rem ${0.7 * 1.6}rem;
      border: ${1 * 1.6}px solid rgb(216, 216, 216);
    }
  }
  @media only screen and ${device.desktopXL} {
    width: ${300 * 2.2}px;
    padding: ${20 * 2.2}px 0 ${40 * 2.2}px;

    & .StripeElement {
      padding: ${0.8 * 2.2}rem ${0.7 * 2.2}rem;
      border: ${1 * 2.2}px solid rgb(216, 216, 216);
    }
  }
`;

export const DonateHeading1 = styled(Heading1)`
  @media only screen and ${device.mobileS} {
    font-size: 2.2rem;
    border-bottom: ${3}px solid ${colors.primaryColor};
    margin-bottom: ${5 * 0.8}px;
  }
  @media only screen and ${device.tablet} {
    border-bottom: ${3}px solid ${colors.primaryColor};
    margin-bottom: ${5 * 0.8}px;
  }

  @media only screen and ${device.laptopL} {
    border-bottom: ${3 * 0.9}px solid ${colors.primaryColor};
    margin-bottom: ${5 * 0.9}px;
  }
  @media only screen and ${device.desktop} {
    border-bottom: 3px solid ${colors.primaryColor};
    margin-bottom: 5px;
  }
  @media only screen and ${device.desktopL} {
    border-bottom: ${3 * 1.6}px solid ${colors.primaryColor};
    margin-bottom: ${5 * 1.6}px;
  }
  @media only screen and ${device.desktopXL} {
    border-bottom: ${3 * 2.2}px solid ${colors.primaryColor};
    margin-bottom: ${5 * 2.2}px;
  }
`;
export const DonateParagraph = styled(Paragraph)`
  margin-bottom: 20px;
  width: 300px;
  line-height: 1.5rem;

  @media only screen and ${device.mobileS} {

  }
  @media only screen and ${device.tablet} {
    margin-bottom: ${20 * 0.9}px;
    width: ${300 * 0.9}px;
    line-height: ${1.5 * 0.9}rem;
  }

  @media only screen and ${device.laptopL} {
    margin-bottom: ${20 * 0.9}px;
    width: ${300 * 0.9}px;
    line-height: ${1.5 * 0.9}rem;
  }
  @media only screen and ${device.desktop} {

  }
  @media only screen and ${device.desktopL} {
    margin-bottom: ${20 * 1.6}px;
    width: ${300 * 1.6}px;
    line-height: ${1.5 * 1.6}rem;
  }
  @media only screen and ${device.desktopXL} {
    margin-bottom: ${20 * 2.2}px;
    width: ${300 * 2.2}px;
    line-height: ${1.5 * 2.2}rem;
  }
`;

const Label = styled.label<TypesHeading>`
color: #000;
font-size: 1rem;
font-family: ${(props) => (props.poppins ? "Poppins" : "PT Serif")}, sans-serif;
font-weight: ${(props) => (props.poppins ? "700" : "400")};

@media only screen and ${device.mobileS} {
  font-size: ${(props) => props.poppins && "0.9rem"}
  margin-bottom: 9px;
}
@media only screen and ${device.laptopL} {
  font-size: ${(props) => props.poppins && "0.9rem"}
  margin-bottom: 9px;
}
@media only screen and ${device.desktop} {
  font-size: ${(props) => props.poppins && "1rem"};
  margin-bottom: 10px;
}
@media only screen and ${device.desktopL} {
  font-size: ${(props) => props.poppins && "1.6rem"};
  margin-bottom: 16px;
};
@media only screen and ${device.desktopXL} {
  font-size: ${(props) => props.poppins && "2.2rem"};
  margin-bottom: 22px;
};
`;

export const DonateHeading3 = styled.h3<TypesHeading>`
color: #000;
font-size: 1rem;
font-family: ${(props) => (props.poppins ? "Poppins" : "PT Serif")}, sans-serif;
font-weight: ${(props) => (props.poppins ? "700" : "400")};

@media only screen and ${device.mobileS} {
  font-size: ${(props) => props.poppins && "0.9rem"}
  margin-bottom: 9px;
}
@media only screen and ${device.laptopL} {
  font-size: ${(props) => props.poppins && "0.9rem"}
  margin-bottom: 9px;
}
@media only screen and ${device.desktop} {
  font-size: ${(props) => props.poppins && "1rem"};
  margin-bottom: 10px;
}
@media only screen and ${device.desktopL} {
  font-size: ${(props) => props.poppins && "1.6rem"};
  margin-bottom: 16px;
};
@media only screen and ${device.desktopXL} {
  font-size: ${(props) => props.poppins && "2.2rem"};
  margin-bottom: 22px;
};
`;

export const CardWarning = styled.p`
  font-family: "PT Serif";
  color: #ff6961;
  font-size: 0.8rem;
  margin-top: 5px;
  margin-left: 5px;

  @media only screen and ${device.mobileS} {

  }
  @media only screen and ${device.tablet} {
    font-size: ${0.8 * 0.9}rem;
    margin: ${5 * 0.9}px 0 0 ${5 * 0.9}px;
  }

  @media only screen and ${device.laptopL} {
    font-size: ${0.8 * 0.9}rem;
    margin: ${5 * 0.9}px 0 0 ${5 * 0.9}px;
  }
  @media only screen and ${device.desktop} {
  }
  @media only screen and ${device.desktopL} {
    font-size: ${0.8 * 1.6}rem;
    margin: ${5 * 1.6}px 0 0 ${5 * 1.6}px;
  }
  @media only screen and ${device.desktopXL} {
    font-size: ${0.8 * 2.2}rem;
    margin: ${5 * 2.2}px 0 0 ${5 * 2.2}px;
  }
`;

const Input = styled.input`
  border: 1px solid rgb(216, 216, 216);
  border-radius: 5px;
  width: 300px;
  padding: 0.7rem;
  font-family: "PT Serif";
  font-size: 1rem;
  transition: 0.3s all ease-in-out;
  &:focus {
    outline: none;
    border: 1px solid rgb(216, 216, 216);
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  }

  @media only screen and ${device.mobileS} {

  }
  @media only screen and ${device.tablet} {
    border: ${1 * 0.9}px solid rgb(216, 216, 216);
    width: ${300 * 0.9}px;
    padding: ${0.7 * 0.9}rem;
    font-size: ${1 * 0.9}rem;
    &:focus {
      border: ${1 * 0.9}px solid rgb(216, 216, 216);
    }
  }

  @media only screen and ${device.laptopL} {
    border: ${1 * 0.9}px solid rgb(216, 216, 216);
    width: ${300 * 0.9}px;
    padding: ${0.7 * 0.9}rem;
    font-size: ${1 * 0.9}rem;
    &:focus {
      border: ${1 * 0.9}px solid rgb(216, 216, 216);
    }
  }
  @media only screen and ${device.desktop} {
  }
  @media only screen and ${device.desktopL} {
    border: ${1 * 1.6}px solid rgb(216, 216, 216);
    width: ${300 * 1.6}px;
    padding: ${0.7 * 1.6}rem;
    font-size: ${1 * 1.6}rem;
    &:focus {
      border: ${1 * 1.6}px solid rgb(216, 216, 216);
    }
  }
  @media only screen and ${device.desktopXL} {
    border: ${1 * 2.2}px solid rgb(216, 216, 216);
    width: ${300 * 2.2}px;
    padding: ${0.7 * 2.2}rem;
    font-size: ${1 * 2.2}rem;
    &:focus {
      border: ${1 * 2.2}px solid rgb(216, 216, 216);
    }
  }
`;
type TypesButton = {
  large?: boolean;
  primary: boolean;
  disabled: boolean;
};
export const SubmitButton = styled.input<TypesButton>`
  font-size: ${(props) =>
    props.large ? "2.8rem" : `${buttonFontSize.default}rem`};
  font-family: "Poppins", sans-serif;
  color: ${(props) => (props.primary ? "#fff" : "#50c38e")};
  padding: ${(props) => (props.large ? "50px 85px" : "20px 35px")};
  border: ${(props) =>
    props.large ? "2px solid #50c38e" : "1px solid #50c38e"};
  border-radius: 5px;
  background: ${(props) => (props.primary ? colors.primaryColor : "#fff")};
  color: ${(props) => props.disabled && "white"};
  background: ${(props) => props.disabled && "gray"};
  border: ${(props) => props.disabled && "none"};
  transition: 0.3s all ease-in-out;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  &:hover {
    color: ${(props) => (props.primary ? colors.primaryColor : "#fff")};
    background: ${(props) => (props.primary ? "#fff" : colors.primaryColor)};
    color: ${(props) => props.disabled && "white"};
    background: ${(props) => props.disabled && "gray"};
  }

  @media only screen and ${device.mobileS} {
    font-size: ${buttonFontSize.XS};
    padding: ${20 * 0.9}px ${35 * 0.6}px;
    border-radius: 2px;
  }

  @media only screen and ${device.desktop} {
    font-size: ${buttonFontSize.XS};
    padding: ${20 * 0.8}px ${35 * 0.8}px;
  }
  @media only screen and ${device.desktopL} {
    font-size: ${buttonFontSize.S};
    padding: ${20 * 0.9}px ${35 * 0.9}px;
  }
  @media only screen and ${device.desktop} {
    font-size: ${buttonFontSize.default};
    padding: 20px 35px;
  }
  @media only screen and ${device.desktopL} {
    font-size: ${buttonFontSize.L};
    padding: ${20 * 1.6}px ${35 * 1.6}px;
  }
  @media only screen and ${device.desktopXL} {
    font-size: ${buttonFontSize.XL};
    padding: ${20 * 2.2}px ${35 * 2.2}px;
  }
`;

interface FormFieldTypes {
  label: string;
  type: string;
  name: string;
  placeholder: string;
  required?: boolean;
}

const FormField: FC<FormFieldTypes> = ({
  label,
  type,
  name,
  placeholder,
  required,
}) => {
  return (
    <FormFieldContainer>
      <Label poppins htmlFor={name}>
        {label}
      </Label>
      <Input
        name={name}
        type={type}
        placeholder={placeholder}
        required={required ? true : false}
      />
    </FormFieldContainer>
  );
};

export const BillingDetailsFields: FC = () => {
  return (
    <>
      <FormField
        name="amount"
        label="Amount"
        type="text"
        placeholder=".00"
        required
      />
      <FormField name="name" label="Name" type="text" placeholder="Anonymous" />
      <FormField
        name="location"
        label="Location"
        type="text"
        placeholder="Philadelphia"
      />
    </>
  );
};
