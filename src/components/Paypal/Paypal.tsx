import { FC, useEffect, useRef } from 'react';
import { useMediaQuery } from "react-responsive";
import { device } from '../../globalStyles';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { stageDonation } from './../../redux/actions/stripe';

declare global {
    interface Window { paypal: any; }
}

interface PaypalTypes {
    amount: number,
    donator?: string,
    location?: string
}

type OnSuccessfulCheckout = {
    amount: number;
    donator?: string;
    message?: string;
    location?: string;
    comment?: Comment[];
  };

const Paypal: FC <PaypalTypes> = ({ amount, donator, location }) => {

    const dispatch = useDispatch();

    // Staging redux state for memory
  const stageCheckOut = async (props: OnSuccessfulCheckout) => {
    try {
      if (props.donator === "") {
        props.donator = "Anonymous";
      }
      await dispatch(stageDonation(props));
    } catch (err) {
      console.error(err.message);
    }
  };


    const isMobileS = useMediaQuery({ query: device.mobileS });
    const tablet = useMediaQuery({ query: device.tablet });
    const paypal = useRef() as React.MutableRefObject<HTMLInputElement>;
    let history = useHistory();

    const buttonWidth = isMobileS ? "500px" : tablet ? "500px" : "100%";

    useEffect(() => {
        const chargeAmount = +amount

        stageCheckOut({amount, donator, location});

       window.paypal.Buttons({
           style: {
                size: "responsive",
                color: "black"
           },
            createOrder: ( data, actions, err) => {
                return actions.order.create({
                    intent: "CAPTURE",
                    purchase_units: [
                        {
                            description: "JLC Donation",              
                            amount: {
                                currency_code: "USD",
                                value: chargeAmount
                            }
                        }
                    ]
                })
            },
            onApprove: async (data, actions) => {
                const order = await actions.order.capture();
                console.log(order);
                console.log(data)
                history.push('/payment/?success=true')
            },
            onError: (err) => {
                console.log(err);
                history.push('/payment/?canceled=true')
            },
            
       }).render(paypal.current);
    }, [amount, donator, history, location])
   return (

       <div className='' ref={paypal} style={{width: buttonWidth, display: "flex", alignItems: "center", justifyContent: "center"}}>

       </div>

 )
}              

export default Paypal