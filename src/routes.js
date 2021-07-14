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
const CourseLists = Loadable({
  loader: () => import('./views/Courses/course_lists'),
  loading: Loading,
});

// const CourseLists = React.lazy(() => import('./views/Courses/course_lists'));
const CourseDetails = React.lazy(() => import('./views/Courses/course_details'));
const CreateCourses = React.lazy(() => import('./views/Courses/create_courses'));
const UpdateCousre = React.lazy(() => import('./views/Courses/update_course'));


const DiscountList = React.lazy(() => import('./views/Discount/discount_list'));


const EventDashBoard = React.lazy(() => import('./views/Events/event_dashBoard'));

const UserManagement = React.lazy(() => import('./views/UserManagement/UserManagement'))



const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'));


const routes = [
  { path: '/', exact: true, name: 'Home' },
  {path: '/course_list', name: 'Course List', component: CourseLists},
  {path: '/course_details/:id', name: 'Course Details', component: CourseDetails},
  {path: '/create_course', name: "Create Courses", component: CreateCourses},
  {path: '/update_course/:id', name: 'Update Course', component: UpdateCousre},
  { path: '/discount_list/:id', name: "Discount List", component: DiscountList},
  { path: '/event_dashBoard', name: "Event Dashboard", component: EventDashBoard},
  { path: '/user_management', name: "User Management", component: UserManagement},
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  
];

export default routes;
