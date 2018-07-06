import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import React, { Component } from 'react';
import { Tabs} from 'antd';
import { Card } from 'antd';
import 'antd/dist/antd.css';
import './Headerdemo.css';
import { Col, Row } from 'antd';
import Whitealbum2 from "./Whitealbum2";
const { Header, Content, Footer, Sider } = Layout;
const TabPane = Tabs.TabPane;

class Userheader extends Component {
    constructor(props) {
        super(props);
        this.state={
            api: 'http://localhost:8080/user',
            status: 0,
            user: null,
            username: null,
            avatar: null,
            followers: null,
            followings: null,
            profile: '这个人很懒，并没有填简介~'
        };
        this.get.bind(this);
    }

    get() {
        fetch(this.state.api,{
            credentials: "include"
        })
            .then(response=>response.json())
            .then((responseJson)=>{
                this.setState({
                    user: responseJson,
                    username: responseJson.username,
                    avatar: 'http://localhost:8080/images/'+responseJson.avatar,
                })
            })
            .catch((error)=>{
                console.log(error)
            })
    }

    componentDidMount() {
        fetch('http://localhost:8080/user/account/login?username=jack&password=123',{
            credentials: "include"
        })
            .then(response=>response.text())
            .then((responseText)=>{
                this.setState({
                    status: responseText
                })
            })
            .catch((error)=>{
                console.log(error)
            })
    }

    componentDidUpdate() {
        this.get();
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
                                <p>个人简介：{this.state.profile}</p>
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
                        </TabPane>
                    </Tabs>
                </div>
            </Layout>
        );
    }
}

export default Userheader;