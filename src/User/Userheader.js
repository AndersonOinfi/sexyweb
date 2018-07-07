import React, { Component } from 'react';

import { Layout, Icon, Tabs, Card, Col, Row } from 'antd';
import 'antd/dist/antd.css';

import '../index.css'

import Whitealbum2 from "./Whitealbum2";
import Friendslist from "./Friendslist";


const { Header,} = Layout;
const TabPane = Tabs.TabPane;

class Userheader extends Component {
    constructor(props) {
        super(props);
        this.update.bind(this);
        this.update(props);
    }

    componentWillReceiveProps(props) {
        this.update(props)
    }

    update(props) {
        this.state={
            avatar: props.avatar,
            username: props.username,
            followers: props.followers,
            followings: props.followings,
            profile: props.profile
        }
    }

    render() {
        return (
            <Layout className="indexback">
                <Header style={{width: '100%' ,height:80}}>
                </Header>
                <div style={{width:500, background: '#fafafa', padding: '0px',marginLeft:'30%',marginTop:50 }}>
                    <Row>
                        <Col span={12}>
                            <Card
                                bordered={false}
                                style={{ width: 200,backgroundColor:'#fafafa' }}
                                cover={<img alt="example" src={this.state.avatar} />}
                            >
                            </Card>
                        </Col>
                        <Col span={12}>
                            <Card title={this.state.username}
                                  bordered={false}
                                  style={{ width: 300 ,backgroundColor:'#fafafa'}}
                                  actions={[<Icon type="edit" />, <Icon type="poweroff" />]}>
                                <p>{this.state.followers} 粉丝</p>
                                <p>{this.state.followings} 关注</p>
                                <p>个人简介： {this.state.profile}</p>
                            </Card>
                        </Col>
                    </Row>
                </div>
                <div style={{marginLeft:'23%',width:800, background: '#fafafa', padding: '0px',textAlign: 'center'}}>
                    <Tabs defaultActiveKey="1">
                        <TabPane tab={<span><Icon type="picture" />我的相册</span>} key="1">
                            <Whitealbum2/>
                        </TabPane>
                        <TabPane tab={<span><Icon type="team" />好友列表</span>} key="2">
                            <Friendslist/>
                        </TabPane>
                    </Tabs>
                </div>
            </Layout>
        );
    }
}

export default Userheader;