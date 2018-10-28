import React, { Component } from 'react';
import { connect } from 'react-redux'

import config from '../../config/config';

class ChangePlan extends Component {

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

	render(){

		return (

            <div className="change-plan">
				<label>Change Plan - TODO</label>
				<select value={this.state.plan} onChange={(event) => this.setState({plan:event.target.value})} required>
					{this.renderPlanOptions()}
				</select>
				<button>Change Plan</button>
			</div>

		);

	}

}




export default ChangePlan;
