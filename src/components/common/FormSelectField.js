import React, {PropTypes} from 'react';
import Select from 'react-select';

class FormSelectField extends React.Component{
  render () {
    return (<div>
      <select name={this.props.SelectFieldName} value={this.props.selectFieldValue} className="form-control" onChange={this.props.onChange}>
        <option value="-1">Select ..</option>
        {this.props.optionList.map(function (name, index) {
          return <option key={index} value={name}>{name}</option>;
        })}
      </select>
    </div>);
  }
}

FormSelectField.propTypes ={
  SelectFieldName: React.PropTypes.string,
  optionList : React.PropTypes.array,
  onChange: React.PropTypes.func,
  selectFieldValue: React.PropTypes.string
};

export default FormSelectField;



