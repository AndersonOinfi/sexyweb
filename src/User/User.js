import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import React, { Component } from 'react';
import { Divider } from 'antd';
import { Input } from 'antd';
import 'antd/dist/antd.css';
import Headerdemo from './Headerdemo';
import Userheader from './Userheader';
import Userfoot from './Userfoot';

import * as Messager from '../components/Messager'

const { Header, Content, Footer, Sider } = Layout;
const Search = Input.Search;

class User extends Component {
    constructor(props) {
        super(props);

        fetch("http://localhost:8080/user/account/login?username=jack&password=123", {
            credentials: "include"
        })
            .then(response => response.text())
            .then((responseText) => {
                console.log(responseText)
            })
    }

    render() {
        return (
            <div>
                <Messager.Messager/>
                <Headerdemo/>
                <Userheader/>
                <Userfoot/>
            </div>
        );
    }
}

export default User;