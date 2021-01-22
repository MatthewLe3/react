
import React from 'react'
import TweenOne from 'rc-tween-one';
import PropTypes from 'prop-types';
import styles from '../index.less'

// 基本动画效果
export default function Basic(props) {
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

Basic.propTypes = {
    children: PropTypes.any,
    className: PropTypes.string,
    paused: PropTypes.bool,
};