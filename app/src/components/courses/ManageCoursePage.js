import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as courseActions from '../actions/courseActions';
import CourseForm from "./CourseForm";
import toastr from 'toastr';

export class ManageCoursePage extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            course: Object.assign({}, props.course),
            errors: {},
            saving: false
        };
        this.updateCourseState = this.updateCourseState.bind(this);
        this.saveCourse = this.saveCourse.bind(this);
        this.redirectToCourses = this.redirectToCourses.bind(this);
    }

    componentWillReceiveProps(nextProps) {//lifecycle function react will call it when he thinks props had changed 
        if( this.props.course.id == nextProps.course.id) 
            return;

        this.setState({ course: Object.assign({}, nextProps.course) });
    }

    updateCourseState(event) {
        const field   = event.target.name;
        let course    = this.state.course;
        course[field] = event.target.value;
        return this.setState({ course });//react Component 
    }

  saveCourse(event) {
    event.preventDefault();
    this.setState({ saving: true });
    this.props.actions.saveCourse(this.state.course)
        .then(this.redirectToCourses)
        .catch(e => {
            this.setState({ saving: false });
            this.setState({ errors: { title: "ee" } });
            toastr.error(e);
        });

  }

  redirectToCourses(){
    this.setState({ saving: false });//setState will only update the saving property ?
    toastr.success("course saved");
    this.context.router.push('/courses');
  }

    render() {
        return (
            <CourseForm
                course     = {this.state.course}
                errors     = {this.state.errors}
                onChange   = {this.updateCourseState}
                onSave     = {this.saveCourse}
                allAuthors = {this.props.authors}
                saving     = {this.state.saving}
            />
        );
    }
}

ManageCoursePage.propTypes = {
    actions: PropTypes.object.isRequired,
    authors: PropTypes.array.isRequired,
    course: PropTypes.object.isRequired
};

ManageCoursePage.contextTypes = {
    router : PropTypes.object
};

const mapStateToProps = (state, ownProps) => {

    const courseId = ownProps.params.id;//location string /course/:id
    let course = courseId ?
        state.courses.filter(x => x.id == courseId).pop() || {} :
        { id: '', watchHref: '', title: '', authorId: '', length: '', category: '' };

    const authorsFormattedForDropDown = state.authors
        .map(author => (
            {
                value: author.id,
                text: author.firstName + " " + author.lastName
            }
        ));
    return {
        course: course,
        authors: authorsFormattedForDropDown
    };
};

function mapDispatchToProps(dispatch) {
    return { actions: bindActionCreators(courseActions, dispatch) };//wrap action creators with dispatcher 
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);
