import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { auth, firestore } from '../config/Firebase';

import config from '../config/config';
import AuthStack from './AuthStack'

class Login extends Component {

	constructor(props){

        super(props);
		this.handleLogin = this.handleLogin.bind(this)

		this.state = {
			email: '',
			password:'',
			error: null
		}


    }



	handleLogin(){


		// Login
		auth.signInWithEmailAndPassword(this.state.email, this.state.password)
		.then((res) => {

			this.props.onLoginSuccess(res);

		})
		.catch((error) => { this.setState({error:error})});


	}

	renderErrors(){

		if(!this.state.error) return;

		return (
			<p className="error">{this.state.error.message}</p>
		)

	}

	render(){

		return (
			<AuthStack className="login">

				<div className="Login -center-panel-container">

					<div className="panel">

						<div className="header">
							<img src={config.theme.logo} alt="Logo"/>
						</div>

						<div className="body">

							{this.renderErrors()}

							<input type="email" value={this.state.email} onChange={(event) => this.setState({email:event.target.value})} required placeholder="Email" />

							<input type="password" value={this.state.password} onChange={(event) => this.setState({password:event.target.value})} required placeholder="Password" />

							<p><button className="primary" onClick={() => this.handleLogin()}>Log In - New</button></p>

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
	return {
		auth: state.firebase.auth,
		firestore: state.firestore,
	};
}

const mapDispatchToProps = (dispatch) => {
	return {}
}


export default connect(mapStateToProps,mapDispatchToProps)(Login)
