// This component handles the App template used on every page.
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import LoadingDots from './common/LoadingDots';
import LubovskiHeader  from './lubovski/LubovskiHeader';


class App extends React.Component {
    render() {
        return (
            <div>
                <LubovskiHeader/>
                {this.props.children}
            </div>
        );
    }
}

App.propTypes = {
    children: PropTypes.object.isRequired,
    loading: PropTypes.bool.isRequired
};

const mapStateToProps = (state, ownProps) => { 
    return { loading: state.ajaxCallsInProgress > 0 }; 
};

export default connect(mapStateToProps)(App);