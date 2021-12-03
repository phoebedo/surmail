import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions'

const Landing = () =>{
    return (
        <div className="center-align">
            <h1>
                Welcome to Surmail!
            </h1>
            <h3>
            Create custom surveys and polls.
            </h3>
            
        </div>
    )
}

export default Landing;