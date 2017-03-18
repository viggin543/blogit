import * as types from '../actions/actionTypes';
import AuthorApi from '../../api/mockAuthorApi';
import { beginAjaxCall } from './AjaxStatusAction';




export const loadAuthors = () =>
    dispatch => {
        dispatch(beginAjaxCall());
        return AuthorApi.getAllAuthors()
        .then(authors => {
            dispatch({ type: types.LOAD_AUTHORS_SUCCESS, authors });
        })
        .catch(e => {
            throw (e);
        });
    };
