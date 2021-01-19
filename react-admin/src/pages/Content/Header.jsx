import React, { } from 'react'
import styles from './index.less'

import { ChildrenContext } from './index'
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';

export default function Header(props) {
    const { setFoldStatus } = props
    const handleFold = (value) => {
        setFoldStatus(value)
    }

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
                quanping
            </div>

            <div className={styles.global}>
                guojihua
            </div>

            <div className={styles.avatar}>
                touxiang
            </div>
        </div>
    )
}
