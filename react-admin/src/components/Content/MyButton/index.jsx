import React from 'react'
import styles from './index.less'

export default function MyButton() {    
    return (
        <div className={styles.my_button_content}>
            <iframe src={'https://emilkowalski.github.io/css-effects-snippets/'}
             title={'myBtn'}  name ="iFrame1" frameBorder={'none'} scrolling="auto" height={'100%'} width={'100%'}></iframe>
        </div>
    )
}
