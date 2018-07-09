import React, { Component } from 'react';

import { Layout, Menu, Icon, Divider, Input, Popover } from 'antd';
import 'antd/dist/antd.css';

import {Link} from 'react-router-dom'

import '../index.css'


const { Header } = Layout;
const Search = Input.Search;

class Headerdemo extends Component {
    constructor(props) {
        super(props);
        this.state={
            likesApi: 'http://localhost:8080/user/likes',
        }
    }

    getLikes() {
        fetch(this.state.likesApi,{
            credentials: "include"
        })
    }

    render() {
        return (
            <div style={{width: '100%', height: 80}}>
                <Header className="boder"
                        style={{background: '#fff', position: 'fixed', zIndex: 1, width: '100%', height: 80}}>
                    <a href="#"><Icon type="instagram"
                                      style={{paddingLeft: '5%', fontSize: 50, color: '#000000', margin: 10}}/></a>
                    <Divider type="vertical" style={{height: 40}}/>
                    <Link to='/page/main'><a href="#" style={{
                        paddingLeft: '1%',
                        color: '#000000',
                        fontSize: '2.4em'
                    }}>SexyAlbum</a></Link>
                    <Search
                        placeholder="input search text"
                        onSearch={value => console.log(value)}
                        style={{marginLeft: '15%', width: 200}}
                    />
                    <Menu
                        theme="white"
                        mode="horizontal"
                        defaultSelectedKeys={['3']}
                        style={{paddingRight: '10%', lineHeight: '80px', float: 'right', height: 80}}
                    >
                        <Menu.Item key="1">
                            <Link to='/page/explore'>
                                <Icon type="compass" style={{fontSize: '1.4em'}}/>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="2">
                            <Popover placement='Bottom'>
                                <Icon type="heart-o" style={{fontSize: '1.4em'}}/>
                            </Popover>
                        </Menu.Item>
                        <Menu.Item key="3">
                            <Link to='/page/user'>
                                <Icon type="user" style={{fontSize: '1.4em'}}/>
                            </Link>
                        </Menu.Item>
                    </Menu>
                </Header>
            </div>
        );
    }
}

export default Headerdemo;