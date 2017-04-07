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
                        <form>
                                <div className="form-group">
                                <label>Your Name </label>
                                <input className="form-control"/>
                                </div>
                                <div className="form-group">
                                <label>Email </label>
                                <input className="form-control"/>
                                </div>
                                <div className="form-group">
                                <label>Reason</label>
                                <select className="form-control">
                                    <option>Adoration</option>
                                    <option>Ordering a White Russian</option>
                                    <option>Complaint</option>
                                    <option>I am lost</option>
                                </select>
                                </div>
                                <div className="form-group">
                                <label>Message</label>
                                </div>
                                <textarea className="form-control" cols="40" rows="6"></textarea>
                                <input  className="btn" type="submit" value="Submit" />

                        </form>
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

