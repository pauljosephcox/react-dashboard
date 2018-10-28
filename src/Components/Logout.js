import React, { Component } from 'react';
import { connect } from 'react-redux'
import { logoutAccount } from '../Actions/User'

import AppStack from './AppStack'

class Logout extends Component {

	constructor(props){

        super(props);

  }
	componentWillMount(){

		this.props.logOut();
		
	}

	render(){

		return (
			<AppStack className="logout" history={this.props.history}>

				<h1>Goodbye</h1>

			</AppStack>
		);

	}

}

const mapStateToProps = (state) => {
	return { user: state.User };
}

const mapDispatchToProps = (dispatch) => {
	return {
		logOut: () => { dispatch(logoutAccount())}
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(Logout)
