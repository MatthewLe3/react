import React, { Component } from 'react'
import LoginContent from '../../components/Login/index'
import styles from "./index.less";

export default class Login extends Component {
    render() {
        return (
            <div className={styles.login}>
                <LoginContent />
            </div>
        )
    }
}
