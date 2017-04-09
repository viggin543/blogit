import React from 'react';
import { Link } from 'react-router';
import LubovskiHeader from './LubovskiHeader';
import Footer from './Footer';


export default class Contacts extends React.Component {
    render() {
        return (
            <div  className="container" >
                <div id="page">
                    <section id="body">
                        <h1>Contact Us</h1>
                        <p>This doesn't really work, but it's an example of a form. Easy, man. Relax, man.</p>
                        <div className="col-md-6">
                            <form className="form-horizontal">
                                    <div className="form-group">
                                        <label htmlFor="nameInput"
                                               className="control-label col-md-2">
                                               Your Name 
                                        </label>
                                        <div className="col-md-10">
                                            <input type="text"
                                                    name="nameInput" 
                                                    className="form-control"
                                                    placeholder="e.g your name"
                                                    />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label  className="control-label col-md-2" 
                                                htmlFor="emailInput">Email
                                        </label>
                                        <div className="col-md-10">
                                            <input className="form-control"
                                                    name="emailInput"
                                                    type="email"
                                                    placeholder="yourName@protonMail.com"/>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="control-label col-md-2" >Reason</label>
                                        <div className="col-md-10">
                                            <select className="form-control">
                                                <option>Adoration</option>  
                                                <option>Ordering a White Russian</option>
                                                <option>Complaint</option>
                                                <option>I am lost</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="control-label col-md-2">Message</label>
                                        <div className="col-md-10">
                                            <textarea className="form-control" cols="40" rows="6"></textarea>
                                        </div>
                                    </div>
                                    <div className="col-md-2 col-md-offset-2">
                                        <div className="form-group">
                                            <input  className="btn btn-success" type="submit" value="Submit" />
                                        </div>
                                    </div>
                            </form>
                        </div>
                        <h3>Our fake address</h3>
                        <div>
                            <address>
                                Big Lebowski Fan Page<br />
                                123 Main Street<br />
                                Rug Ties The Room Together, CA 98765<br />
                                <abbr title="Phone">P:</abbr>
                                425.555.0100
                            </address>
                            <address>
                                <strong>Support:</strong>   
                                <a href="mailto:Support@fakelebowskifansite.com">Support@fakelebowskifansite.com</a><br />
                                <strong>Marketing:</strong> <a href="mailto:Marketing@fakelebowskifansite.com">Marketing@fakelebowskifansite.com</a>
                            </address>
                        </div>
                    </section>
                    <hr />
                <Footer/>
                </div>

            </div>
        );
    }
}

