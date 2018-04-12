import React, {PropTypes} from 'react';

class FormLabelField extends React.Component{
  render () {
    return (
      <div>
        <label className="form-label" htmlFor={this.props.TextFieldName}>{this.props.FieldTitle}</label>
      </div>
    );
  }
}

FormLabelField.propTypes ={
  TextFieldName:  React.PropTypes.string,
  FieldTitle : React.PropTypes.string
};

export default FormLabelField;



