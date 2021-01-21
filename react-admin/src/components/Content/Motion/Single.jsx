import React, { useState } from 'react'
import styles from './index.less'
import { Anchor, Button, Divider } from 'antd';
import TweenOne from 'rc-tween-one';
import PropTypes from 'prop-types';
import SvgMorphPlugin from 'rc-tween-one/lib/plugin/SvgMorphPlugin';
import PathPlugin from 'rc-tween-one/lib/plugin/PathPlugin';
TweenOne.plugins.push(SvgMorphPlugin);

TweenOne.plugins.push(PathPlugin);

const { Link } = Anchor;


// 基本动画效果
function Basic(props) {
    return (
        <TweenOne
            animation={{
                x: 80,
                scale: 0.5,
                rotate: 120,
                yoyo: true, // demo 演示需要
                repeat: -1, // demo 演示需要
                duration: 1000
            }}
            paused={props.paused}
            style={{ transform: 'translateX(-80px)' }}
            className={styles.code_box_shape}
        />
    );
}

// 时间轴
function TimeLine(props) {
    const animation = [
        { left: '-40%' },
        { left: '40%' },
        { top: '60px' },
        { scale: 0.7 },
        { scale: 1 },
        { top: 0 },
        { left: '0%' },
    ];
    return (
        <TweenOne
            animation={animation}
            paused={props.paused}
            repeat={-1} // demo 演示需要，时间轴循环
            yoyo // demo 演示需要，时间轴循环
            style={{ transform: 'scale(1)' }}
            className={styles.code_box_shape}
        />
    );
}

// 路径缓动
const p0 = 'M0,100 L25,100 C34,20 40,0 100,0';
const p1 = 'M0,100 C5,120 25,130 25,100 C30,60 40,75 58,90 C69,98.5 83,99.5 100,100';
const ease0 = TweenOne.easing.path(p0);
const ease1 = TweenOne.easing.path(p1);
function Path(props) {
    const animation = [
        {
            repeatDelay: 500,
            y: -70,
            repeat: -1,
            yoyo: true,
            ease: ease0,
            duration: 1000
        },
        {
            repeatDelay: 500,
            appearTo: 0,
            scaleX: 0,
            scaleY: 2,
            repeat: -1,
            yoyo: true,
            ease: ease1,
            duration: 1000,
        }
    ];
    return (
        <div>
            <TweenOne
                animation={animation}
                paused={props.paused}
                className={styles.code_box_shape}
                style={{
                    position: 'absolute',
                    transformOrigin: 'center bottom',
                }}
            />
        </div>
    );
}

// svg形变变化
function SvgShape(props) {
    const animation = {
        d: 'M60,10L60,90L140,90L140,10Z',
        yoyo: true,
        repeat: -1,
        duration: 1000,
    };
    return (
        <div style={{ textAlign: 'center', marginTop: 40 }}>
            <svg width="200" height="130" version="1.2"
                style={{ display: 'block', margin: 'auto' }}
            >
                <TweenOne
                    animation={animation}
                    style={{ fill: '#019BF0' }}
                    paused={props.paused}
                    component="path"
                    d="M60,50 a40,40 0 1,0 80,0a40,40 0 1,0 -80,0z"
                    attr="attr"
                />
            </svg>
        </div>
    );
}

// 曲线路径动画
function CurvePath(props) {
    const path = `M3.5,175V19c0,0,1-8.75,8.25-11.5S26.5,8,26.5,8l54,53.25
      c0,0,7,8.25,14.5,0.75s51.5-52.25,51.5-52.25s9.75-7,18-2s7.75,11.5,7.75,11.5
      v104c0,0-0.5,15.75-15.25,15.75s-15.75-15-15.75-15V68.5c0,0-0.125-9.125-6-3.25
      s-36.25,36-36.25,36s-11.625,11.875-24-0.5S40.25,65.5,40.25,65.5
      s-5.75-5.25-5.75,2s0,107.25,0,107.25s-0.75,13.5-14.5,13.5S3.5,175,3.5,175z`;
    const animation = {
        path: path,
        repeat: -1,
        duration: 5000,
        ease: 'linear'
    };
    return (
        <div style={{ position: 'relative', height: 200, width: 200, margin: '10px auto' }}>
            <TweenOne
                animation={animation}
                style={{ margin: 0, width: 20, height: 20, transform: 'translate(-10px, -10px)' }}
                className={styles.code_box_shape}
                paused={props.paused}
            />
            <svg width="200" height="200">
                <path d={path} fill="none" stroke="rgba(1, 155, 240, 0.2)" />
            </svg>
        </div>
    )
}


Basic.propTypes = {
    children: PropTypes.any,
    className: PropTypes.string,
    paused: PropTypes.bool,
};
TimeLine.propTypes = {
    children: PropTypes.any,
    className: PropTypes.string,
    paused: PropTypes.bool,
};
Path.propTypes = {
    children: PropTypes.any,
    className: PropTypes.string,
    paused: PropTypes.bool,
};
SvgShape.propTypes = {
    children: PropTypes.any,
    className: PropTypes.string,
    paused: PropTypes.bool,
};
CurvePath.propTypes = {
    children: PropTypes.any,
    className: PropTypes.string,
    paused: PropTypes.bool,
};

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
