import Dashboard from './pages/Dashboard';
import TeacherRegistration from './pages/TeacherRegistration';
import StudentRegistration from './pages/StudentRegistration';
import TeacherLogin from './pages/TeacherLogin';
import StudentLogin from './pages/StudentLogin';
import Teachers from './pages/Teachers';
import Students from './pages/Students';
import Attendance from './pages/Attendance'
import SubNav from './pages/SubNav';

// See React Router documentation for details: https://reacttraining.com/react-router/web/api/Route
const pageList = [
  {
    name: 'Dashboard',
    path: '/home',
    component: Dashboard,
  },
  {
    name: 'Sub Navigation',
    path: '/pages/subnav',
    component: SubNav,
  },
  {
    name: 'Teacher Registration',
    path: '/registration/teacher',
    component: TeacherRegistration,
  },
  {
    name: 'Student Registration',
    path: '/registration/student',
    component: StudentRegistration,
  },
  {
    name: 'Teacher Login',
    path: '/login/teacher',
    component: TeacherLogin,
  },
  {
    name: 'Student Login',
    path: '/login/student',
    component: StudentLogin,
  },
  {
    name: 'Teachers List',
    path: '/list/teachers',
    component: Teachers,
  },
  {
    name: 'Students List',
    path: '/list/students',
    component: Students,
  },
  {
    name: 'Attendance',
    path: '/attendance',
    component: Attendance,
  }
];

export default pageList;
