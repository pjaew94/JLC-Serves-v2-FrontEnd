import { FC } from 'react';
import { TYHeading1, TYLogo, TYLogoContainer, TYPageContainer } from './ThankYou.elements';

import costcoLogo from '../../media/costcoLogo.svg';
import mannaLogo from '../../media/mannaLogo.svg';
import sleepingLogo from '../../media/sleepingLogo.svg';


const ThankYou: FC = () => {
    const logos = [
        {
            src: costcoLogo
        },
        {
            src: mannaLogo
        },
        {
            src: sleepingLogo
        }
    ]

   return (
       <TYPageContainer name="thank-you">
           <TYHeading1>Special Thank You</TYHeading1>
           <TYLogoContainer>
            {logos.map((item, i) => {
                return <TYLogo key={i} src={item.src} />
            })}

           </TYLogoContainer>
       </TYPageContainer>
 )
}

export default ThankYou