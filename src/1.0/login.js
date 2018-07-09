import React, { Component } from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import './login.css'
import $ from "jquery";
const FormItem = Form.Item;


class NormalLoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {userName: "", password: "", remember: true};
        this.handleSubmit = this.handleSubmit.bind(this);
    }
  //  componentDidMount(){
    // }
    handleSubmit = (e) => {
        e.preventDefault();
        var func = this.props.onLogin;
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);

                var username = document.loginform.username.value;
                var password = document.loginform.password.value;
                let formData = new FormData();
                formData.append('username',username);
                formData.append('password',password);
                fetch("http://localhost:8080/user/account/login", {
                    method:'POST',
                    credentials: "include",
                    body:formData,
                })
                    .then(response => response.text())
                    .then((responseText) => {
                        this.props.onLogin();
                    });
            }
        });
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div className={"div"}>
                <h3 className="title">CoolMe Album</h3>
            <Form onSubmit={this.handleSubmit} className="login-form" name="loginform">
                <FormItem>
                    {getFieldDecorator('userName', {
                        rules: [{ required: true, message: 'Please input your username!' }],
                    })(
                        <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" name="username" id="loginusername"/>
                    )}
                </FormItem>
                <FormItem>
                    {getFieldDecorator('password', {
                        rules: [{ required: true, message: 'Please input your Password!' }],
                    })(
                        <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" name="password" id="loginpassword" />
                    )}
                </FormItem>
                <br/>
                <FormItem>
                    {getFieldDecorator('remember', {
                        valuePropName: 'checked',
                        initialValue: true,
                    })(
                        <Checkbox>Remember me</Checkbox>
                    )}
                    <a className="login-form-forgot" href="https://www.baidu.com" >Solve all your problem.</a>
                    <br/>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        Log in
                    </Button>
                    <br/>
                    Or <a href='#' onClick={()=>this.props.onSignup()}>register now!</a>
                </FormItem>
            </Form>

            </div>
        );
    }
}


const WrappedNormalLoginForm = Form.create()(NormalLoginForm);

 export default WrappedNormalLoginForm;