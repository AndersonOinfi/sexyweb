import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import React, { Component } from 'react';
import { Tabs} from 'antd';
import { Card } from 'antd';
import 'antd/dist/antd.css';
import './Headerdemo.css';
import { Col, Row } from 'antd';
import Whitealbum2 from "./Whitealbum2";
import Albumin from "./Albumin";
import Friendslist from "./Friendslist";
import Followingbutton from "./Followingbutton";
import $ from "jquery";
const { Header, Content, Footer, Sider } = Layout;
const TabPane = Tabs.TabPane;

class Album extends Component {
    constructor(props){
        super(props);
        this.update.bind(this);
        this.update(props);

    }
    componentWillReceiveProps(props) {
        this.update(props);

    }

    update(props) {
        this.setState={
                avatar: props.avatar,
                username: props.username,
                followers: props.followers,
                followings: props.followings,
                profile: props.profile,
                user:props.user
            }
    }



    render() {
        return (
            <Layout className="indexback">
                <Header style={{width: '100%' ,height:80}}>
                </Header>
                <div style={{marginLeft:'23%',width:800, background: '#fafafa', padding: '0px',textAlign: 'center'}}>
                    <Tabs defaultActiveKey="1">
                        <TabPane tab={<span><Icon type="picture" />xx相册</span>} key="1">
                            <Albumin user={this.props.user}
                                        albumid={this.props.albumid}
                                        />
                        </TabPane>
                    </Tabs>
                </div>
            </Layout>
        );
    }
}

export default Album;