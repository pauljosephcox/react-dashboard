import React, {Component} from 'react';
import {CardElement, injectStripe} from 'react-stripe-elements';

class CheckoutForm extends Component {

  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
    this.state = {complete:false};
  }

  async submit(ev) {

    // Get The Token From Stipe
    let {token} = await this.props.stripe.createToken({name: "Name"});

    // Run Callback
    this.props.onTokenRecieved(token);

    // TODO: Display Errors

  }

  render() {
    if (this.state.complete) return <h1>Purchase Complete</h1>;
    return (
      <div className="checkout">
        <CardElement />
        <button onClick={this.submit} className={this.props.buttonClass}>{this.props.buttonTitle}</button>
      </div>
    );
  }
}

export default injectStripe(CheckoutForm);
