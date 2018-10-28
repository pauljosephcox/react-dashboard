import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import {Elements, StripeProvider} from 'react-stripe-elements';

import config from '../config/config';
import AppStack from './AppStack'

import EditAccount from './Account/EditAccount';
import EditSubscription from './Account/EditSubscription';

class Account extends Component {

	constructor(props){

        super(props);


    }




	render(){

		return (
			<AppStack className="account" history={this.props.history}>

				<div className="panel">

					<div className="body">

						<h1>Account</h1>
						<EditAccount />

					</div>

				</div>

				<div className="panel">

					<div className="body">

						<EditSubscription/>

					</div>

				</div>

				<div className="panel">

					<div className="body">

						<Link to='/logout' className="button-primary">Logout</Link>

					</div>

				</div>

			</AppStack>
		);

	}

}

// ------------------------------------
// REDUX
// ------------------------------------

const mapStateToProps = (state) => {
	return { user: state.User };
}
const mapDispatchToProps = (dispatch) => {
	return {}
}

export default connect(mapStateToProps,mapDispatchToProps)(Account)
