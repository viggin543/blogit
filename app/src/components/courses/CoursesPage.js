import React, { PropTypes } from 'react'; 
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as courseActions  from '../actions/courseActions';
import CourseList from "./CourseList";
import { browserHistory } from 'react-router';


class CoursesPage extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.redirectToAddCoursePage = this.redirectToAddCoursePage.bind(this);
    }

  redirectToAddCoursePage() {//better then arrow func 4 performance 
    browserHistory.push('/course');
  }

    render() {
        return (
        <div>
            <h1>Courses</h1>
            <input type="submit"
               value="Add Course"
               className="btn btn-primary"
               onClick={this.redirectToAddCoursePage}/>
            <CourseList courses={this.props.courses} />
        </div>);
    }
}

CoursesPage.propTypes = {
    // if we inject connect with mapDispatchToProps then our class wont be injected with dispatch function . and there will be a message in the console regarding this .
    //Warning: Failed propType: Required prop `dispatch` was not specified in `CoursesPage`. Check the render method of `Connect(CoursesPage)`.
    // dispatch     : PropTypes.func.isRequired
    courses: PropTypes.array.isRequired
};

const mapStateToProps = (state, ownProps) => {
    return {
        // courses is name of reducer defined in combineReucers call .
        //wee pull state from baz responce 
        courses: state.courses
    };
};
function mapDispatchToProps (dispatch) {
    //iterate through all functions in courseActions and wraps them with call to dispatch .
    return { actions:  bindActionCreators(courseActions,dispatch) };
}

export default connect(mapStateToProps,mapDispatchToProps)(CoursesPage);