// export const navData=[
//     {
//         id:1,
//         routeLink:'dashboard',
//         icon:'fal fa-chalkboard',
//         lable:'DASHBOARD',
//     },
//     {
//         id:2,
//         routeLink:'student-info',
//         icon:'fal fa-users-class',
//         lable:'STUDENT-INFO',
        
//         subItems: [
//             {
//                 id: 3,
//                 lable: 'action1',
//                 link: 'administration/user',
//                 icon:'fal fa-users-class',
//                 parentId: 3
//             },
            
            
//         ]
//     },
//     {
//         routeLink:'academics',
//         icon:'fal fa-user-graduate',
//         lable:'ACADEMICS'
//     },
//     {
//         routeLink:'study material',
//         icon:'fal fa-book-reader',
//         lable:'STUDY MATERIAL'
//     },
//     {
//         routeLink:'fees collection',
//         icon:'fal fa-sack-dollar',
//         lable:'FEES COLLECTION'
//     },
//     {
//         routeLink:'accounts',
//         icon:'fal fa-box-full',
//         lable:'ACCOUNTS'
//     },
//     {
//         routeLink:'human resource',
//         icon:'fal fa-camera',
//         lable:'HUMAN RESOURCES'
//     },
//     {
//         routeLink:'leave ',
//         icon:'fal fa-procedures',
//         lable:'LEAVE'
//     },
//     {
//         routeLink:'examination ',
//         icon:'fal fa-money-check-edit',
//         lable:'EXAMINATION'
//     },
//     {
//         routeLink:'home work ',
//         icon:'fal fa-book',
//         lable:'HOME WORK'
//     },
//     {
//         routeLink:'communicate ',
//         icon:'fal fa-envelope-square',
//         lable:'COMMUNICATE'
//     },
//     {
//         routeLink:'library ',
//         icon:'fal fa-chalkboard-teacher',
//         lable:'LIBRARY'
//     },
//     {
//         routeLink:'inventory ',
//         icon:'fal fa-inventory',
//         lable:'INVENTORY'
//     },
//     {
//         routeLink:'transport ',
//         icon:'fal fa-bus-school',
//         lable:'TRANSPORT'
//     },
//     {
//         routeLink:'dormitory ',
//         icon:'fal fa-hotel',
//         lable:'DORMITORY'
//     },
//     {
//         routeLink:'reports ',
//         icon:'fal fa-books',
//         lable:'REPORTS'
//     },
//     {
//         routeLink:'system settings ',
//         icon:'fal fa-users-cog',
//         lable:'SYSTEM SETTINGS'
//     },
//     {
//         routeLink:'front settings ',
//         icon:'fal fa-user-chart',
//         lable:'FRONT SETTINGS'
//     },
// ];

export const  menuSidebar = [
    {
      link_name: "Dashboard",
      link: "/pages/dashboard",
      icon: "bx bx-grid-alt",
      sub_menu: []
    }, {
      link_name: "STUDENT-INFO",
      link: "/student-info",
      icon: "bx bx-collection",
      sub_menu: [
        {
          link_name: "Student Attendance",
          link: "/student-info/student-attendance",
        }, {
          link_name: "Student Group",
          link: "/student-info/student-group",
        }, {
          link_name: "Student List",
          link: "/student-info/student-list",
        }
      ]
    }, {
      link_name: "Posts",
      link: "/student-info/add-student",
      icon: "bx bx-book-alt",
      sub_menu: [
        {
          link_name: "Web Design",
          link: "/posts/web-design",
        }, {
          link_name: "Login Form",
          link: "/posts/login-form",
        }, {
          link_name: "Card Design",
          link: "/posts/card-design",
        }
      ]
    }, {
      link_name: "Student Attendance Report",
      link: "/student-info/student-attendance-report",
      icon: "bx bx-pie-chart-alt-2",
      sub_menu: []
    }, {
      link_name: "Chart",
      link: "/chart",
      icon: "bx bx-line-chart",
      sub_menu: []
    }, {
      link_name: "Plugins",
      link: null,
      icon: "bx bx-plug",
      sub_menu: [
        {
          link_name: "UI Face",
          link: "/ui-face",
        }, {
          link_name: "Pigments",
          link: "/pigments",
        }, {
          link_name: "Box Icons",
          link: "/box-icons",
        }
      ]
    }, {
      link_name: "Explore",
      link: "/explore",
      icon: "bx bx-compass",
      sub_menu: []
    }, {
      link_name: "History",
      link: "/history",
      icon: "bx bx-history",
      sub_menu: []
    }, {
      link_name: "Setting",
      link: "/setting",
      icon: "bx bx-cog",
      sub_menu: []
    }, {
      link_name: "Analytics",
      link: "/analytics",
      icon: "bx bx-pie-chart-alt-2",
      sub_menu: []
    }, {
      link_name: "Chart",
      link: "/chart",
      icon: "bx bx-line-chart",
      sub_menu: []
    }, 
    {
      link_name: "Explore",
      link: "/explore",
      icon: "bx bx-compass",
      sub_menu: []
    }, {
      link_name: "History",
      link: "/history",
      icon: "bx bx-history",
      sub_menu: []
    }, {
      link_name: "Explore",
      link: "/explore",
      icon: "bx bx-compass",
      sub_menu: []
    }, {
      link_name: "History",
      link: "/history",
      icon: "bx bx-history",
      sub_menu: []
    },
  ]