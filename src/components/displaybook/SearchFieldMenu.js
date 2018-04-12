import React,{Component} from 'react';

class SearchFieldMenu extends Component{
  render () {
    return (
    <div>
      <div className="col-sm-4 col-xs-4">
        <div className="input-group">
          <span className="input-group-addon"><b>Web-APIs</b></span>
          <select className="form-control" id="selectedOption" value={this.props.searchInfo.searchOption} onChange={this.props.onSearchOptionChange} required>
            <option value="-1">Select Option..</option>
            <option value="All">Get All Book Records</option>
            <option value="Title">Find Book By Book Title</option>
            <option value="Genre">Find Book By Book Genre</option>
            <option value="AuthorName">Find Book By Book AuthorName</option>
          </select>
        </div>
      </div>

      <div className="col-sm-3 col-xs-3">
        <input type="text" className="form-control" value={this.props.searchInfo.searchValue}
               ref={this.props.searchInfo.searchValue} onChange={this.props.onSearchValueChange}/>
      </div>

      <div className="col-sm-3 col-xs-3">
        <button type="button" className="btn custBtn btn-primary" id="SearchBook"
                title="Select WepApi and Click on this button to find particular book." onClick={this.props.onSubmit}>Find Book
        </button>
      </div>

      <div className="col-sm-2 col-xs-2">
        <button type="button" className="btn custBtn custBtn btn-warning pull-right" id="clearTable"
                title="Click on this button to clear table." onClick={this.props.onReset}>Clear Table
        </button>
      </div>

    </div>
    );
  }
}
SearchFieldMenu.propTypes ={
  onReset: React.PropTypes.func,
  searchInfo:React.PropTypes.object,
  onSearchValueChange: React.PropTypes.func,
  onSearchOptionChange : React.PropTypes.func,
  onSubmit: React.PropTypes.func
};

export default SearchFieldMenu;
