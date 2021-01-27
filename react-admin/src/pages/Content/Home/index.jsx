import React,{useEffect} from 'react'
import styles from './index.less'

import Tag from '../../../components/Content/Home/Tag'
import Applications from '../../../components/Content/Home/Applications'
import Chart from '../../../components/Content/Home/Chart'
import PersonTable from '../../../components/Content/Home/PersonTable'
import {getHomeData} from '../../../http/api'

export default function Home() {

    useEffect(() => {
        console.log(getHomeData(),'sdsdd')

    }, [])

    const tagData = [
        { color: '#f55587', num: 106, label: 'Orders to ship', icon: 'iconpie' },
        { color: '#F3BF41', num: 20, label: 'Overdue Shipments', icon: 'iconicon--' },
        { color: '#4193D3', num: 16, label: 'Local Source Product', icon: 'iconzhifeiji' },
        { color: '#61CCBD', num: 223, label: 'Third Party Spare', icon: 'icontrophy' }
    ]

    const insData = [
        { title: '19号加班情况汇报', time: '2021-01-19', person: 'Musk', email: '1111111@163.com', avatar: '', descripte: '今日晚项目上线，需加班，对相关情况进行汇报。' },
        { title: '23号调休申请', time: '2021-01-19', person: 'Tomas', email: '22223321@163.com', avatar: '', descripte: '本人想要于23号进行调休，希望予以批准。' },
    ]

    const chartData = {
        color: ['#f55587', '#F3BF41', '#4193D3', '#61CCBD',],
        xAxisData: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        legendData: ['Cycle Time', 'Account', 'Inventory', 'Stock'],
        data: {
            'Cycle Time': [32, 12, 54, 53, 23],
            'Account': [43, 32, 24, 65, 45],
            'Inventory': [43, 23, 34, 32, 64],
            'Stock': [56, 45, 34, 23, 23]
        }
    }

    const tableData = [
        {
            id:1,
            name:'张而非',
            email:'121234242@21.com',
            phone:'14235437653',
            age:42,
            sex:1
        },
        {
            id:2,
            name:'何其取',
            email:'fafdsa@2sa.com',
            phone:'456323445',
            age:32,
            sex:1
        },
        {
            id:3,
            name:'高乐天',
            email:'affasfaf@21.com',
            phone:'564323',
            age:25,
            sex:0
        },
        {
            id:4,
            name:'普萨达',
            email:'1313243@21.com',
            phone:'5342',
            age:30,
            sex:1
        },
        {
            id:5,
            name:'青清新',
            email:'feffd@21.com',
            phone:'14235437653',
            age:32,
            sex:0
        },
    ]

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
                        <div>
                            {insData.map((val, index) => {
                                return (
                                    <Applications key={index} info={val} />
                                )
                            })}
                        </div>
                    </div>
                </div>
                <div className={styles.chart}>
                    <div>
                        <header>
                            <label>数值信息统计概览</label>
                        </header>
                        <div>
                            <Chart chartData={chartData} />
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
