import React from 'react'
import TweenOne from 'rc-tween-one';
import PropTypes from 'prop-types';
import SvgMorphPlugin from 'rc-tween-one/lib/plugin/SvgMorphPlugin';
TweenOne.plugins.push(SvgMorphPlugin);

// svg形变变化
export default function SvgShape(props) {
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
SvgShape.propTypes = {
    children: PropTypes.any,
    className: PropTypes.string,
    paused: PropTypes.bool,
};
