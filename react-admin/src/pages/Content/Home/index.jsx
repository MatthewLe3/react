import React, { useState, useEffect } from 'react'
import styles from './index.less'
import { Empty } from 'antd'

import Tag from '../../../components/Content/Home/Tag'
import Applications from '../../../components/Content/Home/Applications'
import Chart from '../../../components/Content/Home/Chart'
import PersonTable from '../../../components/Content/Home/PersonTable'
import { getModuleData, getApplicationData, getChartData,getTableData } from '../../../http/api'

export default function Home() {

    const [tagData, setTagData] = useState([
        { color: '#f55587', num: 0, label: 'Orders to ship', icon: 'iconpie' },
        { color: '#F3BF41', num: 0, label: 'Overdue Shipments', icon: 'iconicon--' },
        { color: '#4193D3', num: 0, label: 'Local Source Product', icon: 'iconzhifeiji' },
        { color: '#61CCBD', num: 0, label: 'Third Party Spare', icon: 'icontrophy' }
    ])

    const [insData, setInsData] = useState([])

    const [color, setColor] = useState([])
    const [xAxisData, setXAxisData] = useState([])
    const [legendData, setLegendData] = useState([])
    const [chartData, setChartData] = useState({})

    const [tableData, setTableData] = useState([])

    useEffect(() => {

        const getData = async () => {
            const { data } = await getModuleData()
            setTagData([
                { color: '#f55587', num: data.ship, label: 'Orders to ship', icon: 'iconpie' },
                { color: '#F3BF41', num: data.shipments, label: 'Overdue Shipments', icon: 'iconicon--' },
                { color: '#4193D3', num: data.product, label: 'Local Source Product', icon: 'iconzhifeiji' },
                { color: '#61CCBD', num: data.spare, label: 'Third Party Spare', icon: 'icontrophy' }
            ])

            let application = await getApplicationData()
            let applicationData = application.data
            setInsData(applicationData)

            let curChartData = await getChartData()
            const { color, xAxisData, legendData, chartData } = curChartData.data
            setColor(color)
            setXAxisData(xAxisData)
            setLegendData(legendData)
            setChartData(chartData)

            let curTableData = await getTableData()
            setTableData(curTableData.data)
        }
        getData()
    }, [])

    return (
        <div className={styles.home}>
            <div className={styles.tag_module}>
                {/* 4个模块 */}
                {tagData.map((val, index) => {
                    return (
                        <Tag info={val} key={index} />
                    )
                })}
            </div>

            {/* 申请与图标统计 */}
            <div className={styles.container}>
                <div className={styles.application}>
                    <div>
                        <header>
                            <label>申请表信息</label>
                            <label className={styles.new}>NEW</label>
                        </header>
                        <div style={{ minHeight: '411px' }}>
                            {
                                insData.length > 0 ? insData.map((val, index) => {
                                    return (
                                        <Applications key={index} info={val} />
                                    )
                                }) : <Empty />
                            }
                        </div>
                    </div>
                </div>
                <div className={styles.chart}>
                    <div>
                        <header>
                            <label>数值信息统计概览</label>
                        </header>
                        <div>
                            <Chart chartData={{
                                color,
                                xAxisData,
                                legendData,
                                data: chartData
                            }} />
                        </div>
                    </div>
                </div>
            </div>

            {/* 主页表格 */}
            <div className={styles.person_table}>
                <PersonTable tableData={tableData} />
            </div>
        </div>
    )
}
