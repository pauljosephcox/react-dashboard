import React, { Component } from 'react';
import { connect } from 'react-redux'

import Login from './Login'
import Home from './Home'
import FullScreenLoader from './FullScreenLoader'

/**
 * AppSwitcher
 * ----------------------------------
 * Switches between the Login State and the Dashboard.
 */

class AppSwitcher extends Component {

	render(){

		// Loading
		if(!this.props.auth.isLoaded) return (<FullScreenLoader />);

		// Not Authenticated
		if(this.props.auth.isEmpty) return (<Login />);

		// Authenticated
		return (<Home />)

	}
}

const mapStateToProps = (state) => {
	return {
		auth: state.firebase.auth
	};
}

const mapDispatchToProps = (dispatch) => {
	return {}
}


export default connect(mapStateToProps,mapDispatchToProps)(AppSwitcher)
