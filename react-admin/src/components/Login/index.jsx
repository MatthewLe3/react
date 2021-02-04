import React, { Component } from 'react'
import styles from './index.less'
import { Form, Input, Button, message, Menu, Dropdown } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import IconFont from '../Icon/index'

import { languageHandler } from '../../redux/actions/language'
import { CHINESE, ENGLISH, JAPANESE, KOERAN, ADMIN, NORMAL } from '../../redux/constant'
//引入connect用于连接UI组件与redux
import { userHandle } from '../../redux/actions/authority'
import { connect } from 'react-redux'

import { withRouter } from 'react-router-dom'

class LoginContent extends Component {
    render() {
        const { i18n } = this.props
        console.log('user', this.props.user)
        const menu = (
            <Menu>
                <Menu.Item>
                    <span onClick={() => this.changeLanguage('Chinese')}>中文</span>
                </Menu.Item>
                <Menu.Item>
                    <span onClick={() => this.changeLanguage('English')}>English</span>
                </Menu.Item>
                <Menu.Item>
                    <span onClick={() => this.changeLanguage('Japanese')}>日本語</span>
                </Menu.Item>
                <Menu.Item>
                    <span onClick={() => this.changeLanguage('Korean')}>한국어</span>
                </Menu.Item>
            </Menu>
        );

        return (
            <div className={styles.content}>
                <div className={styles.header}>
                    <label>{i18n.login}</label>
                    <Dropdown overlay={menu} placement="bottomLeft" arrow>
                        <IconFont className={styles.translation} type="iconfanyiline" style={{ fontSize: '20px' }} />
                    </Dropdown>

                </div>
                <div className={styles.formContent}>
                    <Form
                        name="basic"
                        ref={(c) => { this.form = c }}
                        initialValues={{ remember: true }}
                        onFinish={this.onFinish}
                        onFinishFailed={this.onFinishFailed}
                    >
                        <Form.Item
                            name="username"
                            rules={[{ required: true, message: i18n.enterUserName }]}
                        >
                            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder={i18n.userName} />
                        </Form.Item>

                        <Form.Item
                            name="password"
                            rules={[{ required: true, message: i18n.enterPassword }]}
                        >
                            <Input
                                prefix={<LockOutlined className="site-form-item-icon" />}
                                type="password"
                                placeholder={i18n.password}
                            />
                        </Form.Item>
                        <div className={styles.enter}>
                            <Button type="primary" htmlType="submit">{i18n.login}</Button>
                        </div>
                    </Form>
                </div>
                <div className={styles.tips}>
                    <label>{i18n.account}：admin </label>
                    <label>{i18n.password}：admin</label>
                    <br />
                    <label>{i18n.account}：normal </label>
                    <label>{i18n.password}：normal</label>
                </div>
            </div>
        )
    }

    onFinish = (values) => {
        const { username, password } = values
        if ((username === 'admin' && password === 'admin') || (username === 'normal' && password === 'normal')) {

            username === 'admin' ? this.props.userHandle(ADMIN) : this.props.userHandle(NORMAL)

            this.props.history.push({
                pathname: '/page/home'
            });
        } else {
            message.error(this.props.i18n.enterError);
        }
    };

    onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    changeLanguage = (value) => {
        this.form.resetFields()
        switch (value) {
            case 'Chinese':
                this.props.languageHandler(CHINESE)
                break;
            case 'English':
                this.props.languageHandler(ENGLISH)
                break;
            case 'Japanese':
                this.props.languageHandler(JAPANESE)
                break;
            case 'Korean':
                this.props.languageHandler(KOERAN)
                break;
            default:
                this.props.languageHandler(CHINESE)
        }
    }
}

export default connect(
    state => ({
        i18n: state.i18n,
        user: state.user
    }),
    { languageHandler, userHandle }
)(withRouter(LoginContent))