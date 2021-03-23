import styled from "styled-components";
import { PageContainer, FlexContainer, Heading1, Paragraph , device, colors } from "../../globalStyles";

export const SuccessPageContainer = styled(PageContainer)`
    min-height: 100vh;
`

export const SuccessFlexContainer = styled(FlexContainer)`
    width: 50%;
    flex-direction: column;
    
`

export const SuccessButtonContainer = styled(FlexContainer)`
 width: 100%;
`

export const SuccessHeading = styled(Heading1)`
border-bottom: 3px solid ${colors.primaryColor};
margin-bottom: 20px;

@media only screen and ${device.mobileS} {
  border-bottom: ${3 * 0.9}px solid ${colors.primaryColor};
  margin-bottom: ${20 * 0.9}px;
}
@media only screen and ${device.tablet} {
  border-bottom: ${3 * 0.9}px solid ${colors.primaryColor};
  margin-bottom: ${20 * 0.9}px;
}
@media only screen and ${device.laptopL} {
  border-bottom: ${3 * 0.9}px solid ${colors.primaryColor};
  margin-bottom: ${20 * 0.9}px;
}
@media only screen and ${device.desktop} {
}
@media only screen and ${device.desktopL} {
  border-bottom: ${3 * 1.6}px solid ${colors.primaryColor};
  margin-bottom: ${20 * 1.6}px;
}
@media only screen and ${device.desktopXL} {
  border-bottom: ${3 * 2.2}px solid ${colors.primaryColor};
  margin-bottom: ${20 * 1.6}px;
} ;
`


export const SuccessParagraph = styled(Paragraph)`
    margin-bottom: 50px;

`
