import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import CoursesPage from './components/courses/CoursesPage';
import ManageCoursesPage from './components/courses/ManageCoursePage';
import BigLubovski from './components/lubovski/BigLubovski';


//App is always loaded (since its first comp , and alll other comps will be nested as children depending on route )
export default ( 
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="about" component={AboutPage} />
    <Route path="courses" component={CoursesPage} />
    <Route path="course" component={ManageCoursesPage} />
    <Route path="lubovski" component={BigLubovski} />
    <Route path="course/:id" component={ManageCoursesPage} />
  </Route>
);
