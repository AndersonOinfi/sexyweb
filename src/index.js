import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Redirect, Link, Switch} from 'react-router-dom'

import Login from './login'
import User from './User/User'
import * as Messager from './Components/Messager'
import Headerdemo from './Headerdemo/Headerdemo'
import UserHeader from './User/Userheader'
import Userfoot from './User/Userfoot'
import Main from './MainMessage/Main'

import registerServiceWorker from './registerServiceWorker';

import './index.css';


class Index extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Route path=''>
                    <div id='page'>
                        <Headerdemo/>
                        <Route path='/' component={Login}/>
                        <Route path='/main' component={Main}/>
                        <Route path='/user' component={User}/>
                    </div>
                </Route>
            </BrowserRouter>
        )
    }
}

ReactDOM.render(<Index/>, document.getElementById('root'));

registerServiceWorker();