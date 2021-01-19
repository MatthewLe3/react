import React from 'react'
import styles from './index.less'

import Tag from '../../../components/Content/Home/Tag'
import Applications from '../../../components/Content/Home/Applications'

export default function Home() {

    const tagData = [
        {color:'#f55587',num:106,label:'Orders to ship',icon:'iconpie'},
        {color:'#F3BF41',num:20,label:'Overdue Shipments',icon:'iconicon--'},
        {color:'#4193D3',num:16,label:'Local Source Product',icon:'iconzhifeiji'},
        {color:'#61CCBD',num:223,label:'Third Party Spare',icon:'icontrophy'}
    ]

    const insData = [
        {title:'加班申请',time:'2021-01-19',person:'Musk',email:'1111111@163.com',avatar:''},
        {title:'调休申请',time:'2021-01-19',person:'Tomas',email:'22223321@163.com',avatar:''},
    ]



    return (
        <div className={styles.home}>
            <div className={styles.tag_module}>
                {/* 4个模块 */}
                {tagData.map((val,index)=>{
                    return (
                        <Tag info={val} key={index}/>
                    )
                })}
            </div>

                {/* 申请与图标统计 */}
            <div className={styles.container}>
                <div className={styles.application}>
                    <div>
                        <header>
                            <label>New Applications</label>
                            <label className={styles.new}>NEW</label>
                        </header>
                        <div>
                            {insData.map((val,index)=>{
                                return(
                                    <Applications key={index} info={val}  />
                                )
                            })}
                        </div>
                    </div>
                </div>
                <div className={styles.chart}>
                    <div>
                    chart
                    </div>
                </div>
            </div>
        </div>
    )
}
