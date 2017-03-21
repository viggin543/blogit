import React from 'react';
import { Link } from 'react-router';


const LubovskiHeader = () => {

    return (
        <header className="container">
            <div id="menu">
                <ul>
                    <li><Link to="/lubovski" activeClassName="active">Home</Link></li>
                    <li><Link to="/lubovskiAbout" activeClassName="active">About</Link></li>
                    <li><Link to="/lubovskiContacts" activeClassName="active">Contact</Link></li>
                </ul>
            </div>
            <div id="logo">
                <Link to="/lubovski" activeClassName="active">The Big Lebowski</Link>
            </div>
        </header>
    );
};

export default LubovskiHeader;
