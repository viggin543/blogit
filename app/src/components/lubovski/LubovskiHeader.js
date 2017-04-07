import React from 'react';
import { Link, IndexLink } from 'react-router';


const LubovskiHeader = () => {
    return (
        <header className="container">
            <div id="menu" className="navbar navbar-default">
                <div className="navbar-header">
                    <button className="btn btn-warning">
                        <span className="glyphicon glyphicon-chevron-down"></span>
                    </button>
                    <div id="logo">
                        <Link to="/lubovski" activeClassName="active"><h4>The Big Lebowski</h4></Link>
                    </div>
                </div>
                <ul className="nav navbar-nav navbar-right margin-right0">
                    <li className="nav"><Link to="/lubovski" activeClassName="active" >Home</Link></li>
                    <li className="nav"><Link to="/lubovskiAbout" activeClassName="active">About</Link></li>
                    <li className="nav"><Link to="/lubovskiContacts" activeClassName="active">Contact</Link></li>
                    <li className="nav"><IndexLink to="/" activeClassName="active">Home</IndexLink></li>
                    <li className="nav"><Link to="/about" activeClassName="active">About</Link></li>
                    <li className="nav"><Link to="/courses" activeClassName="active">courses</Link></li>
      

                </ul>
            </div>
        </header>
    );
};

export default LubovskiHeader;
