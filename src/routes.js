import { CSpinner } from '@coreui/react';
import React from 'react';
import Loadable from 'react-loadable';

function Loading() {
  return <div className="text-center mt-3" style={{marginTop: "50rem", height:'100px'}}>
      <CSpinner
      color="primary"
      style={{width:'4rem', height:'4rem'}}
    />
  </div>
}

// update_completed_course
const CompletedCourse = Loadable({
  loader: () => import('./views/Courses/completedCourse'),
  loading: Loading,
});

const ActiveCourse = Loadable({
  loader: () => import('./views/Courses/activeCourse'),
  loading: Loading,
});

const UpdateCompletedCourse = Loadable({
  loader: () => import('./views/Courses/update_completed_course'),
  loading: Loading,
});



// const CourseLists = React.lazy(() => import('./views/Courses/course_lists'));
const CourseDetails = React.lazy(() => import('./views/Courses/course_details'));
const CreateCourses = React.lazy(() => import('./views/Courses/create_courses'));
// const UpdateCousre = React.lazy(() => import('./views/Courses/update_completed_course'));


const DiscountList = React.lazy(() => import('./views/Discount/discount_list'));


const EventDashBoard = React.lazy(() => import('./views/Events/event_dashBoard'));

const UserManagement = React.lazy(() => import('./views/UserManagement/UserManagement'))



const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'));


const routes = [
  { path: '/', exact: true, name: 'Home' },
  {path: '/completed_Course', name: 'Completed Course List', component: CompletedCourse},
  {path: '/active_Course', name: 'Active Course List', component: ActiveCourse},
  {path: '/course_details/:id', name: 'Course Details', component: CourseDetails},
  {path: '/create_course', name: "Create Courses", component: CreateCourses},
  {path: '/update_completed_course/:id', name: 'Update Completed Course', component: UpdateCompletedCourse},
  { path: '/discount_list/:id', name: "Discount List", component: DiscountList},
  { path: '/event_dashBoard', name: "Event Dashboard", component: EventDashBoard},
  { path: '/user_management', name: "User Management", component: UserManagement},
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  
];

export default routes;
