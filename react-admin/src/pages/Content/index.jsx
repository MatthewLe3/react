import React, { useState, createContext ,useEffect,useCallback} from 'react'
import { Layout } from 'antd';
import styles from './index.less'

import { connect } from 'react-redux'
import { Menu } from 'antd';

import authorityRouter from '../../authority/index'
import IconFont from '../../components/Icon/index'

import { withRouter, Switch, Route, Redirect } from 'react-router-dom'

import MyHeader from './Header'

export const ChildrenContext = createContext();

const { SubMenu } = Menu;


const { Header, Sider, Content } = Layout;

function Container(props) {
    const [foldStatus, setFoldStatus] = useState(false)
    const [size,setSize] = useState({
            width:window.innerWidth,
            hieght:window.innerHeight
    })

    const onResize = useCallback(()=>{
        setSize({
            width:window.innerWidth,
            hieght:window.innerHeight
        })
    },[])

     useEffect(() => {
        
        

        let status = React.$cookies.fetchCookie('userInfo')
        if(!!!status){
            props.history.push({
                pathname: '/login'
            });
        }else{
            window.addEventListener('resize',onResize);
            setFoldStatus(size.width <= 800 ? true : false)
        }
        return (()=>{
                window.removeEventListener('resize',onResize)
            }
        )
    }, [size,onResize,props.history])

    let selectedMenu = []
    const { pathname } = props.history.location
    // 设置默认选中与展开项
    const setMenuSelected = (pathname, authorityRouter) => {
        let pathArr = []

        function getPathArr(pathname, authorityRouter) {
            authorityRouter.forEach(val => {
                if (pathname.includes(val.path)) {
                    pathArr = [...pathArr, val.path]

                    if (val.children) {
                        getPathArr(pathname, val.children)
                    }
                }
            });
        }
        getPathArr(pathname, authorityRouter)

        return pathArr
    }
    let arr = []
    arr = setMenuSelected(pathname, authorityRouter)
    selectedMenu = arr

    const { user } = props
    const userName = user.userName

    const handleClick = e => {
        props.history.push({
            pathname: e.key
        });
    };

    const handleMenu = (data, authority) => {
        return (
            data.map(value => {
                return value.role.includes(authority) ?
                    (
                        value.children ?
                            <SubMenu key={value.path} icon={<IconFont type={value.icon} style={{ fontSize: '15px', color: '#fff' }} />} title={value.label}>
                                {handleMenu(value.children, authority)}
                            </SubMenu>
                            :
                            <Menu.Item key={value.path} icon={<IconFont type={value.icon} style={{ fontSize: '15px' }} />}>
                                <span>{value.label}</span>
                            </Menu.Item>
                    )
                    :
                    null;
            })
        )
    }

    const handleRoute = (data, authority) => {
        return (
            <Switch>
                {data.map(item => {
                    return generateRoute(item, authority)
                })}
                <Redirect to={data[0] ? data[0].path : ''} ></Redirect>
            </Switch>
        )
    }
    const generateRoute = (value, authority) => {
        if (!value.role.includes(authority)) return
        if (value.children) {
            return (
                <value.component key={value.path} path={value.path}>
                    {
                        value.children.map(item => {
                            return generateRoute(item, authority)
                        })
                    }
                </value.component>
            )
        }
        return <Route key={value.path} path={value.path} component={value.component} />
    }

    const setFoldStatuss = value => {
        // console.log('value', value)
        setFoldStatus(value)
    }

    return (
        <>
            <Layout className={styles.content}>
                <Sider className={styles.slider} collapsed={foldStatus}>
                    <Menu
                        onClick={handleClick}
                        defaultOpenKeys={selectedMenu}
                        defaultSelectedKeys={selectedMenu}
                        // inlineCollapsed={foldStatus}
                        mode="inline"
                        theme="dark"
                    >
                        {handleMenu(authorityRouter, userName)}
                    </Menu>
                </Sider>
                <Layout>
                    <Header className={styles.header}>
                        <ChildrenContext.Provider value={foldStatus}>
                            <MyHeader setFoldStatus={setFoldStatuss} />
                        </ChildrenContext.Provider>
                    </Header>
                    <Content className={styles.container}>
                        {handleRoute(authorityRouter, userName)}
                    </Content>
                </Layout>
            </Layout>
        </>
    )
}

export default connect(
    state => ({
        i18n: state.i18n,
        user: state.user
    }),
    {}
)(withRouter(Container))
