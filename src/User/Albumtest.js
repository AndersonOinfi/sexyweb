import React, { Component } from 'react';

import { Layout, Menu, Breadcrumb, Icon, Tabs, Card } from 'antd';

import 'antd/dist/antd.css';

import Albumin from "./Albumin";


const { Header, Content, Footer, Sider } = Layout;
const TabPane = Tabs.TabPane;

class Album extends Component {
    constructor(props) {
        super(props);
        // this.update.bind(this);
        // this.update(props);
        this.state={
            album: null,
        }
    }

    componentWillReceiveProps(props) {
        this.update(props);

    }

    update(props) {
        this.setState = {
            album: props.album != null ? props.album : ({albumname: '', elelist: []})
        }
    }


    render() {
        let album=this.state.album;
        return (
            <Layout className="indexback">
                <Header style={{width: '100%', height: 80}}>
                </Header>
                <div
                    style={{marginLeft: '23%', width: 800, background: '#fafafa', padding: '0px', textAlign: 'center'}}>
                    <Tabs defaultActiveKey="1">
                        <TabPane tab={<span><Icon type="picture"/>{album!=null?album.albumname:''}</span>} key="1">
                            <Albumin album={album!=null?album:{albumname: '', elelist: []}}
                            />
                        </TabPane>
                    </Tabs>
                </div>
            </Layout>
        );
    }
}

export default Album;