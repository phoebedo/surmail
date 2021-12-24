import React, { Component } from 'react';

import StripeCheckout from 'react-stripe-checkout';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Payment extends Component{
    render() {
        return (
            <StripeCheckout
                name="Surmail"
                description="$10 for 10 email credits"
                amount={1000}
                token={token => this.props.handleToken(token)}
                stripeKey = {process.env.REACT_APP_STRIPE_KEY}
            >
                <button className="btn">Add credit</button>
            </StripeCheckout>
        )
    }
}

export default connect(null,actions)(Payment)