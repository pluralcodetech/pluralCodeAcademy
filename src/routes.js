import React from 'react';

const CourseLists = React.lazy(() => import('./views/Courses/course_lists'));
const CourseDetails = React.lazy(() => import('./views/Courses/course_details'));
const CreateCourses = React.lazy(() => import('./views/Courses/create_courses'));


const DiscountList = React.lazy(() => import('./views/Discount/discount_list'));


const EventDashBoard = React.lazy(() => import('./views/Events/event_dashBoard'));

const UserManagement = React.lazy(() => import('./views/UserManagement/UserManagement'))



const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'));


const routes = [
  { path: '/', exact: true, name: 'Home' },
  {path: '/course_list', name: 'Course List', component: CourseLists},
  {path: '/course_details/:id', name: 'Course Details', component: CourseDetails},
  {path: '/create_course', name: "Create Courses", component: CreateCourses},
  { path: '/discount_list/:id', name: "Discount List", component: DiscountList},
  { path: '/event_dashBoard', name: "Event Dashboard", component: EventDashBoard},
  { path: '/user_management', name: "User Management", component: UserManagement},
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  
];

export default routes;
