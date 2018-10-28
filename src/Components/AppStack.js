import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

/**
 * AppStack
 * ----------------------------------
 * Authenticated Section of our App.
 * This could be a HOC but let's wait for now
 */

import Navigation from './Navigation';


class AppStack extends Component {

	render(){

		// Redirect To Root if not Authenticated
		if(this.props.auth.isEmpty) return (<Redirect to="/" />);

		// Main Container
		return (

			<div className={'appstack ' + this.props.className}>

				<Navigation />

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

export default connect(mapStateToProps)(AppStack)
