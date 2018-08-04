import React, { Component } from 'react';
import { connect } from 'react-redux';
import StripeCheckout from 'react-stripe-checkout';

import * as actions from '../actions';

class AddCredits extends Component {
  render() {
    return (
      <StripeCheckout
        name="Emailer"
        description="$5 for 5 credits"
        amount={500}
        token={token => this.props.newPayment(token)}
        stripeKey={process.env.REACT_APP_STRIPE_PUBLIC_KEY}
      >
        <button className="btn">Add credits</button>
      </StripeCheckout>
    );
  }
}

export default connect(
  null,
  {
    newPayment: actions.newPayment
  }
)(AddCredits);
