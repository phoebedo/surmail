import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions";
import { Link } from "react-router-dom";
import Payment from "./Payment";

class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return [
          <li key ='1'>
            <Payment />
          </li>,
          <li key ='2'>
            <a href="/auth/google">LOGIN WITH GOOGLE</a>
          </li>,
        ];
      default:
        return (
          <li>
            <a href="/api/logout">LOGOUT</a>
          </li>
        );
    }
  }

  render() {
    console.log(this.props);
    return (
      <nav>
        <div className="nav-wrapper">
          <Link
            to={this.props.auth ? "/surveys" : "/"}
            className="left brand-logo"
          >
            Surmail
          </Link>
          <ul className="right">{this.renderContent()}</ul>
        </div>
      </nav>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
