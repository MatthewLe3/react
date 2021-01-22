import React, { Component } from 'react'
import styles from './index.less'
export default class NotFound extends Component {
    render() {
        return (
            <div className={styles.container}>
                <h1>404</h1>
                <div>抱歉，你访问的页面不存在</div>
            </div>
        )
    }
}
