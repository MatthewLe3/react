import Home from '../pages/Content/Home'
import Motion from '../pages/Content/Motion'
import PersonManage from '../pages/Content/PersonManage'

// 错误页面
import Abandon from '../pages/Content/error/403'
import NotFound from '../pages/Content/error/404'
import ServeError from '../pages/Content/error/500'

// 嵌套路由
import Nest01 from '../pages/Content/nest/Nest01'
import Nest02 from '../pages/Content/nest/nest02/Nest02'

const authority = [
    {
        path: '/page/home',
        role: ['admin', 'normal'],
        component: Home,
        label: '主页',
        icon: 'iconzhuye'
    },
    {
        path: '/page/motion',
        role: ['admin', 'normal'],
        component: Motion,
        label: '动画',
        icon: 'icondonghua'
    },
    {
        path: '/page/person_manage',
        role: ['admin'],
        component: PersonManage,
        label: '人员管理',
        icon: 'iconrenyuanguanli'
    },
    {
        path: '/page/error',
        role: ['admin', 'normal'],
        label: '异常页',
        icon: 'iconyichangshangbao_o',
        children: [
            {
                path: '/page/error/403',
                role: ['admin', 'normal'],
                component: Abandon,
                label: '403',
                icon: 'iconicon-test'
            },
            {
                path: '/page/error/404',
                role: ['admin', 'normal'],
                component: NotFound,
                label: '404',
                icon: 'iconicon-test1'
            },
            {
                path: '/page/error/500',
                role: ['admin', 'normal'],
                component: ServeError,
                label: '500',
                icon: 'iconicon-test2'
            }
        ]
    },
    {
        path: '/page/nest_router',
        role: ['admin', 'normal'],
        label: '嵌套路由',
        icon: 'iconlujingguanli',
        children: [
            {
                path: '/page/nest_router/nest01',
                role: ['admin', 'normal'],
                label: 'Nest01',
                icon: 'iconIcon_lujinghuizhi',
                component: Nest01
            },
            {
                path: '/page/nest_router/nest02',
                role: ['admin', 'normal'],
                label: '嵌套路由',
                icon: 'iconIcon_lujinghuizhi',
                children: [
                    {
                        path: '/page/nest_router/nest02',
                        role: ['admin', 'normal'],
                        label: 'Nest02',
                        icon: 'iconIcon_lujinghuizhi',
                        component:Nest02
                    }
                ]
            }
        ]
    }
]

export default authority
