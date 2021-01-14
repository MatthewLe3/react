import React, { Component } from 'react'
import styles from './index.less'
import { Form, Input, Button, message, Menu, Dropdown } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import IconFont from '../Icon/index'



export default class LoginContent extends Component {


    render() {

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
                    <label>登录</label>
                    <Dropdown overlay={menu} placement="bottomLeft" arrow>
                        <IconFont className={styles.translation} type="iconfanyiline" style={{ fontSize: '20px' }} />
                    </Dropdown>

                </div>
                <div className={styles.formContent}>
                    <Form
                        name="basic"
                        initialValues={{ remember: true }}
                        onFinish={this.onFinish}
                        onFinishFailed={this.onFinishFailed}
                    >
                        <Form.Item
                            name="username"
                            rules={[{ required: true, message: '请输入用户名!' }]}
                        >
                            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                        </Form.Item>

                        <Form.Item
                            name="password"
                            rules={[{ required: true, message: '请输入密码!' }]}
                        >
                            <Input
                                prefix={<LockOutlined className="site-form-item-icon" />}
                                type="password"
                                placeholder="Password"
                            />
                        </Form.Item>
                        <div className={styles.enter}>
                            <Button type="primary" htmlType="submit">登录</Button>
                        </div>
                    </Form>
                </div>
                <div className={styles.tips}>
                    <label>账号：admin </label>
                    <label>密码：admin</label>
                    <br />
                    <label>账号：normal </label>
                    <label>密码：normal</label>
                </div>
            </div>
        )
    }

    onFinish = (values) => {
        const { username, password } = values
        if ((username === 'admin' && password === 'admin') || (username === 'normal' && password === 'normal')) {
            console.log('chenggong')
        } else {
            message.error('用户名或密码提交错误，请重试。');
        }
    };

    onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    changeLanguage = (value) => {
        switch (value) {
            case 'Chinese':
                console.log('1')
                break;
            case 'English':
                console.log('2')
                break;
            case 'Japanese':
                console.log('3')
                break;
            case 'Korean':
                console.log('4')
                break;
            default:
                console.log('1')
        }
    }
}
