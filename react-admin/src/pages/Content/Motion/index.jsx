import React from 'react'
import { Tabs } from 'antd'
import styles from './index.less'

import Single from '../../../components/Content/Motion/Single/index'
import Css from '../../../components/Content/Motion/Css/index'
import Extra from '../../../components/Content/Motion/Extra/index'
import Font from '../../../components/Content/Motion/Font/index'
import Scroll from '../../../components/Content/Motion/Scroll/index'
import Banner from '../../../components/Content/Motion/Banner/index'

export default function Motion() {

    const { TabPane } = Tabs;

    const callback = () => {
        console.log('callback')
    }

    const tabData = [
        { label: '单元素动画', key: 'single', components: Single },
        { label: 'Css样式动画', key: 'css', components: Css },
        { label: '进出场动画', key: 'extra', components: Extra },
        { label: '文字动画', key: 'font', components: Font },
        { label: '页面滚动动画', key: 'scroll', components: Scroll },
        { label: 'Banner动画', key: 'banner', components: Banner }
    ]

    return (
        <div className={styles.motion}>
            <Tabs className={styles.tabs} defaultActiveKey="single" onChange={callback}>
                {
                    tabData.map(val => {
                        return <TabPane tab={val.label} key={val.key}><val.components /></TabPane>
                    })
                }
            </Tabs>
        </div>
    )
}
