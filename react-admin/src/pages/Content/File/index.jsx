import React, { useEffect, useState } from 'react'
import { Form, Button, Input, Radio } from 'antd'
import styles from './index.less'
import { getFile } from '../../../http/api'
import IconFont from '../../../components/Icon/index'

const { TextArea } = Input;

export default function File() {
    const [file, setFile] = useState([])
    const [host, setHost] = useState('')

    const formItemLayout = {
        labelCol: {
            xs: {
                span: 24,
            },
            sm: {
                span: 8,
            },
        },
        wrapperCol: {
            xs: {
                span: 24,
            },
            sm: {
                span: 16,
            },
        },
    };
    const onFinish = (fieldsValue) => {
        console.log('fieldsValue', fieldsValue)
    }

    // 获取当前文件列表
    const getFileList = async () => {
        let data = await getFile()
        let fileData = data.data.fileList
        setFile(fileData)
        setHost(data.data.host)
    }

    const download = (value) => {
        const eleLink = document.createElement('a');
        eleLink.style.display = 'none';
        eleLink.target = "_blank"
        eleLink.href = 'http://' + host + '/public' + value.split('/public')[1];
        document.body.appendChild(eleLink);
        eleLink.click();
        document.body.removeChild(eleLink);

    }

    useEffect(() => {
        getFileList()
    }, [])

    return (
        <div className={styles.content}>
            <h3>node新建文件并下载(mock环境下不可用)</h3>
            <Form {...formItemLayout} onFinish={onFinish}>
                <Form.Item name="fileName" label="文件名" initialValue={''} rules={[
                    {
                        required: true,
                        message: '请输入文件名',
                    },
                ]}>
                    <Input placeholder={'请输入文件名'} />
                </Form.Item>
                <Form.Item name="fileContent" label="文件内容" initialValue={''}>
                    <TextArea rows={4} placeholder={'请输入文件内容'} />
                </Form.Item>
                <Form.Item name="fileType" label="文件类型" initialValue={'txt'} rules={[
                    {
                        required: true,
                        message: '请输入文件名',
                    },
                ]}>
                    <Radio.Group>
                        <Radio value={'txt'}>txt</Radio>
                        <Radio value={'doc'}>doc</Radio>
                        <Radio value={'xlsx'}>xlsx</Radio>
                    </Radio.Group>
                </Form.Item>
                <div style={{ textAlign: 'right' }}>
                    <Button type="primary" htmlType="submit">
                        提交
                </Button>
                </div>
            </Form>

            <h3>当前文件列表：</h3>
            <ul>
                {file.map((value, index) => {
                    return <li key={index}>
                        <label>{index + 1}.</label>
                        <IconFont className={styles.icon} type={'iconwenjian'} />
                        <label>{value.split('/')[value.split('/').length - 1]}</label>
                        <IconFont className={styles.download} onClick={() => download(value)} type={'iconxiazai'} />
                    </li>
                })}

            </ul>
        </div>
    )
}
