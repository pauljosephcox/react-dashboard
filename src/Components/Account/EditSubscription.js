import React, { Component } from 'react';
import { connect } from 'react-redux'

import config from '../../config/config';
import StripePayments from '../StripePayments';
import ChangePlan from './ChangePlan';
import UpdatePaymentMethod from './UpdatePaymentMethod';

class EditSubscription extends Component {

	constructor(props){

        super(props);
        this.state = {plan:''}

    }

    renderPlanOptions(){
		const plans = config.stripe.plans.map((plan) =>
		  <option key={plan.plan_id} value={plan.plan_id}>{plan.name} {plan.price}</option>
		);
		return plans;
	}

	renderChoosePlan(){

		return (
			<div className="edit-subscription">

				<h1>Choose A Plan</h1>

				<select value={this.state.plan} onChange={(event) => this.setState({plan:event.target.value})} required>
					{this.renderPlanOptions()}
				</select>

				<StripePayments buttonClass="primary" buttonTitle="Subscribe" onTokenRecieved={(token) => {console.log("StripePayments::onTokenRecieved - New Plan"); }} />

			</div>
		)

	}



	render(){

		// Choose Plan
		if(!this.props.user.plan) return this.renderChoosePlan();

		return (


			<div className="edit-subscription">

				<ChangePlan />

				<hr/>

				<UpdatePaymentMethod />

				<hr/>

				<div className="cancel-plan">

					<button className="button -fear" onClick={()=>{alert("Cancel Subscription");}}>Cancel Subscription</button>

				</div>

			</div>

		);

	}

}

const mapStateToProps = (state) => {
	return { user: state.User };
}

const mapDispatchToProps = (dispatch) => {
	return {}
}


export default connect(mapStateToProps,mapDispatchToProps)(EditSubscription)
