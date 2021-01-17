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
          name: 'List',
          url: '/list/teachers',
        },
        {
          name: 'Attendance',
          url: '/attendance',
        }
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
        },
        {
          name: 'List',
          url: '/list/students',
        }
      ],
    },
  
  ],
  bottom: [
    {
      name: 'Attendance Management System',
      url: 'https://github.com/NiceDash/Vibe',
      icon: 'GitHub',
      external: true,
      target: '_blank',
    }
  ],
};
