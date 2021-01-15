import React, { Component } from 'react'
import { Layout } from 'antd';
import styles from './index.less'

import { connect } from 'react-redux'
import { Menu } from 'antd';

import authorityRouter from '../../authority/index'
import IconFont from '../../components/Icon/index'

const { SubMenu } = Menu;


const { Header, Sider, Content } = Layout;

class index extends Component {

    render() {

        const { user } = this.props

        const userName = user.userName

        return (
            <>
                <Layout className={styles.content}>
                    <Sider className={styles.slider}>
                        <Menu
                            onClick={this.handleClick}
                            style={{ width: '100%' }}
                            defaultSelectedKeys={['1']}
                            defaultOpenKeys={['sub1']}
                            mode="inline"
                            theme="dark"
                        >
                            {this.handleMenu(authorityRouter, userName)}
                        </Menu>
                    </Sider>
                    <Layout>
                        <Header className={styles.header}>Header</Header>
                        <Content>Content</Content>
                    </Layout>
                </Layout>
            </>
        )
    }

    handleClick = e => {
        console.log('click ', e);
    };

    handleMenu = (data, authority) => {
        return (
            data.map(value => {
                return value.role.includes(authority) ?
                    (
                        value.children ?
                            <SubMenu key={value.path} icon={<IconFont type={value.icon} style={{ fontSize: '15px', color: '#fff' }} />} title={value.label}>
                                {this.handleMenu(value.children, authority)}
                            </SubMenu>
                            :
                            <Menu.Item key={value.path} icon={<IconFont type={value.icon} style={{ fontSize: '15px' }} />}>{value.label}</Menu.Item>
                    )
                    :
                    null;
            })
        )
    }
}

export default connect(
    state => ({
        i18n: state.i18n,
        user: state.user
    }),
    {}
)(index)
