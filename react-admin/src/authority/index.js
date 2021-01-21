// 主页
import Home from '../pages/Content/Home/index'

// 按钮
import MyButton from '../pages/Content/MyButton/index'
// 动画
import Motion from '../pages/Content/Motion/index'
// 人员管理
import PersonManage from '../pages/Content/PersonManage/index'

// 错误页面
import Error from '../pages/Content/error/index'
import Abandon from '../pages/Content/error/Abandon'
import NotFound from '../pages/Content/error/NotFound'
import ServeError from '../pages/Content/error/ServeError'

// 嵌套路由
import Nest from '../pages/Content/Nest/index'
import NestFirst from '../pages/Content/Nest/NestFirst'
import NestIndex from '../pages/Content/Nest/nest02/index'
import NestSecond from '../pages/Content/Nest/nest02/NestSecond'

const authority = [
    {
        path: '/page/home',
        role: ['admin', 'normal'],
        component: Home,
        label: '主页',
        icon: 'iconzhuye'
    },
    {
        path: '/page/my_button',
        role: ['admin', 'normal'],
        component: MyButton,
        label: '按钮',
        icon: 'iconanniu'
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
        component: Error,
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
        component: Nest,
        children: [
            {
                path: '/page/nest_router/nestFirst',
                role: ['admin', 'normal'],
                label: 'NestFirst',
                icon: 'iconIcon_lujinghuizhi',
                component: NestFirst
            },
            {
                path: '/page/nest_router/nest_second',
                role: ['admin', 'normal'],
                label: 'NestSecond',
                icon: 'iconIcon_lujinghuizhi',
                component: NestIndex,
                children: [
                    {
                        path: '/page/nest_router/nest_second/content',
                        role: ['admin', 'normal'],
                        label: 'NestSecond',
                        icon: 'iconIcon_lujinghuizhi',
                        component: NestSecond
                    }
                ]
            }
        ]
    }
]

export default authority
