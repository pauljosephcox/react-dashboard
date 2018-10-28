import React, { Component } from 'react';
import { connect } from 'react-redux'
import { updateAccount } from '../../Actions/User'

class EditAccount extends Component {

	constructor(props){

        super(props);
		this.handleSave = this.handleSave.bind(this)

		// TODO: This should be a form with an onSubmit

		this.state = {
			email: '',
			first_name:'',
			last_name:''
		}

    }

    componentDidMount(){
        this.setState({
			'email':this.props.auth.email,
			'first_name': this.props.profile.firstname,
			'last_name': this.props.profile.lastname
		});
    }


	handleSave(){

		// TODO: Validate

		// Login
		this.props.updateAccount(this.props.auth.uid, this.state.email, this.state.first_name, this.state.last_name);


	}

	renderErrors(){

		if(!this.props.user.error) return;

		return (
			<p className="error">{this.props.user.error.message}</p>
		)

	}

	render(){

		return (

			<div className="edit-account">

				{this.renderErrors()}

				<div className="form-field">
					<label>Email</label>
					<input type="email" value={this.state.email} onChange={(event) => this.setState({email:event.target.value})} required />
				</div>

				<div className="form-field">
					<label>First Name</label>
					<input type="text" value={this.state.first_name} onChange={(event) => this.setState({first_name:event.target.value})} required />
				</div>

				<div className="form-field">
					<label>Last Name</label>
					<input type="text" value={this.state.last_name} onChange={(event) => this.setState({last_name:event.target.value})} required />
				</div>

				<p><button className="primary" onClick={() => this.handleSave()}>Save Changes</button></p>

			</div>

		);

	}

}

const mapStateToProps = (state) => {
	return {
		user: state.User,
		auth: state.firebase.auth,
		profile: state.firebase.profile
	};
}

const mapDispatchToProps = (dispatch) => {
	return {
		updateAccount:(uid, email, first_name, last_name) => { dispatch(updateAccount(uid, email, first_name, last_name))}
	}
}


export default connect(mapStateToProps,mapDispatchToProps)(EditAccount)
