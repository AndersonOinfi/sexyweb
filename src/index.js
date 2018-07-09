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


class Index extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path='/login' component={Login}/>
                    <Route path='/signup' component={Signup}/>
                    <Route path='/page' component={
                        <div id='head'>
                            <Headerdemo/>
                            <Messager.Messager/>
                        </div>
                    }>
                        <Switch>
                            <Route path='/main' exact component={Main}/>
                            <Route path='/explore' component={Explore}/>
                            <Route path='/user' component={User}/>
                        </Switch>
                    </Route>
                </Switch>
            </BrowserRouter>
        )
    }
}

ReactDOM.render(<Index/>, document.getElementById('root'));

registerServiceWorker();