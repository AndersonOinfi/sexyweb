import React from 'react'

import notification from 'antd/lib/notification'
import 'antd/lib/notification/style/css'

import AlbumIcon from '../../public/AlbumIcon.png'

notification.config({
    duration: 2.5,
    // todo
});

export function tips(msg, icon, description) {
    return notification.open({
        classname: 'antd/lib/notification/style/css',
        icon: icon,
        message: msg,
        description: description
    })
}

export class Messager extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            api: 'http://localhost:8080/user/messages',
            interval: 5000,
            messages: null,
        };
        this.get.bind(this);
        this.show.bind(this);
    }

    componentDidMount() {
        this.timer=setInterval(()=> this.get(),this.state.interval);
    }

    componentWillUnmount() {
        clearInterval(this.timer)
    }

    componentDidUpdate() {
        this.show()
    }

    get() {
        fetch(this.state.api, {
            credentials: "include"
        })
            .then(response => response.json())
            .then((responseJson) => {
                this.setState({
                    messages: responseJson
                })
            })
            .catch((error) => {
                console.log(error)
            })
    }


    show() {
        if(this.state.messages.length===0)
            return;
        tips('A Message!',
            <img src={'http://localhost:8080/images/'+this.state.messages[0].user.avatar}/>,
            this.state.messages[0].info+" "+this.state.messages[0].type)
    }

    render() {
        return(
            <div>A Little Happy Messager!</div>
        )
    }
}