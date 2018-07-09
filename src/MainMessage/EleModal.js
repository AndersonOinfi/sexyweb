import React from 'react'

import {Modal, Card} from 'antd'


const avatarPrepath='http://localhost:8080/images/';

export const EleModal=(key,data,eleClick)=>{
    if(data!=null&&key>=0) {
        return (
            <Modal // visible={true}
                // closable={false}
                   footer={null}
                   onCancel={eleClick(-1)}
                   width='75%'
                   bodyStyle={{
                       // backgroundcolor: 'rgba(0,0,0,0.5)'
                   }}
            >
                <Card cover={<img src={avatarPrepath + data[key].ele.source}/>}
                      hoverable={true}
                >
                    <Card.Meta description={data[key].ele.description}/>
                </Card>
            </Modal>
        )
    }
};
