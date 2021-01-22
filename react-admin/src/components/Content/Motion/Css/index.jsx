import React, {  } from 'react'
import styles from '../index.less'
import { Anchor, Divider } from 'antd';
import Simple from './Simple'
import Delete from './Delete'
import Enter from './Enter'
const { Link } = Anchor;

export default function Css() {
    return (
        <div className={styles.container}>
            <div className={styles.left_container}>
                <Anchor affix={true} getContainer={() => document.getElementById('css-contain')}>
                    <Link href="#simple" title="简单的例子" />
                    <Link href="#delete" title="删除子集" />
                    <Link href="#enter" title="开始的进场" />
                </Anchor>
            </div>
            <div id={'css-contain'} className={styles.right_container}>

                <div id={'simple'}>
                    <h2>简单的例子</h2>
                    <h6>同时支持进场和离场动画。</h6>
                    <Simple />
                    <Divider />
                </div>
                <div id={'delete'}>
                    <h2>删除子级</h2>
                    <h6>动画出场后将子级删除掉。</h6>
                    <Delete/>
                    <Divider />
                </div>
                <div id={'enter'}>
                    <h2>开始的进场</h2>
                    <h6>开始的进场动画, css 样式查看第一个 demo。</h6>
                    <Enter />
                </div>
            </div>
        </div>
    )
}
