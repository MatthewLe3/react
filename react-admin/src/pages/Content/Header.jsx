import React, { useState } from 'react'
import styles from './index.less'
import { Dropdown, Menu, Avatar } from 'antd'
import IconFont from '../../components/Icon/index'

import { ChildrenContext } from './index'
import { MenuFoldOutlined, MenuUnfoldOutlined, FullscreenOutlined, FullscreenExitOutlined } from '@ant-design/icons';
import { withRouter } from 'react-router-dom'

function Header(props) {
    const { setFoldStatus } = props

    const [fullState, setFullState] = useState(true)
    const handleFold = (value) => {
        setFoldStatus(value)
    }


    const changeScreenStatus = () => {
        if (fullState) {
            requestFullScreen()

        } else {
            exitFullscreen()
        }
        setFullState(!fullState)

    }
    //进入全屏
    const requestFullScreen = () => {
        var de = document.documentElement;
        if (de.requestFullscreen) {
            de.requestFullscreen();
        } else if (de.mozRequestFullScreen) {
            de.mozRequestFullScreen();
        } else if (de.webkitRequestFullScreen) {
            de.webkitRequestFullScreen();
        }
    };

    //退出全屏
    const exitFullscreen = () => {
        var de = document;
        if (de.exitFullscreen) {
            de.exitFullscreen();
        } else if (de.mozCancelFullScreen) {
            de.mozCancelFullScreen();
        } else if (de.webkitCancelFullScreen) {
            de.webkitCancelFullScreen();
        }
    };
    const changeLanguage = language => {
        console.log('lan', language)
    }


    const Layout = () => {
        props.history.push({
            pathname: '/login'
        });
    }

    const menu = (
        <Menu>
            <Menu.Item>
                <span onClick={() => changeLanguage('Chinese')}>中文</span>
            </Menu.Item>
            <Menu.Item>
                <span onClick={() => changeLanguage('English')}>English</span>
            </Menu.Item>
            <Menu.Item>
                <span onClick={() => changeLanguage('Japanese')}>日本語</span>
            </Menu.Item>
            <Menu.Item>
                <span onClick={() => changeLanguage('Korean')}>한국어</span>
            </Menu.Item>
        </Menu>
    );

    const userMenu = (
        <Menu>
            <Menu.Item>
                <span>个人中心</span>
            </Menu.Item>
            <Menu.Item onClick={Layout}>
                <span>退出</span>
            </Menu.Item>
        </Menu>
    )




    return (
        <div className={styles.header_content}>
            {/* 展开收起按钮 */}
            <div className={styles.fold}>
                <ChildrenContext.Consumer>
                    {value => {
                        return !value ? <MenuFoldOutlined onClick={() => handleFold(!value)} style={{ fontSize: '20px', paddingLeft: '20px', cursor: 'pointer' }} /> : <MenuUnfoldOutlined onClick={() => handleFold(!value)} style={{ fontSize: '20px', paddingLeft: '20px', cursor: 'pointer' }} />
                    }}
                </ChildrenContext.Consumer>
            </div>

            <div className={styles.full_screen}>
                {fullState ? <FullscreenOutlined className={styles.full_screen_icon} onClick={changeScreenStatus} /> : <FullscreenExitOutlined className={styles.full_screen_icon} onClick={changeScreenStatus} />}
            </div>

            <div className={styles.global}>
                <Dropdown overlay={menu} placement="bottomCenter" arrow>
                    <IconFont className={styles.translation} type="iconfanyiline" />
                </Dropdown>
            </div>

            <div className={styles.avatar}>
                <Dropdown overlay={userMenu} placement="bottomCenter" arrow>
                    <Avatar src="../../assets/img/avatar.png" />
                </Dropdown>
            </div>
        </div>
    )
}


export default (withRouter(Header))