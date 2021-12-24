import React, { Component } from "react";
import { connect } from "react-redux";
import formFields from "./formFields";
import * as actions from "../../actions/index";
import { withRouter } from 'react-router-dom';

class SurveyReview extends Component {
  renderFields() {
    return formFields.map(({ name, label }, i) => {
      return (
        <div key={i}>
          <label htmlFor="">{label}</label>
          <div>{this.props.formValues[name]}</div>
        </div>
      );
    });
  }
  render() {
    return (
      <div>
        <h5>Confirm your entries</h5>
        {this.renderFields()}
        <button
          className="white-text yellow darken-3 btn-flat"
          onClick={this.props.onCancel}
        >
          back
        </button>
        <button
          onClick={() => this.props.submitSurvey(this.props.formValues, this.props.history)}
          className="green white-text right btn-flat"
        >
          Send Survey
          <i className="material-icons right">email</i>
        </button>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    formValues: state.form.surveyForm.values,
  };
}
export default connect(mapStateToProps, actions)(withRouter(SurveyReview));
