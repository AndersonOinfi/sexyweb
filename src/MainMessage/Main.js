import React from 'react'

import {Card, Row, Col, Icon, Input} from 'antd'
// import 'antd/dist/antd.css'


export default class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            api: 'http://localhost:8080/user/main',
            likeApi: 'http://localhost:8080/user/like',
            unlikeApi: 'http://localhost:8080/user/like/cancel',
            commentApi: 'http://localhost:8080/user/comment',
            getCommentsApi: 'http://localhost:8080/user/elecomments',
            data: [],
        };
        this.update.bind(this);
        this.get.bind(this);
        this.like.bind(this);
        this.comment.bind(this);
        this.showComments.bind(this);
        this.RenderComments.bind(this);
    }

    componentDidMount() {
        this.get()
    }

    update(props) {

    }

    get() {
        fetch(this.state.api,{
            credentials: "include"
        })
            .then(response=>response.json())
            .then((responseJson)=>{
                let messages=responseJson;
                if(messages!=null&&messages.length!==0) {
                    let data = this.state.data;
                    let key=0;
                    for (let message of messages) {
                        data.push({
                            ele: message.ele,
                            user: message.user,
                            like: 'heart-o',
                            showComments: false,
                            comment: '',
                            key: key++,
                        });
                    }
                    this.setState({
                        data: data
                    })
                }
            })
    }

    like(key) {
        let data=this.state.data;
        let type=data[key].like;
        let api='';
        if(type==='heart-o') {
            data[key].like='heart';
            api=this.state.likeApi;
        }
        else if(type==='heart') {
            data[key].like='heart-o';
            api=this.state.unlikeApi;
        }
        fetch(api+'?eleid='+data[key].ele.eleid,{
            credentials: "include"
        })
            .then(response=>response.json())
            .then((responseJson)=>{
                if(responseJson>0)
                    this.setState({
                        data: data
                    })
            })
    }

    showComments(key) {
        let data=this.state.data;
        data[key].showComments=data[key].showComments !== true;
        fetch(this.state.getCommentsApi+'?eleid='+data[key].ele.eleid,{
            credentials: "include"
        })
            .then(response=>response.json())
            .then((responseJson)=>{
                data[key].ele.comments=responseJson;
                this.setState({
                    data: data
                })
            })
    }

    c=(comments)=>(
        <Card.Grid
            style={{
                width: '100%',
                textAlign: 'left'
            }}
        >
            {comments}
        </Card.Grid>
    );

    comment(key,e) {
        e.preventDefault();
        let value=e.target.value;
        let data=this.state.data;
        fetch(this.state.commentApi+
            '?eleid='+data[key].ele.eleid+
            '&comments='+value+
            '&tarid=1',{
            credentials: "include"
        })
            .then(reponse=>reponse.json())
            .then((responseJson)=>{
                if(responseJson>0) {
                    data[key].ele.comments.push(
                        this.c(value)
                    );
                    data[key].comment='';
                    this.setState({
                        data: data
                    })
                }
            })
    }

    RenderComments(key) {
        let cs=[];
        let data=this.state.data;
        for (let comment in data[key].ele.comments) {
            cs.push(
                this.c(comment.comments)
            )
        }
        cs.push(
            <Input.TextArea
                value={data[key].comment}
                placeholder='your comments'
                autosize={{minRows: 1,maxRows: 4}}
                onChange={(e) => {
                    e.preventDefault();
                    let data = this.state.data;
                    data[key].comment = e.target.value;
                    this.setState({
                            data: data
                        })}}
                onPressEnter={(e)=>{this.comment(key,e)}}
            />
        );
        return cs;
    }

    avatarPrepath='http://localhost:8080/images/';

    render() {
        let RenderComments=this.RenderComments.bind(this);
        let items = [];
        for (let data of this.state.data) {
            items.push(
                <Row>
                    <Col offset={3} span={12}>
                        <Card
                            cover={<img src={this.avatarPrepath + data.ele.source}/>}
                            hoverable={true}
                            //loading={true}
                            actions={[
                                <Icon type={data.like} onClick={this.like.bind(this,data.key)}/>,
                                <Icon type="message" style={{}} onClick={this.showComments.bind(this,data.key)}/>,
                                <Icon type="ellipsis" />,
                            ]}
                        >
                            {data.ele.description}
                            <Card.Meta
                                avatar={<img src={this.avatarPrepath + data.user.avatar}/>}
                                title={data.user.username}
                            />
                            <div
                                style={data.showComments===true?{display: 'none'}:null}
                            >
                                {RenderComments(data.key)}
                            </div>
                        </Card>
                    </Col>
                </Row>
            )
        }
        return (
            <div>
                {items}
            </div>
        )
    }
}