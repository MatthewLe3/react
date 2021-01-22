import React from 'react'
import styles from '../index.less'
import { Anchor, Divider } from 'antd';

import Enter from './Enter'
import Add from './Add'

const { Link } = Anchor;
export default function Extra() {
    return (
        <div className={styles.container}>
            <div className={styles.left_container}>
                <Anchor affix={true} getContainer={() => document.getElementById('basic-contain')}>
                    <Link href="#enter" title="进场和离场" />
                    <Link href="#add" title="添加与删除" />
                </Anchor>
            </div>
            <div id={'basic-contain'} className={styles.right_container}>
                <div id={'enter'}>
                    <h2>进场和离场</h2>
                    <h6>同时支持进场和离场动画。</h6>
                    <Enter />
                    <Divider />
                </div>
                <div id={'add'}>
                    <h2>添加与删除</h2>
                    <h6>场景里有增加或删除条目时也会触发动画。</h6>
                    <Add />
                    <Divider />
                </div>
            </div>
        </div>
    )
}
