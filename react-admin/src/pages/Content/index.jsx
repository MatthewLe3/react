import React, { useState, useEffect } from 'react'
import { Layout } from 'antd';
import styles from './index.less'

import { connect } from 'react-redux'
import { Menu } from 'antd';

import authorityRouter from '../../authority/index'
import IconFont from '../../components/Icon/index'

import { withRouter, Switch, Route, Redirect } from 'react-router-dom'


const { SubMenu } = Menu;


const { Header, Sider, Content } = Layout;

function Container(props) {

    const [selectedMenu, setSelectedMenu] = useState([]);
    const { pathname } = props.history.location

    useEffect(() => {
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
        setSelectedMenu(arr)
    }, [pathname])



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
                            <Menu.Item key={value.path} icon={<IconFont type={value.icon} style={{ fontSize: '15px' }} />}>{value.label}</Menu.Item>
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

    return (
        <>
            <Layout className={styles.content}>
                <Sider className={styles.slider}>
                    <Menu
                        onClick={handleClick}
                        style={{ width: '100%' }}
                        selectedKeys={selectedMenu}
                        openKeys={selectedMenu}
                        mode="inline"
                        theme="dark"
                    >
                        {handleMenu(authorityRouter, userName)}
                    </Menu>
                </Sider>
                <Layout>
                    <Header className={styles.header}>Header</Header>
                    <Content>
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
