import { CSpinner } from '@coreui/react';
import React from 'react';
import Loadable from 'react-loadable';

export const Loading = () => {
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

const PendingCourse = Loadable({
  loader: () => import('./views/Courses/pendingCourse'),
  loading: Loading,
});

const  CourseDetails = Loadable({
  loader : () => import('./views/Courses/course_details'),
  loading: Loading,
})

const UpdateCompletedCourse = Loadable({
  loader: () => import('./views/Courses/update_completed_course'),
  loading: Loading,
});

const UpdateActiveCourse = Loadable({
  loader: () => import('./views/Courses/update_active'),
  loading: Loading,
});

const UpdatePendingCourses = Loadable({
  loader: () => import('./views/Courses/update_pending_course'),
  loading: Loading,
});

const UpdateEvent = Loadable({
  loader: () => import('./views/Events/update_event'),
  loading: Loading,
});

const CreateEvent = Loadable({
  loader: () => import('./views/Events/createEvent'),
  loading: Loading,
});

const EventDetail = Loadable({
  loader: () => import('./views/Events/event_detail'),
  loading: Loading,
});

const CreateCourses = Loadable({
  loader: () => import('./views/Courses/create_courses'),
  loading: Loading,
});

const DiscountList = Loadable({
  loader: () => import('./views/Discount/discount_list'),
  loading: Loading,
});

const EventDashBoard = Loadable({
  loader: () => import('./views/Events/event_dashBoard'),
  loading: Loading,
});

const UserManagement = Loadable({
  loader: () => import('./views/UserManagement/UserManagement'),
  loading: Loading,
});

const Dashboard = Loadable({
  loader: () => import('./views/dashboard/Dashboard'),
  loading: Loading,
});

const WebSeriesList = Loadable({
  loader: () => import('./views/Web_Series/webSerie_list'),
  loading: Loading,
});

const CreateWebSeries = Loadable({
  loader: () => import('./views/Web_Series/create_webSeries'),
  loading: Loading,
});

const UpdateWebSeries = Loadable({
  loader: () => import('./views/Web_Series/update_webSeries'),
  loading: Loading,
});


// const CourseLists = React.lazy(() => import('./views/Courses/course_lists'));
// const CourseDetails = React.lazy(() => import('./views/Courses/course_details'));
// const CreateCourses = React.lazy(() => import('./views/Courses/create_courses'));
// const UpdateCousre = React.lazy(() => import('./views/Courses/update_completed_course'));


// const DiscountList = React.lazy(() => import('./views/Discount/discount_list'));


// const EventDashBoard = React.lazy(() => import('./views/Events/event_dashBoard'));

// const UserManagement = React.lazy(() => import('./views/UserManagement/UserManagement'))



// const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'));


const routes = [
  { path: '/', exact: true, name: 'Home' },
  {path: '/completed_Course', name: 'Completed Course List', component: CompletedCourse},
  {path: '/active_Course', name: 'Active Course List', component: ActiveCourse},
  {path: '/pending_Course', name: 'Pending Course List', component: PendingCourse},
  {path: '/course_details/:id', name: 'Course Details', component: CourseDetails},
  {path: '/create_course', name: "Create Courses", component: CreateCourses},
  {path: '/create_event', name: "Create Event", component: CreateEvent},
  {path: '/update_completed_course/:id', name: 'Update Completed Course', component: UpdateCompletedCourse},
  { path: '/update_active_course/:id', name: 'Update Active Course', component: UpdateActiveCourse},
  { path: '/update_pending_course/:id', name: 'Update Pending Course', component: UpdatePendingCourses},
  {path: '/update_event/:id', name: 'Update Event', component: UpdateEvent},
  {path: '/event_details/:id', name: 'Event Details', component: EventDetail},
  { path: '/discount_list/:id', name: "Discount List", component: DiscountList},
  { path: '/event_dashBoard', name: "Event Dashboard", component: EventDashBoard},
  { path: '/user_management', name: "User Management", component: UserManagement},
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  {path: '/webSeriesList', name: 'Web Series List', component: WebSeriesList},
  {path: '/create_webSeries', name: 'Create Web Series', component: CreateWebSeries},
  {path: '/update_webSeries/:id', name: 'Update Web Series', component: UpdateWebSeries},
  
];

export default routes;
