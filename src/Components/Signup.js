import React, { Component } from 'react';
import { connect } from 'react-redux'
import { createAccount } from '../Actions/User'
import { Link } from 'react-router-dom'

import config from '../config/config';
import AuthStack from './AuthStack'

class Signup extends Component {

	constructor(props){

        super(props);
		this.handleLogin = this.handleLogin.bind(this)

		this.state = {
			email: '',
			password:''
		}


    }



	handleLogin(){

		// Login
		this.props.onCreateAccount(this.state.email,this.state.password);

	}

	renderErrors(){

		if(!this.props.user.error) return;

		return (
			<p className="error">{this.props.user.error.message}</p>
		)

	}

	render(){

		return (
			<AuthStack className="signup">

				<div className="Signup -center-panel-container">

					<div className="panel">

						<div className="header">
							<img src={config.theme.logo} alt="Logo"/>
						</div>

						<div className="body">

							{this.renderErrors()}

							<input type="email" value={this.state.email} onChange={(event) => this.setState({email:event.target.value})} required placeholder="Email"/>

							<input type="password" value={this.state.password} onChange={(event) => this.setState({password:event.target.value})} required placeholder="Password"/>

							<p><button className="primary" onClick={() => this.handleLogin()}>Signup</button></p>

						</div>

						<div className="footer">

							<Link to='/reset'>Forgot your password?</Link>

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
		onCreateAccount:(email,password) => { dispatch(createAccount(email,password))}
	}
}



export default connect(mapStateToProps,mapDispatchToProps)(Signup)
