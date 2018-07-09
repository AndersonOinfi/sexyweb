import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Redirect, Link, Switch} from 'react-router-dom'

import Login from './login'
import Signup from './signup'
import User from './User/User'
import * as Messager from './Components/Messager'
import Headerdemo from './Headerdemo/Headerdemo'
import UserHeader from './User/Userheader'
import Userfoot from './User/Userfoot'
import Main from './MainMessage/Main'
import Explore from './MainMessage/Explore'

import registerServiceWorker from './registerServiceWorker';

import './index.css';


const PrimaryLayout=()=>(
    <div>
        <Headerdemo/>
        <Messager.Messager/>
        <Switch>
            <Route path='/page/main' component={Main}/>
            <Route path='/page/explore' component={Explore}/>
            <Route path='/page/user' component={User}/>
        </Switch>
    </div>
);

class Index extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path='/login' component={Login}/>
                    <Route path='/signup' component={Signup}/>
                    <Route path='/page' component={PrimaryLayout}/>
                </Switch>
            </BrowserRouter>
        )
    }
}

ReactDOM.render(<Index/>, document.getElementById('root'));

registerServiceWorker();