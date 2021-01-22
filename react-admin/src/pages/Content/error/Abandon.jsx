import React, { Component } from 'react'
import styles from './index.less'
export default class Abandon extends Component {
    render() {
        return (
            <div className={styles.container}>
                <h1>403</h1>
                <div>抱歉，你无权访问该页面</div>
            </div>
        )
    }
}
