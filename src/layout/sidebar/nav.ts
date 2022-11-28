export const navData=[
    {
        id:1,
        routeLink:'dashboard',
        icon:'fal fa-chalkboard',
        lable:'DASHBOARD',
    },
    {
        id:2,
        routeLink:'student-info',
        icon:'fal fa-users-class',
        lable:'STUDENT-INFO',
        
        subItems: [
            {
                id: 3,
                lable: 'action1',
                link: 'administration/user',
                parentId: 3
            },
            
            
        ]
    },
    {
        routeLink:'academics',
        icon:'fal fa-user-graduate',
        lable:'ACADEMICS'
    },
    {
        routeLink:'study material',
        icon:'fal fa-book-reader',
        lable:'STUDY MATERIAL'
    },
    {
        routeLink:'fees collection',
        icon:'fal fa-sack-dollar',
        lable:'FEES COLLECTION'
    },
    {
        routeLink:'accounts',
        icon:'fal fa-box-full',
        lable:'ACCOUNTS'
    },
    {
        routeLink:'human resource',
        icon:'fal fa-camera',
        lable:'HUMAN RESOURCES'
    },
    {
        routeLink:'leave ',
        icon:'fal fa-procedures',
        lable:'LEAVE'
    },
    {
        routeLink:'examination ',
        icon:'fal fa-money-check-edit',
        lable:'EXAMINATION'
    },
    {
        routeLink:'home work ',
        icon:'fal fa-book',
        lable:'HOME WORK'
    },
    {
        routeLink:'communicate ',
        icon:'fal fa-envelope-square',
        lable:'COMMUNICATE'
    },
    {
        routeLink:'library ',
        icon:'fal fa-chalkboard-teacher',
        lable:'LIBRARY'
    },
    {
        routeLink:'inventory ',
        icon:'fal fa-inventory',
        lable:'INVENTORY'
    },
    {
        routeLink:'transport ',
        icon:'fal fa-bus-school',
        lable:'TRANSPORT'
    },
    {
        routeLink:'dormitory ',
        icon:'fal fa-hotel',
        lable:'DORMITORY'
    },
    {
        routeLink:'reports ',
        icon:'fal fa-books',
        lable:'REPORTS'
    },
    {
        routeLink:'system settings ',
        icon:'fal fa-users-cog',
        lable:'SYSTEM SETTINGS'
    },
    {
        routeLink:'front settings ',
        icon:'fal fa-user-chart',
        lable:'FRONT SETTINGS'
    },
];