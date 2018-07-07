import React from 'react'

import {Card, Row, Col} from 'antd'

export default class Explore extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            api: 'http://localhost:8080/user/explore',
            data: []
        };
        this.get.bind(this);
    }

    componentDidMount() {
        this.get();
    }

    get() {
        fetch(this.state.api, {
            credentials: "include"
        })
            .then(response => response.json())
            .then((responseJson) => {
                let messages = responseJson;
                if (messages != null && messages.length !== 0) {
                    let data = this.state.data;
                    for (let message of messages) {
                        data.push({
                            ele: message,
                            // user: message.user,
                        });
                    }
                    this.setState({
                        data: data
                    })
                }
            })
    }

    avatarPrepath = 'http://localhost:8080/images/';

    render() {
        const RenderItem = (data) => {
            return (
                <Card
                    cover={<img src={this.avatarPrepath + data.ele.source}/>}
                    hoverable={true}
                >
                    {data.ele.description}
                </Card>
            )
        };
        let items = [];
        let data = this.state.data;
        let len = this.state.data.length;
        let d=new Array(4);
        for (let i = 0; i < len;) {
            for (let j=0;j<4;++j) {
                if(i===len)
                    d[j]=null;
                else {
                    d[j]=RenderItem(data[i])
                    ++i;
                }
            }
            items.push(
                <Row gutter={24}>
                    <Col span={6}>{d[0]}</Col>
                    <Col span={6}>{d[1]}</Col>
                    <Col span={6}>{d[2]}</Col>
                    <Col span={6}>{d[3]}</Col>
                </Row>
            );
        }
        return (
            <div>
                {items}
            </div>
        )
    }
}