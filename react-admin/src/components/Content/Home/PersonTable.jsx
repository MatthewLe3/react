import React from 'react'
import styles from './PersonTable.less'
import { Table, Tag, Space } from 'antd';

export default function PersonTable(props) {

    const columns = [
        {
            title: '姓名',
            dataIndex: 'name',
            key: 'name',
            render: text => <span className={styles.name}>{text}</span>,
        },

        {
            title: '性别',
            key: 'sex',
            dataIndex: 'sex',
            render: text => {
                return text === 1 ? <Tag color="#4193d3">男</Tag> : <Tag color="#f55487">女</Tag>
            }
        },
        {
            title: '年龄',
            key: 'age',
            dataIndex: 'age',
        },
        {
            title: '邮箱',
            dataIndex: 'email',
            key: 'email',
            render: text => {
                return <span style={{ color: '#4193d3', cursor: 'pointer' }}>{text}</span>
            }
        },
        {
            title: '电话',
            dataIndex: 'phone',
            key: 'phone',
        },
        {
            title: '操作',
            key: 'action',
            render: () => (
                <Space size="middle">
                    <span className={styles.btn}>编辑</span>
                    <span className={styles.btn}>删除</span>
                </Space>
            ),
        }
    ];

    return (
        <div className={styles.home_table}>
            <Table columns={columns} rowKey={record => record.id} dataSource={props.tableData} />
        </div>
    )
}
