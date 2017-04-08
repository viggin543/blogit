import React from 'react';
import { Link, IndexLink } from 'react-router';


const LubovskiHeader = () => {
    return (
        <header className="container">
            <div id="menu" className="navbar navbar-default navbar-fixed-top">
                <div className="navbar-header">
                    <button className="btn btn-succsess navbar-toggle"
                            data-toggle="collapse"
                            data-target=".navbar-collapse">
                        <span className="glyphicon glyphicon-chevron-down"></span>
                    </button>
                    <div id="logo">
                        <Link to="/lubovski" activeClassName="active"><h4>The Big Lebowski</h4></Link>
                    </div>
                </div>
                <div className="navbar-collapse collapse">
                    <ul className="nav navbar-nav navbar-right">
                        <li className="nav"><Link to="/lubovski" activeClassName="active" >Home</Link></li>
                        <li className="nav"><Link to="/lubovskiAbout" activeClassName="active">About</Link></li>
                        <li className="nav"><Link to="/lubovskiContacts" activeClassName="active">Contact</Link></li>
                        <li className="nav"><IndexLink to="/" activeClassName="active">Home</IndexLink></li>
                        <li className="nav"><Link to="/about" activeClassName="active">About</Link></li>
                        <li className="nav"><Link to="/courses" activeClassName="active">courses</Link></li>
                    </ul>
                </div>
            </div>
        </header>
    );
};

export default LubovskiHeader;
