export default {
  top: [
    {
      name: 'Home',
      url: '/home',
      icon: 'Home',
    },
    {
      divider: true,
    },
    {
      name: 'Teachers',
      icon: 'File',
      children: [
        {
          name: 'Registration',
          url: '/registration/teacher',
        },
        {
          name: 'Login',
          url: '/login/teacher',
        },
        {
          name: 'Attendance',
          url: '/attendance',
        },
        {
          name: "Student's List",
          url: '/list/students',
        },
        {
          name: "Teacher's List",
          url: '/list/teachers',
        },
      ],
    },
    {
      divider: true,
    },
    {
      name: 'Students',
      icon: 'Cloud',
      children: [
        {
          name: 'Registration',
          url: '/registration/student',
        },
        {
          name: 'Login',
          url: '/login/student',
        }
      ],
    },
  
  ],
  bottom: [
    {
      name: 'Attendance Management System',
      url: 'https://github.com/Arjit222830/Attendance-Management-',
      icon: 'GitHub',
      external: true,
      target: '_blank',
    }
  ],
};
