import React from 'react'
import styles from './index.less'
import { Anchor } from 'antd';
const { Link } = Anchor;
export default function Scroll() {
    return (
        <div className={styles.container}>
            <div className={styles.left_container}>
                <Anchor affix={true} getContainer={()=>document.getElementById('basic-contain')}>
                    <Link href="#basic" title="基本动画" />
                    <Link href="#timeLine" title="时间轴" />
                    <Link href="#path" title="路径缓动" />
                    <Link href="#svgShape" title="SVG形变变化" />
                    <Link href="#curvePath" title="曲线路径动画" />
                </Anchor>
            </div>
            <div id={'basic-contain'} className={styles.right_container}>
                <div id={'basic'}>

                </div>
                <div id={'timeLine'}>

                </div>
                <div id={'path'}>

                </div>
                <div id={'svgShape'}>

                </div>
                <div id={'curvePath'}>

                </div>
            </div>
        </div>
    )
}
