import * as types from './actionTypes';
import courseApi from '../../api/mockCourseApi';
import { beginAjaxCall ,ajaxCallError } from './AjaxStatusAction';


export function createCourseSucsess(course) {
    return { type: types.CREATE_COURSE_SUCCESS, course };
}

export function updateCourseSucsess(course) {
    return { type: types.UPDATE_COURSE_SUCCESS, course };
}

export function loadCoursesSuccsess(courses) {
    return { type: types.LOAD_COURSES_SUCCESS, courses };
}

export const loadCourses = () =>
    dispatch => {
        dispatch(beginAjaxCall());
        return courseApi.getAllCourses().then(
            courses => dispatch(loadCoursesSuccsess(courses))
        ).catch(e => {
            throw (e);
        });
    };

export const saveCourse = course =>
    (dispatch, getState) => {
        dispatch(beginAjaxCall());
        return courseApi.saveCourse(course)
        .then(savedCourse => {
            dispatch(course.id ?
                updateCourseSucsess(savedCourse) :
                createCourseSucsess(savedCourse));
        }).catch(e => {
            dispatch(ajaxCallError(e));
            throw e;
        });
    };
