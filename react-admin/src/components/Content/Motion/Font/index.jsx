import React from 'react'
import styles from '../index.less'
import { Anchor, Divider } from 'antd';
const { Link } = Anchor;
export default function Font() {
    return (
        <div className={styles.container}>
            <div className={styles.left_container}>
                <Anchor affix={true} getContainer={() => document.getElementById('basic-contain')}>
                    <Link href="#basic" title="基本效果" />
                    <Link href="#switch" title="文字切换" />
                    <Link href="#custom" title="自定义" />
                    <Link href="#effect" title="内置效果" />
                    <Link href="#complex" title="一个复杂些的例子" />
                </Anchor>
            </div>
            <div id={'basic-contain'} className={styles.right_container}>
                <div id={'basic'}>
                    <h2>基本效果</h2>
                    <h6>默认文字效果</h6>
                    <Divider />
                </div>
                <div id={'switch'}>
                    <h2>文字切换</h2>
                    <h6>文字切换效果</h6>
                    <Divider />
                </div>
                <div id={'custom'}>
                    <h2>自定义</h2>
                    <h6>自定义动画效果</h6>
                    <Divider />
                </div>
                <div id={'effect'}>
                    <h2>内置效果</h2>
                    <h6>内置效果</h6>
                    <Divider />
                </div>
                <div id={'complex'}>
                    <h2>一个复杂些的例子</h2>
                    <h6>一个标题和正文内容的进场效果</h6>
                    <Divider />
                </div>
            </div>
        </div>
    )
}
