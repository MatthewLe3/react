import React from 'react'
import styles from './Tag.less'
import IconFont from '../../Icon/index'

export default function Tag(props) {
    console.log('props', props)

    const { color, num, label, icon } = props.info


    return (
        <div className={styles.tag}>
            <div className={styles.tag_content}>
                <div className={styles.icon_content} style={{ backgroundColor: color }}>
                    <IconFont className={styles.translation} type={icon} />
                </div>
                <div className={styles.descripte}>
                    <h2 title={num}>{num}</h2>
                    <h5 title={label}>{label}</h5>
                </div>
            </div>
        </div>
    )
}
