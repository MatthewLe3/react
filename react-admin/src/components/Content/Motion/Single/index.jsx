import React, { useState } from 'react'
import styles from '../index.less'
import { Anchor, Button, Divider } from 'antd';
// import TweenOne from 'rc-tween-one';
// import PropTypes from 'prop-types';
// import SvgMorphPlugin from 'rc-tween-one/lib/plugin/SvgMorphPlugin';
// import PathPlugin from 'rc-tween-one/lib/plugin/PathPlugin';

import Basic from './Basic'
import TimeLine from './Timeline'
import Path from './Path'
import SvgShape from './SvgShape'
import CurvePath from './CurvePath'

// TweenOne.plugins.push(SvgMorphPlugin);

// TweenOne.plugins.push(PathPlugin);

const { Link } = Anchor;

export default function Single() {
    const [basic, setBasic] = useState(false)
    const basicChange = () => {
        setBasic(!basic)
    }

    const [timeLine, setTimeLine] = useState(false)
    const timeLineChange = () => {
        setTimeLine(!timeLine)
    }

    const [path, setPath] = useState(false)
    const pathChange = () => {
        setPath(!path)
    }

    const [svgShape, setSvgShape] = useState(false)
    const svgShapeChange = () => {
        setSvgShape(!svgShape)
    }

    const [curvePath, setCurvePath] = useState(false)
    const curvePathChange = () => {
        setCurvePath(!curvePath)
    }
    return (
        <div className={styles.container}>
            <div className={styles.left_container}>
                <Anchor affix={true} getContainer={() => document.getElementById('basic-contain')}>
                    <Link href="#basic" title="基本动画" />
                    <Link href="#timeLine" title="时间轴" />
                    <Link href="#path" title="路径缓动" />
                    <Link href="#svgShape" title="SVG形变变化" />
                    <Link href="#curvePath" title="曲线路径动画" />
                </Anchor>
            </div>
            <div id={'basic-contain'} className={styles.right_container}>

                <div id={'basic'}>
                    <h2>基本动画效果<Button size={"small"} onClick={basicChange} >{basic ? '结束' : '开始'}</Button></h2>
                    <div className={styles.cod_box_demo}>
                        <Basic paused={!basic} />
                    </div>
                    <Divider />
                </div>
                <div id={'timeLine'}>
                    <h2>时间轴效果<Button size={"small"} onClick={timeLineChange} >{timeLine ? '结束' : '开始'}</Button></h2>
                    <div className={styles.cod_box_demo}>
                        <TimeLine paused={!timeLine} />
                    </div>
                    <Divider />
                </div>
                <div id={'path'}>
                    <h2>路径缓动<Button size={"small"} onClick={pathChange} >{path ? '结束' : '开始'}</Button></h2>
                    <div className={styles.cod_box_demo}>
                        <Path paused={!path} />
                    </div>
                </div>
                <div id={'svgShape'}>
                    <h2>SVG形变动画<Button size={"small"} onClick={svgShapeChange} >{svgShape ? '结束' : '开始'}</Button></h2>
                    <div className={styles.cod_box_demo}>
                        <SvgShape paused={!svgShape} />
                    </div>
                    <Divider />
                </div>
                <div id={'curvePath'}>
                    <h2>曲线路径动画<Button size={"small"} onClick={curvePathChange} >{curvePath ? '结束' : '开始'}</Button></h2>
                    <div className={styles.cod_box_demo}>
                        <CurvePath paused={!curvePath} />
                    </div>
                    <Divider />
                </div>
            </div>
        </div>
    )
}
