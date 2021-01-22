import React, { useState } from 'react'
import { Table, Tag, Space, Rate, Popconfirm, message, Select,Cascader,Input,DatePicker } from 'antd'
import styles from './index.less'
import moment from 'moment';




const personData = [
    {
        id: 1,
        name: '克莉丝汀',
        sex: 0,
        date: '2020-01-02',
        address: '',
        position: '高级前端工程师',
        evaluation: 3,
        authority: 1,
        editable: false
    },
    {
        id: 2,
        name: '彭万里',
        sex: 1,
        date: '2019-11-23',
        address: '',
        position: '项目经理',
        evaluation: 3.5,
        authority: 1,
        editable: false
    },
    {
        id: 3,
        name: '高大山',
        sex: 1,
        date: '2021-01-12',
        address: '',
        position:'中级测试工程师',
        evaluation: 3.5,
        authority: 1,
        editable: false
    },
    {
        id: 4,
        name: '马宏宇',
        sex: 1,
        date: '2018-12-12',
        address: '',
        position: '前端架构工程师',
        evaluation: 3,
        authority: 1,
        editable: false
    },
    {
        id: 5,
        name: '朱希亮',
        sex: 0,
        date: '2019-07-21',
        address: '',
        position: '资深后端工程师',
        evaluation: 5,
        authority: 1,
        editable: false
    },
    {
        id: 6,
        name: '程孝先',
        sex: 0,
        date: '2020-01-01',
        address: '',
        position: '中级测试工程师',
        evaluation: 4,
        authority: 2,
        editable: false
    },
    {
        id: 7,
        name: '章汉夫',
        sex: 1,
        date: '2018-03-02',
        address: '',
        position: '',
        evaluation: 3.5,
        authority: 1,
        editable: false
    },
    {
        id: 8,
        name: '于学忠',
        sex: 1,
        date: '2019-11-12',
        address: '',
        position: '',
        evaluation: 3.5,
        authority: 1,
        editable: false
    },
    {
        id: 9,
        name: '汤绍箕',
        sex: 0,
        date: '2018-09-30',
        address: '',
        position: '产品经理',
        evaluation: 3.5,
        authority: 1,
        editable: false
    },
    {
        id: 10,
        name: '何光宗',
        sex: 1,
        date: '2019-11-02',
        address: '',
        position: '',
        evaluation: 3,
        authority: 2,
        editable: false
    },
    {
        id: 11,
        name: '年广嗣',
        sex: 1,
        date: '2019-07-13',
        address: '',
        position: '',
        evaluation: 3,
        authority: 2,
        editable: false
    },
]

const { Option } = Select;

const options = [
    {
        value:'江苏',
        label:'江苏',
        children:[{
            value:'南京',
            label:'南京'
        }]
    },
    {
        value:'浙江',
        label:'浙江',
        children:[{
            value:'杭州',
            label:'杭州'
        }]
    }
]

const dateFormat = 'YYYY-MM-DD';


export default function EditTable() {

    const columns = [
        {
            title: '姓名',
            dataIndex: 'name',
            key: 'name',
            render: text => <span className={styles.name}>{text}</span>,
        },
        {
            title: '入职日期',
            dataIndex: 'date',
            key: 'date',
            render:(text,record,index)=><>
            {!record.editable ? <label>{text}</label> :<DatePicker defaultValue={moment(text, dateFormat)} format={dateFormat} onChange={(value,dataString)=>dateChange(value,dataString,index)} />}
            </>
        },
        {
            title: '性别',
            dataIndex: 'sex',
            key: 'sex',
            render: (text, record, index) =>
                <>
                    {
                        !record.editable ? text === 1 ? <Tag color="#4193d3">男</Tag> : <Tag color="#f55487">女</Tag>
                            : <Select defaultValue={text} style={{ width: 120 }} onChange={(value) => sexHandleChange(value, index)}>
                                <Option value={1}>男</Option>
                                <Option value={0}>女</Option>
                            </Select>
                    }
                </>,
        },
        {
            title: '户籍',
            dataIndex: 'address',
            key: 'address',
            render: (text,record,index) => <>
                {!record.editable ? <label>{Boolean(text) ? `${text[0]}/${text[1]}` : '-'}</label> : <Cascader defaultValue={text} options={options} onChange={(value)=>addressChange(value,index)} placeholder="请选择" />}
            </>
        },
        {
            title: '职位',
            dataIndex: 'position',
            key: 'position',
            render: (text,record,index) => <>
                {!record.editable ? <label>{text}</label> : 
                    <Input defaultValue={text} onChange={(e)=>positonChange(e,index)} />
                }
            </>
        },
        {
            title: '权限',
            dataIndex: 'authority',
            key: 'authority',
            render: (text, record, index) =>
                <>
                    {
                        !record.editable ? <label>{text === 1 ? '普通成员' : '管理员'}</label>
                            : <Select defaultValue={text} style={{ width: 120 }} onChange={(value) => handleChange(value, index)}>
                                <Option value={1}>普通成员</Option>
                                <Option value={2}>管理员</Option>
                            </Select>
                    }
                </>,
        },
        {
            title: '考核',
            dataIndex: 'evaluation',
            key: 'evaluation',
            render: (text, record) => <Rate allowHalf disabled={!record.editable} defaultValue={text} />,
        },
        {
            title: 'Action',
            key: 'action',
            render: (text, record, index) => (

                <Space size="middle">
                    {
                        record.editable ? <span className={styles.btn} onClick={() => saveData(text, record, index)}>保存</span> : <span className={styles.btn} onClick={() => editData(text, record, index)}>编辑</span>
                    }

                    <Popconfirm
                        title="确认删除该数据?"
                        onConfirm={() => delData(text, record, index)}
                        okText="确认"
                        cancelText="取消"
                    >
                        <span className={styles.btn} >删除</span>
                    </Popconfirm>

                </Space>
            ),
        },
    ];



    const [data, setData] = useState(personData)

    const delData = (text, record, index) => {
        let arr = JSON.parse(JSON.stringify(data))
        arr.splice(index, 1)
        setData(arr)
        message.success('删除成功。')
    }

    const editData = (text, record, index) => {
        let arr = JSON.parse(JSON.stringify(data))
        arr[index].editable = true
        setData(arr)
    }

    const saveData = (text, record, index) => {
        let arr = JSON.parse(JSON.stringify(data))
        arr[index].editable = false
        setData(arr)
        message.success('编辑成功。')
    }

    const handleChange = (value, index) => {
        let arr = JSON.parse(JSON.stringify(data))
        arr[index].authority = value
        setData(arr)
    }

    const sexHandleChange = (value, index) => {
        let arr = JSON.parse(JSON.stringify(data))
        arr[index].sex = value
        setData(arr)
    }

    const addressChange = (addressValue,index)=>{
        let arr = JSON.parse(JSON.stringify(data))
        arr[index].address = addressValue
        setData(arr)
    }

    const positonChange = (e,index) => {
        let arr = JSON.parse(JSON.stringify(data))
        arr[index].position = e.target.value
        setData(arr)
    }

    const dateChange = (value,dataString,index) => {
        let arr = JSON.parse(JSON.stringify(data))
        arr[index].date = dataString
        setData(arr)
    }
    return (
        <div className={styles.editTable}>
            <Table columns={columns} bordered rowKey={record => record.id} dataSource={data} />
        </div>
    )


}
