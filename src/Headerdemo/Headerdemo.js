import { Layout, Menu, Icon } from 'antd';
import React, { Component } from 'react';
import { Divider } from 'antd';
import { Input } from 'antd';
import 'antd/dist/antd.css';
import '../index.css'
const { Header,  } = Layout;
const Search = Input.Search;

class Headerdemo extends Component {
    render() {
        return (
                    <Header className="boder" style={{background: '#fff', position: 'fixed', zIndex: 1, width: '100%' ,height:80}}>
                        <a href="#"><Icon type="instagram" style={{ paddingLeft:'5%',fontSize: 50, color: '#000000',margin: 10}}/></a>
                        <Divider type="vertical" style={{ height:40}} />
                        <a href="#" style={{paddingLeft:'1%',color:'#000000', fontSize:'2.4em'}}>SexyAlbum</a>
                        <Search
                            placeholder="input search text"
                            onSearch={value => console.log(value)}
                            style={{ marginLeft:'15%',width: 200 }}
                        />
                        <Menu
                            theme="white"
                            mode="horizontal"
                            defaultSelectedKeys={['3']}
                            style={{paddingRight:'10%', lineHeight: '80px' ,float:'right',height:80}}
                        >
                            <Menu.Item key="1"><Icon type="compass" style={{ fontSize:'1.4em'}} /></Menu.Item>
                            <Menu.Item key="2"><Icon type="heart-o"  style={{ fontSize:'1.4em'}}/></Menu.Item>
                            <Menu.Item key="3"><Icon type="user" style={{ fontSize:'1.4em'}} /></Menu.Item>
                        </Menu>
                    </Header>
        );
    }
}

export default Headerdemo;