import  React from 'react';
import  {Route, IndexRoute } from 'react-router';
import  App from './components/App';
import  HomePage from './components/home/HomePage';
import  AboutPage from './components/about/AboutPage';
import DisplayBookPage from './components/displaybook/DisplayBookPage';
import AddBookPage from './components/addbook/AddBookPage';


export default (
  <Route path="/" component={App} >
    <IndexRoute component={HomePage}/>
    <Route path="displaybook" component={DisplayBookPage}/>
    <Route path="addbook" component={AddBookPage}/>
    <Route path="about" component={AboutPage} />

  </Route>
);
