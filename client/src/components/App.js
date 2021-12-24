import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { connect } from 'react-redux';
import * as actions from '../actions'
import Header from "./Header";
import Landing from "./Landing";
import Dashboard from './Dashboard';
import SurveyNew from './survey/SurveyNew'


class App extends Component {
    componentDidMount() {
        this.props.fetchUser();
    }
    render() {
        return (
            <div className="container">
              <BrowserRouter>
                <div>
                  <Header />
                  <Switch>
                    <Route exact path="/"> <Landing /></Route>
                    <Route exact path="/surveys"><Dashboard /></Route>
                    <Route exact path="/surveys/new"><SurveyNew /></Route>
                  </Switch>
                </div>
              </BrowserRouter>
            </div>
          );
    }
};

export default connect(null,actions)(App);
