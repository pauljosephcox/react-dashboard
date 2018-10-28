import React, { Component } from 'react';
import { connect } from 'react-redux'

import config from '../../config/config';
import StripePayments from '../StripePayments';

class UpdatePaymentMethod extends Component {

	constructor(props){

        super(props);

    }

	render(){

		return (

            <div className="update-payment-method">

				<label>Update Payment Method - TODO</label>
				<StripePayments buttonClass="normal" buttonTitle="Update" onTokenRecieved={(token) => {console.log("StripePayments::onTokenRecieved - UPDATE PAYMENT METHOD"); }} />

			</div>

		);

	}

}

export default UpdatePaymentMethod;
