import React, { useState,useEffect } from 'react'
import styles from './index.less'
import { Anchor, Button, Divider } from 'antd';
import PropTypes from 'prop-types';

const { Link } = Anchor;



export default function Css() {
const [anchor, setAnchor] = useState('simple')
    // useEffect(() => {
        
    // }, [])
    return (
        <div className={styles.container}>
            <div className={styles.left_container}>
                <Anchor affix={true} getCurrentAnchor={anchor} getContainer={() => document.getElementById('css-contain')}>
                    <Link href="#simple" title="简单的例子" />
                    <Link href="#delete" title="删除子集" />
                    <Link href="#enter" title="开始的进场" />
                </Anchor>
            </div>
            <div id={'css-contain'} className={styles.right_container}>

                <div id={'simple'}>
                    <h2>简单的例子</h2>
                    <h6>同时支持进场和离场动画。</h6>
                    {/* <h2>基本动画效果<Button size={"small"} onClick={basicChange} >{basic ? '结束' : '开始'}</Button></h2>
                    <div className={styles.cod_box_demo}>
                        <Basic paused={!basic} />
                    </div> */}
                    <Divider />
                </div>
                <div id={'delete'}>
                    <h2>删除子级</h2>
                    <h6>动画出场后将子级删除掉。</h6>
                    {/* <h2>时间轴效果<Button size={"small"} onClick={timeLineChange} >{timeLine ? '结束' : '开始'}</Button></h2>
                    <div className={styles.cod_box_demo}>
                        <TimeLine paused={!timeLine} />
                    </div> */}
                    <Divider />
                </div>
                <div id={'enter'}>
                    <h2>开始的进场</h2>
                    <h6>开始的进场动画, css 样式查看第一个 demo。</h6>
                    {/* <h2>路径缓动<Button size={"small"} onClick={pathChange} >{path ? '结束' : '开始'}</Button></h2>
                    <div className={styles.cod_box_demo}>
                        <Path paused={!path} />
                    </div> */}
                </div>
            </div>
        </div>
    )
}
