import React from 'react'

import {Card, Row, Col} from 'antd'
// import 'antd/dist/antd.css'


export default class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            api: 'http://localhost:8080/user/main',
            data: [],
        };
        this.update.bind(this);
        this.get.bind(this);
    }

    componentDidMount() {
        this.get()
    }

    update(props) {

    }

    get() {
        fetch(this.state.api,{
            credentials: "include"
        })
            .then(response=>response.json())
            .then((responseJson)=>{
                let messages=responseJson;
                if(messages!=null&&messages.length!==0) {
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

    avatarPrepath='http://localhost:8080/images/';

    render() {
        let items = [];
        for (let data of this.state.data) {
            items.push(
                <Row>
                    <Col offset={3} span={12}>
                        <Card
                            cover={<img src={this.avatarPrepath + data.ele.source}/>}
                            hoverable={true}
                            //loading={true}
                        >
                            {data.ele.description}
                            <Card.Meta
                                avatar={<img src={this.avatarPrepath + data.user.avatar}/>}
                                title={data.user.username}
                            />
                        </Card>
                    </Col>
                </Row>
            )
        }
        return (
            <div>
                {items}
            </div>
        )
    }
}