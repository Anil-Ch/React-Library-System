import React,{PropTypes} from "react";
import ReactTable from 'react-table';
import 'react-table/react-table.css';


class DisplayBookTable extends React.Component {
  render() {
    const columns = [{
        Header: 'Book Title',
        accessor: 'BookTitle' // String-based value accessors!
      },  {
      Header: 'Book IsbnNo',
      accessor: 'BookIsbnNo' // String-based value accessors!
         },{
      Header: 'Book Genre',
      accessor: 'BookGenre' // String-based value accessors!
    },{
      Header: 'Book Publisher',
      accessor: 'Publisher' // String-based value accessors!
    },{
      Header: 'Book Author',
      accessor: "AuthorList" // String-based value accessors!
    }];
    return (
      <div style={{marginTop:50}} className="container-fluid">
        <ReactTable style="height:auto"
          data={this.props.DisplayList}
          columns={columns}
          defaultPageSize={10}
          className="-striped -highlight"
        />
      </div>
    );
  }
}

DisplayBookTable.propTypes ={
  DisplayList: React.PropTypes.arrayOf(React.PropTypes.object)
};

export default DisplayBookTable;
