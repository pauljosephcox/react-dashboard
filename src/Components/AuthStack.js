import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

class AuthStack extends Component {

	constructor(props){

        super(props);

  	}

	render(){

		// Route To Home if Logged in.
		if(!this.props.auth.isEmpty) return (<Redirect to="/" />)


		return (

			<div className={'appstack ' + this.props.className}>

				<div className="app-body">

					{this.props.children}

				</div>

			</div>
		);

	}

}

const mapStateToProps = (state) => {
	return {
		auth: state.firebase.auth
	};
}


export default connect(mapStateToProps)(AuthStack)
