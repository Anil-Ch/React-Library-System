import React from 'react';
import SearchFieldMenu from './SearchFieldMenu';
import DisplayBookTable from './DisplayBookTable';

class DisplayBookPage extends React.Component{
  constructor(props) {
    super(props);
    this.HandleReset = this.HandleReset.bind(this);
    this.HandleSearchOptionChange =this.HandleSearchOptionChange.bind(this);
    this.HandleSearchValueChange =this.HandleSearchValueChange.bind(this);
    this.FindRecords =this.FindRecords.bind(this);
    this.FetchRecords = this.FetchRecords.bind(this);
    this.convertAuthorListToString = this.convertAuthorListToString.bind(this);

    this.state={
      DisplayList: [],
      searchInfo:{
        searchValue :"",
        searchOption:"-1"
      }};
      }

  HandleReset(){
   console.log("HandleReset");
    this.state.searchInfo.searchValue = "";
    this.state.searchInfo.searchOption="-1";
    this.setState({searchInfo: this.state.searchInfo});
    let self= this;
    self.setState({DisplayList: []});
    }

  HandleSearchValueChange(event){
    this.state.searchInfo.searchValue=event.target.value;
    this.setState((prevState) =>({searchInfo: prevState.searchInfo}));
  }

  HandleSearchOptionChange(event){
    this.state.searchInfo.searchOption= event.target.value;
    this.setState((prevState) =>({searchInfo:prevState.searchInfo}));
  }

  FindRecords(){
    console.log("FindRecords");
   this.FetchRecords();
  }

  convertAuthorListToString(response){
    console.log("convertAuthorListToString");
    for(let index in response){
      let AuthorName =  response[index].AuthorList.map(function(author,index){
        return author.AuthorName;
      }).join(",");
      response[index].AuthorList = AuthorName;
    }
    return response;
  }

  FetchRecords(){
    console.log("FetchRecords");
    let SelectedOption = this.state.searchInfo.searchOption;
    let EnteredValue = this.state.searchInfo.searchValue;
    let self = this;
    if(SelectedOption === "-1"){
      alert("Select Valid Option");
      return;
    }
    if(SelectedOption === "All"){
      fetch('http://localhost:61045/')
        .then(res => res.json())
        .then(function (response) {
          console.log(response);
          if(response != null) {
            response = self.convertAuthorListToString(response);
          }
          console.log(response);
          self.setState({DisplayList:response});
        }).catch((error) => {
       alert("No Data Found !");
      });
    }
    else {
      if (EnteredValue === "") {
        alert("Enter The Value In TextField");
        return;
      }

      if (SelectedOption === "Title") {
        fetch("http://localhost:61045/book/find/title/" + EnteredValue)
          .then(res => res.json())
          .then(function (response) {
            if(response != null) {
              response = self.convertAuthorListToString(response);
            }
            self.setState({DisplayList:response});
          }).catch((error) => {
          alert("No Data Found !");
        });
      }
      else if (SelectedOption === "Genre") {
        fetch("http://localhost:61045/book/find/genre/" + EnteredValue)
          .then(res => res.json())
          .then(function (response) {
            if(response != null) {
              response = self.convertAuthorListToString(response);
            }
            self.setState({DisplayList:response});
          }).catch((error) => {
          alert("No Data Found !");
        });
      }
      else if (SelectedOption === "AuthorName") {
        fetch("http://localhost:61045/book/find/authorname/" + EnteredValue)
          .then(res => res.json())
          .then(function (response) {
            if(response != null) {
              response = self.convertAuthorListToString(response);
            }
            self.setState({DisplayList:response});
          }).catch((error) => {
          alert("No Data Found !");
        });
      }
    }
    if(self.state.DisplayList === null){
      alert("No Data Found");
    }
  }



  render () {
    console.log("render");
    return (
      <div className="container-fluid" style={{marginTop:14}}>
        <div>
          <SearchFieldMenu searchInfo={this.state.searchInfo} onSubmit={this.FindRecords} onReset={this.HandleReset} onSearchValueChange={this.HandleSearchValueChange} onSearchOptionChange={this.HandleSearchOptionChange}/>
        </div>
          <div className="container-fluid">
            <DisplayBookTable DisplayList={this.state.DisplayList}/>
          </div>
       </div>
    );
  }
}



export default DisplayBookPage;
