import React from 'react'
import styles from '../index.less'
import { Anchor, Divider } from 'antd';
const { Link } = Anchor;
export default function Font() {
    return (
        <div className={styles.container}>
            <div className={styles.left_container}>
                <Anchor affix={true} getContainer={() => document.getElementById('basic-contain')}>
                    <Link href="#simple" title="简单的例子" />
                    <Link href="#autoplay" title="自动播放" />
                    <Link href="#customArrowThumb" title="自定义左右箭头与缩略图" />
                    <Link href="#followMouse" title="随鼠标摆动" />
                </Anchor>
            </div>
            <div id={'basic-contain'} className={styles.right_container}>
                <div id={'simple'}>
                    <h2>简单的例子</h2>
                    <h6>最简单的进场例子。</h6>
                    <Divider />
                </div>
                <div id={'autoplay'}>
                    <h2>自动播放</h2>
                    <h6>自动播放示例。</h6>
                    <Divider />
                </div>
                <div id={'customArrowThumb'}>
                    <h2>自定义左右箭头与缩略图</h2>
                    <h6>可定制自已所示的箭头。</h6>
                    <Divider />
                </div>
                <div id={'followMouse'}>
                    <h2>随鼠标摆动</h2>
                    <h6>跟随鼠标左右摆动。</h6>
                    <Divider />
                </div>
            </div>
        </div>
    )
}
