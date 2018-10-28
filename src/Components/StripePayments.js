import React, { Component } from 'react';
import {Elements, StripeProvider} from 'react-stripe-elements';

import config from '../config/config';
import CheckoutForm from './CheckoutForm';

class StripePayments extends Component {

	render(){

		return (
			<div className="stripe-payments">

				<StripeProvider apiKey={config.stripe.public}>

					<Elements>

		            	<CheckoutForm onTokenRecieved={this.props.onTokenRecieved} buttonTitle={this.props.buttonTitle} buttonClass={this.props.buttonClass}/>

		          	</Elements>

		      	</StripeProvider>

			</div>
		);

	}

}

export default StripePayments
