import React, { Component } from 'react'
import styles from './index.less'
export default class ServeError extends Component {
    render() {
        return (
            <div className={styles.container}>
                <h1>500</h1>
                <div>抱歉，服务器出错了</div>
            </div>
        )
    }
}
