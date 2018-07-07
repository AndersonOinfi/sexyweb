import React from 'react'

import {Card, Row, Col} from 'antd'

export default class Explore extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            api: 'http://localhost:8080/user/explor',
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
                            ele: message.ele,
                            user: message.user,
                        });
                    }
                    this.setState({
                        data: data
                    })
                }
            })
    }

    avatarPrepath = 'http://localhost:8080/images/';

    RenderItem(data) {
        return (
            <Card
                cover={<img src={this.avatarPrepath + data.ele.source}/>}
                hoverble={true}
            >
                <Meta
                    avatar={<img src={this.avatarPrepath + data.user.avatar}/>}
                    title={data.user.username}
                />
            </Card>
        )
    }


    render() {
        let items = [];
        let data = this.state.data;
        let len = this.state.data.length;
        for (let i in len) {
            d1 = (i === len) ? <RenderItem data={data[i]}/> : null;
            i++;
            d2 = (i === len) ? <RenderItem data={data[i]}/> : null;
            i++;
            d3 = (i === len) ? <RenderItem data={data[i]}/> : null;
            i++;
            d4 = (i === len) ? <RenderItem data={data[i]}/> : null;
            i++;
        }
        items.push(
            <Row>
                <Col>{d1}</Col>
                <Col>{d2}</Col>
                <Col>{d3}</Col>
                <Col>{d4}</Col>
            </Row>
        );
        return (
            <div>
                {items}
            </div>
        )
    }
}