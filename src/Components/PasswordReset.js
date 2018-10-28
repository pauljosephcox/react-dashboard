import React, { Component } from 'react';
import { connect } from 'react-redux'
import { requestPasswordReset } from '../Actions/User'
import { Link } from 'react-router-dom'

import config from '../config/config';
import AuthStack from './AuthStack'

class PasswordReset extends Component {

	constructor(props){

        super(props);
		this.handleReset = this.handleReset.bind(this)

		this.state = {
			email: '',
		}


    }



	handleReset(){

		// Login
		this.props.onRequestReset(this.state.email);

	}

	renderErrors(){

		if(!this.props.user.error) return;

		return (
			<p className="error">{this.props.user.error.message}</p>
		)

	}

	renderSuccess(){

		if(!this.props.user.success) return;

		return (
			<p className="success">{this.props.user.success}</p>
		)

	}

	render(){

		return (
			<AuthStack className="password-reset">

				<div className="PasswordReset -center-panel-container">

					<div className="panel">

						<div className="header">
							<img src={config.theme.logo} alt="Logo"/>
						</div>

						<div className="body">

							{this.renderErrors()}
							{this.renderSuccess()}

							<input type="email" value={this.state.email} onChange={(event) => this.setState({email:event.target.value})} required placeholder="Email"/>

							<p><button className="primary" onClick={() => this.handleReset()}>Request Password Reset</button></p>

						</div>

						<div className="footer">

							<Link to='/'>Login</Link>

							<Link to='/signup'>Sign up</Link>

						</div>

					</div>

				</div>
			</AuthStack>
		);

	}

}

const mapStateToProps = (state) => {
	return { user: state.User };
}

const mapDispatchToProps = (dispatch) => {
	return {
		onRequestReset:(email,password) => { dispatch(requestPasswordReset(email))}
	}
}



export default connect(mapStateToProps,mapDispatchToProps)(PasswordReset)
