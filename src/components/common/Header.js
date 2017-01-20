import React from 'react';
import { Link, IndexLink } from 'react-router';

const Header = () => {
  return (
    <nav>
      <IndexLink to="/" activeClassName="active">Home</IndexLink>
      {"  |  "}
      <Link to="/timelapse" activeClassName="active">Timelapse</Link>
      <br/>
      <br/> 
    </nav>
  );
};

export default Header;