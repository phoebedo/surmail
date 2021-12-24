import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import SurveyField from "./SurveyField";
import { Link } from "react-router-dom";
import validateEmails from "../../utils/validateEmails";
import formFields from "./formFields";

class SurveyForm extends Component {
  renderFields() {
    return formFields.map(({ name, label }, i) => (
      <Field
        key={i}
        type="text"
        name={name}
        label={label}
        component={SurveyField}
      />
    ));
  }
  render() {
    return (
      <div>
        <form
          action=""
          onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}
        >
          {this.renderFields()}
          <Link to="/surveys" className="red btn-flat white-text">
            Cancel
          </Link>
          <button type="submit" className="teal btn-flat right white-text">
            Next <i className="material-icons right">done</i>
          </button>
        </form>
      </div>
    );
  }
}

function validate(values) {
  let errors = {};
  formFields.forEach(({ name }) => {
    if (!values[name]) {
      errors[name] = `You must provide a value`;
    }
  });

  errors.recipients = validateEmails(values.recipients || " ");

  return errors;
}

export default reduxForm({
  destroyOnUnmount: false,
  validate,
  form: "surveyForm",
})(SurveyForm);
