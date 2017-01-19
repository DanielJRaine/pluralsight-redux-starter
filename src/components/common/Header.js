import React, {PropTypes} from 'react';
import { Link, IndexLink } from 'react-router';

const Header = () => {
  return (
      // {" | "}
      // <Link to="/about" activeClassName="active">About</Link>
      // {" | "}
      // <Link to="/courses" activeClassName="active">Courses</Link>
      // {" | "}
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