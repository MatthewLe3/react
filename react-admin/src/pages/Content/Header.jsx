import React, { useState } from 'react'
import styles from './index.less'
import { Dropdown, Menu, Avatar, Badge } from 'antd'
import IconFont from '../../components/Icon/index'
import { MailOutlined, BellOutlined } from '@ant-design/icons';

import { ChildrenContext } from './index'
import { MenuFoldOutlined, MenuUnfoldOutlined, FullscreenOutlined, FullscreenExitOutlined } from '@ant-design/icons';
import { withRouter } from 'react-router-dom'
import avatarPic from '../../assets/img/avatar.png'

import { connect } from 'react-redux'
import { CHINESE, ENGLISH, JAPANESE, KOERAN } from '../../redux/constant'
import { languageHandler } from '../../redux/actions/language'

function Header(props) {
    const { setFoldStatus } = props
    const {i18n} = props

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
        switch (language) {
            case 'Chinese':
                props.languageHandler(CHINESE)
                break;
            case 'English':
                props.languageHandler(ENGLISH)
                break;
            case 'Japanese':
                props.languageHandler(JAPANESE)
                break;
            case 'Korean':
                props.languageHandler(KOERAN)
                break;
            default:
                props.languageHandler(CHINESE)
        }
    }


    const Layout = () => {
        props.history.push({
            pathname: '/login'
        });
    }

    const github = () => {
        const w=window.open('about:blank');
        w.location.href = 'https://github.com/vanliant/react'
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
            <Menu.Item onClick={github}>
                <span>{i18n.center}</span>
            </Menu.Item>
            <Menu.Item onClick={Layout}>
                <span>{i18n.layout}</span>
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

            <div className={styles.email}>
                <Badge className={styles.email_info} style={{ backgroundColor: '#f3bf41' }} count={4}>
                    <MailOutlined style={{ fontSize: '20px' }} />
                </Badge>
            </div>

            <div className={styles.notice}>
                <Badge className={styles.notice_info} count={5}>
                    <BellOutlined style={{ fontSize: '20px' }} />
                </Badge>
            </div>

            <div className={styles.avatar}>
                <Dropdown overlay={userMenu} placement="bottomCenter" arrow>
                    <Avatar src={avatarPic} />
                </Dropdown>
            </div>
        </div>
    )
}


export default connect(
    state => ({
        i18n: state.i18n,
        user: state.user
    }),
    { languageHandler }
)(withRouter(Header))