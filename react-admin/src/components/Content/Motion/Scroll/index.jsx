import React from 'react'
import styles from '../index.less'
import { Anchor, Divider } from 'antd';
const { Link } = Anchor;
export default function Font() {
    return (
        <div className={styles.container}>
            <div className={styles.left_container}>
                <Anchor affix={true} getContainer={() => document.getElementById('basic-contain')}>
                    <Link href="#parallax" title="Parallax 示例" />
                    <Link href="#custom" title="自定义 Parallax 的 playScale" />
                    <Link href="#timeline" title="Parallax 的时间轴动画" />
                    <Link href="#overPack" title="OverPack 例子" />
                </Anchor>
            </div>
            <div id={'basic-contain'} className={styles.right_container}>
                <div id={'parallax'}>
                    <h2>Parallax 示例</h2>
                    <h6>随滚动来播放动画</h6>
                    <Divider />
                </div>
                <div id={'custom'}>
                    <h2>自定义 Parallax 的 playScale</h2>
                    <h6>自定义 playScale，在屏幕中间开始播放，到 80％ 结束动画。</h6>
                    <Divider />
                </div>
                <div id={'timeline'}>
                    <h2>Parallax 的时间轴动画</h2>
                    <h6>可配置多个动画，然后再配合 playScale 完成滚动动画</h6>
                    <Divider />
                </div>
                <div id={'overPack'}>
                    <h2>OverPack 例子</h2>
                    <h6>设置了在屏幕下方 50％ 时开始播放动画，子级可支持 rc-queue-anim rc-animate rc-tween-one。</h6>
                    <Divider />
                </div>
            </div>
        </div>
    )
}
