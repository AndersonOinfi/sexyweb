import React from 'react'

import {Modal, Card} from 'antd'

export const EleModal=(key,data)=>{
    if(data!=null&&key>=0) {
        return (
            <Modal // visible={true}
                // closable={false}
                   footer={null}
                   onCancel={this.EleOnclick.bind(this, -1)}
                   width='75%'
                   bodyStyle={{
                       // backgroundcolor: 'rgba(0,0,0,0.5)'
                   }}
            >
                <Card cover={<img src={this.avatarPrepath + data[key].ele.source}/>}
                      hoverable={true}
                >
                    <Card.Meta description={data[key].ele.description}/>
                </Card>
            </Modal>
        )
    }
};

export const EleOnclick=(key)=>{
    this.setState({
        modalKey: this.state.modalKey >= 0 ? -1 : key
    })
}