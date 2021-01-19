import React from 'react'
import styles from './Applications.less'

export default function Applications(props) {

    const { title, time, person, email, avatar } = props.info
    return (
        <div className={styles.application}>
            <div>
                <div>
                    <h4>{title}</h4>
                    <h6>{time}</h6>
                </div>
                <div></div>
            </div>
        </div>
    )
}
