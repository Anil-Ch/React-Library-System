import React, {PropTypes} from 'react';
import FormLabelField from "./FormLabelField";

class FormTextField extends React.Component{
  render () {
      return (
      <div>
        <input className="form-control" ref={this.props.TextFieldName} name={this.props.TextFieldName} value={this.props.TextFieldValue}
               autoComplete="off" id={this.props.TextFieldName}  onChange={this.props.onChange} required/>
      </div>
      );
  }
}

FormTextField.propTypes ={
  TextFieldValue:  React.PropTypes.string,
  onChange : React.PropTypes.func,
  TextFieldName:  React.PropTypes.string
 };

export default FormTextField;



