import React, { Component } from 'react';
import { connect } from 'react-redux'
import { logOut } from '../Actions/Login'

import AppStack from './AppStack'

class Home extends Component {

	constructor(props){

        super(props);

    }

	render(){

		return (

			<AppStack className="home"  history={this.props.history}>

				<div>

					<h1>Home.js</h1>
					
					<p>This is where everything will go</p>

				</div>

			</AppStack>
		);

	}

}



const mapStateToProps = (state) => {
	return { user: state.User };
}
const mapDispatchToProps = (dispatch) => {
	return {
		onLogout:() => { dispatch(logOut())}
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(Home)
