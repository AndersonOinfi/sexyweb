import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Redirect, Link, Switch} from 'react-router-dom'

import User from './User/User'
import Login from './login'

import registerServiceWorker from './registerServiceWorker';

import './index.css';

class Index extends React.Component {
    render() {
        return(
            <BrowserRouter>
                <div>
                    <Switch>
                        <Route path='/' component={Login}/>
                        <Route path='/user' compoenent={User}/>
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }
}

ReactDOM.render(<Index/>, document.getElementById('root'));

registerServiceWorker();