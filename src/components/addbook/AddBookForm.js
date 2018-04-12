import React, {PropTypes} from "react";
import FormTextField from "../common/FormTextField";
import FormSelectField from "../common/FormSelectField";
import FormLabelField from "../common/FormLabelField";
import FormButtonField from "../common/FormButtonField";
import $ from "jquery";
import FormMultiSelectField from "../common/FormMultiSelectField";

class AddBookForm extends React.Component{
  constructor(props) {
    super(props);
    this.state = { BookInformation: {
        Title: "",
        BookIsnbnNo: "",
        Genre: "-1",
        Publisher: "-1",
        AuthorList: []
      },
      GenreList:  [
        "Literature","Fiction","Romance","Fiction","Crime","Thriller","Fantasy","Science"
      ],
      AuthorList: [],
      PublisherList: []
      };
  this.HandleOnSubmit = this.HandleOnSubmit.bind(this);
  this.UpdateStateOfField= this.UpdateStateOfField.bind(this);
  this.componentDidMount = this.componentDidMount.bind(this);
  this.SendData = this.SendData.bind(this);
  this.ClearFields = this.ClearFields.bind(this);
  this.UpdateMultipleSelect = this.UpdateMultipleSelect.bind(this);
  }


  componentWillMount(){
    console.log("Componment will mount");
  }

  componentDidMount(){
    console.log("Component Did Mount");
    let self = this;
    fetch('http://localhost:61045/book/author')
      .then(res => res.json())
      .then(function (response) {
        self.setState({AuthorList: response});
      });

    fetch('http://localhost:61045/book/Publisher')
      .then(res => res.json())
      .then(function (response) {
        self.setState({PublisherList:response});
      });
  }

  UpdateStateOfField (event) {
    console.log("UpdateStateOfField");
    let FieldName = event.target.name;
    let  FieldValue = event.target.value;
    this.state.BookInformation[FieldName]=FieldValue;
    return this.setState({BookInformation: this.state.BookInformation});
  }

  ClearFields(){
      console.log("ClearFields");
      this.state.BookInformation.AuthorList = "-1";
      this.state.BookInformation.Genre = "-1";
      this.state.BookInformation.BookIsnbnNo = "";
      this.state.BookInformation.Publisher = "-1";
      this.state.BookInformation.Title = "";
      this.setState({BookInformation: this.state.BookInformation});
  }

  UpdateMultipleSelect(event) {
    console.log("UpdateMultipleSelect");
    let options = event.target.options;
    let authorName = [];
    for (let i = 0, l = options.length; i < l; i++) {
      if (options[i].selected) {
        authorName.push(options[i].value);
      }
    }
    this.state.BookInformation.AuthorList=authorName;
    return this.setState({BookInformation: this.state.BookInformation});
  }

  SendData(){
    event.preventDefault();
    console.log("SendData");
    let tempBook = this.state.BookInformation;
    let Book = {
      BookIsnbnNo: tempBook.BookIsnbnNo,
      Title: tempBook.Title,
      Genre: tempBook.Genre,
      Publisher:
        {
          PublisherName :tempBook.Publisher
        },
      AuthorList: tempBook.AuthorList

    };
   // fetch("http://localhost:61045/book",
   //    {
   //      method: 'POST',
   //      headers: {'Content-Type':'application/json; charset=utf-8'},
   //      body: JSON.stringify(Book)
   //    })
   //    .then(function(res){
   //      if(res.status === 200){
   //        alert("Succesfull Submitted the data");
   //      }
   //      else {
   //        console.log(res);
   //        alert("Failed to submit data");
   //      }
   //    });

    let authorListTemp = [];
    for(let index in Book.AuthorList){
     authorListTemp[index] = {AuthorName: Book.AuthorList[index]};
    }
    Book.AuthorList = authorListTemp;

    // Performing a POST request
     $.ajax({
      url: "http://localhost:61045/book",
      type: "POST",
      data: Book,
      success: function(data) {
        alert("Succesfull Submitted the data");
        this.ClearFields();
      }.bind(this),
      error: function(xhr, status, err) {
        alert("Failed to submit data");
      }.bind(this)
    });


  }

  HandleOnSubmit(event){
    console.log("HandleOnSubmit");
    if(this.state.BookInformation.Title === "") {
      alert("Enter Book Title");
      return;
    }
    if(this.state.BookInformation.BookIsnbnNo === "") {
      alert("Enter Book Isbn");
      return;
    }
    if(this.state.BookInformation.Genre == "-1") {
      alert("Select Book Genre");
      return;
    }
    if(this.state.BookInformation.AuthorList.length < 1) {
      alert("Enter Book Author");
      return;
    }
    if(this.state.BookInformation.Publisher === "-1") {
      alert("Enter Book Publisher");
      return;
    }

    this.SendData();
  }

  render() {
    console.log("Render");
    return (
      <div>
        <div style={{backgroundColor:"skyblue",alignContent:"center",fontSize:22,marginTop:26}}>
          <center>Add Book Form</center>
        </div>
      <div className="container formStyle">

        <div className="row form-group" style={{marginTop:14}}>
          <div className="col-md-3">
            <FormLabelField TextFieldName="Title" FieldTitle="Book Title"/>
          </div>
          <div className="col-md-9">
            <FormTextField TextFieldName="Title" TextFieldValue={this.state.BookInformation.Title} onChange={this.UpdateStateOfField}/>
          </div>
        </div>

        <div className="row form-group">
          <div className="col-md-3">
            <FormLabelField TextFieldName="BookIsnbnNo" FieldTitle="Book Isbn"/>
          </div>
          <div className="col-md-9">
            <FormTextField TextFieldName="BookIsnbnNo" TextFieldValue={this.state.BookInformation.BookIsnbnNo} onChange={this.UpdateStateOfField}/>
          </div>
        </div>

        <div className="row form-group">
          <div className="col-md-3">
            <FormLabelField TextFieldName="Genre" FieldTitle="Book Genre"/>
          </div>
          <div className="col-md-9">
          <FormSelectField SelectFieldName="Genre" optionList={this.state.GenreList} selectFieldValue={this.state.BookInformation.Genre} onChange={this.UpdateStateOfField}/>
          </div>
        </div>

        <div className="row form-group">
          <div className="col-md-3">
            <FormLabelField TextFieldName="AuthorList" FieldTitle="Book Author"/>
          </div>
          <div className="col-md-9">
        <FormMultiSelectField SelectFieldName="AuthorList" optionList={this.state.AuthorList} selectFieldValue={this.state.BookInformation.AuthorList} onChange={this.UpdateMultipleSelect}/>
         </div>
        </div>

        <div className="row form-group">
          <div className="col-md-3">
            <FormLabelField TextFieldName="Publisher" FieldTitle="Book Publisher"/>
          </div>
          <div className="col-md-9">
            <FormSelectField SelectFieldName="Publisher" optionList={this.state.PublisherList} selectFieldValue={this.state.BookInformation.Publisher} onChange={this.UpdateStateOfField}/>
         </div>
        </div>

        <div className="row form-group">
          <div className="col-md-offset-4 col-sm-offset-4 col-md-3 col-sm-3">
          <FormButtonField ButtonTitle="Submit" ButtonName="SubmitButton" onClick={this.HandleOnSubmit}/>
          </div>
          <div className="col-md-3 col-sm-3">
            <FormButtonField ButtonTitle="Reset" ButtonName="ClearFeidls" onClick={this.ClearFields}/>
          </div>
        </div>
      </div>
      </div>
    );
  }


}


AddBookForm.propTypes ={
  TextFieldValue: PropTypes.string
};

export default AddBookForm;
