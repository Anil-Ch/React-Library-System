import React, {PropTypes} from 'react';

class FormMultiSelectField extends React.Component{
  render () {
    return (<div>
      <select name={this.props.SelectFieldName} value={this.props.selectFieldValue} className="form-control" onChange={this.props.onChange} multiple >
        {this.props.optionList.map(function (name, index) {
          return <option key={index} value={name}>{name}</option>;
        })}
      </select>
    </div>);
  }
}

FormMultiSelectField.propTypes ={
  SelectFieldName: React.PropTypes.string,
  optionList : React.PropTypes.array,
  selectFieldValue: React.PropTypes.string,
  onChange: React.PropTypes.func
};

export default FormMultiSelectField;



