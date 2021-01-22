import React from 'react'
import TweenOne from 'rc-tween-one';
import PropTypes from 'prop-types';
import styles from '../index.less'
// 时间轴
export default function TimeLine(props) {
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

TimeLine.propTypes = {
    children: PropTypes.any,
    className: PropTypes.string,
    paused: PropTypes.bool,
};