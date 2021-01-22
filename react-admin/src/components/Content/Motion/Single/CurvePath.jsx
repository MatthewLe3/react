import React from 'react'
import TweenOne from 'rc-tween-one';
import PropTypes from 'prop-types';
import styles from '../index.less'
// 曲线路径动画
export default function CurvePath(props) {
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

CurvePath.propTypes = {
    children: PropTypes.any,
    className: PropTypes.string,
    paused: PropTypes.bool,
};
