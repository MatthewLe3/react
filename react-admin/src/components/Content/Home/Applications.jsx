import React from 'react'
import styles from './Applications.less'
import { Button, Avatar } from 'antd'
import { CheckOutlined, CloseOutlined, SolutionOutlined, MailOutlined, UserOutlined } from '@ant-design/icons';

export default function Applications(props) {

    const { title, time, person, email, descripte } = props.info
    return (
        <div className={styles.application}>
            <div>
                <div>
                    <h4>{title}</h4>
                    <h6>{time}</h6>
                </div>
                <div className={styles.btnGroup}>
                    <Button type="dash" icon={<CheckOutlined style={{color:'#A2D69A'}} />}>
                        通过
                    </Button>
                    <Button type="dash" icon={<CloseOutlined style={{color:'#f55587'}}/>}>
                        驳回
                    </Button>
                </div>

                <div className={styles.avatar}>
                    <Avatar size={56} style={{ backgroundColor: '#87d068', fontSize: '30px' }} icon={<UserOutlined />} />
                    <br />
                    <label><label style={{ fontWeight: 'bold' }}>姓名：</label>{person}</label><br />
                    <label className={styles.email}><label style={{ fontWeight: 'bold' }}>邮箱：</label>{email}</label><br />
                    <label className={styles.descripte} title={descripte}><label style={{ fontWeight: 'bold' }}>说明：</label>{descripte}</label>
                </div>

                <div className={styles.btnGroup}>
                    <Button type="dash" icon={<MailOutlined />}>
                        消息
                    </Button>
                    <Button type="dash" icon={<SolutionOutlined />}>
                        主页
                    </Button>
                </div>
            </div>
        </div>
    )
}
