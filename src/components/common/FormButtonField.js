import React, {PropTypes} from 'react';

class FormButtonField extends React.Component{
  render () {
    return (
      <div>
        <button type="button" className="btn btn-lg btn-primary"
                title={this.props.ButtonTitle} name={this.props.ButtonName} onClick={this.props.onClick}>{this.props.ButtonTitle}
        </button>

      </div>
    );
  }
}

FormButtonField.propTypes ={
  ButtonTitle: React.PropTypes.string,
  ButtonName: React.PropTypes.string,
  onClick : React.PropTypes.func.isRequired
};

export default FormButtonField;



