
import { Layout, } from 'antd';
import React, { Component } from 'react';
import 'antd/dist/antd.css';
import '../index.css'
const {  Footer, } = Layout;

class Userfoot extends Component {
    render() {
        return (
            <Layout className="indexback">
        <Footer style={{ textAlign: 'center',backgroundColor:'#fafafa' }}>
        SexyAlbum ©2018 Created by YingKuNO.1
        </Footer>
            </Layout>
        );
    }
}

export default Userfoot;