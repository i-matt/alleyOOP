import React from 'react';
import {StripeProvider} from 'react-stripe-elements';
import Checkout from '../Donations/Checkout';

class Stripe extends React.Component{
    constructor(props){
        super(props);
        this.state = {
        };
    }

    render(){
        return(
            <StripeProvider apiKey='pk_test_6pRNASCoBOKtIshFeQd4XMUh'>
                <Checkout />
            </StripeProvider>
        )
    }
}
export default Stripe

