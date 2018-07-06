import React from 'react'


export default class Login extends React.Component {
    constructor(props) {
        super(props);

        fetch("http://localhost:8080/user/account/login?username=jack&password=123", {
            credentials: "include"
        })
            .then(response => response.text())
            .then((responseText) => {
                console.log(responseText)
            });
    }

    render() {
        return (
            <div></div>
        )
    }
}