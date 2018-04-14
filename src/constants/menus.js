/**
 *  Sider menus信息
 */
export const menus = [
    { key: '/app/dashboard/index', title: '首页', icon: 'home', },
    {
        key: '/app/manager', title: '资产管理', icon: 'scan',
        sub: [
            { key: '/app/manager/spins', title: '加载中', icon: '', },
            { key: '/app/manager/modals', title: '对话框', icon: '', },     
        ],
    },
    {
        key: '/app/animation', title: '系统管理', icon: 'setting',
        sub: [
            { key: '/app/animation/basicAnimations', title: '用户管理', icon: '', },
            { key: '/app/animation/exampleAnimations', title: '资产分类', icon: '', },
        ],
    },
    {
        key: '/app/table', title: '分析报表', icon: 'bar-chart',
        sub: [
            { key: '/app/table/basicTable', title: '基础表格', icon: '', },
            { key: '/app/table/advancedTable', title: '高级表格', icon: '', },
            { key: '/app/table/asynchronousTable', title: '异步表格', icon: '', },
        ],
    },
    {
        key: '/app/auth', title: '用户信息', icon: 'team',
        sub: [
            { key: '/app/auth/basic', title: '基础演示', icon: '', },
            { key: '/app/auth/routerEnter', title: '路由拦截', icon: '', },
        ],
    },
    {
        key: '/app/chart', title: '图表', icon: 'area-chart',
        sub: [
            { key: '/app/chart/echarts', title: 'echarts', icon: '', },
            { key: '/app/chart/recharts', title: 'recharts', icon: '', },
        ],
    },
    
];
