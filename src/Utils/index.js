import React from 'react';
import ReactDOM from 'react-dom';
import Headerdemo from './Headerdemo/Headerdemo'
import User from './User/User'
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import WrappedNormalLoginForm from './User/login'
import WrappedNormalSignupForm from './User/signup'
class App extends React.Component{
    constructor(){
        super();
        this.state={
            mode:'logging',
            test:true
        }
    }

    onLogin(){
        this.setState({mode:'logged'});
    }
    onSignup(){
        this.setState({mode:'signing'});
    }
    onSigned(){
        this.setState({mode:'logging'});
    }
    render(){
        if(this.state.mode=='logged'){
            return (
                <User/>
            );
        }else if(this.state.mode=='logging'){
            return(
                < WrappedNormalLoginForm onLogin={this.onLogin.bind(this)} onSignup={this.onSignup.bind(this)}/>
            );
        }else if(this.state.mode=='signing'){
            return(
               <  WrappedNormalSignupForm onSignup={this.onSignup.bind(this)} onSigned={this.onSigned.bind(this)} />
            );
        }

    }
}

//ReactDOM.render(<User />, document.getElementById('root'));
ReactDOM.render(<App/>, document.getElementById('root'));
registerServiceWorker();

