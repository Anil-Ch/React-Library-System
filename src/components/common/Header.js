import  React, {PropTypes} from 'react';
import {Link, IndexLink} from 'react-router';

const  Header = () => {

  return (
      <nav>
        <IndexLink to="/" activeClassName="active">Home</IndexLink>
        {" | "}
        <Link to="/displaybook" activeClassName="active" >DisplayBook</Link>
        {" | "}
        <Link to="/addbook" activeClassName="active" >AddBook</Link>
        {" | "}
        <Link to="/about" activeClassName="active">About</Link>
      </nav>
  );
};

export  default Header;
