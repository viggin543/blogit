import React, {PropTypes} from 'react';
import { Link, IndexLink } from 'react-router';
import LoadingDots from './LoadingDots';
import LubovskiHeader  from '../lubovski/LubovskiHeader';

    /*<nav>
      
      {" | "}
      <Link to="/about" activeClassName="active">About</Link>
      {" | "}
      <Link to="/lubovski" activeClassName="active">lubovski</Link>
      {" | "}
      <Link to="/courses" activeClassName="active">courses</Link>
      {loading && <LoadingDots interval={100} dots={20} />}
    </nav>*/
const Header = ({loading}) => {
  return (
    <LubovskiHeader/>
  );
};

Header.propTypes = {
  loading: PropTypes.bool.isRequired
};


export default Header;

