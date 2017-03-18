import { combineReducers } from 'redux';
import courses from './courseReducer';
import authors from './authorReducer';
import ajaxCallsInProgress from './AjaxStatusReducer';

const banana = (state,action) => 'banana';
//banana reducer will always recieve 'banana' as state . 
// when using combineReducers each combined reducer will recieve its previos state . not all the tree !!!
const rootReducer =  combineReducers({
    courses,
    authors,
    ajaxCallsInProgress,
    banana
});

export default rootReducer;