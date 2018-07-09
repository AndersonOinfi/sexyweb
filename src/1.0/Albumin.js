import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import React, { Component } from 'react';
import { Tabs} from 'antd';
import { Upload, Modal } from 'antd';
import { Card } from 'antd';
import 'antd/dist/antd.css';
import './Headerdemo.css';
import { Col, Row } from 'antd';
import Friendslist from "./Friendslist";
const { Header, Content, Footer, Sider } = Layout;
const TabPane = Tabs.TabPane;
const { Meta } = Card;
const str="http://localhost:8080/images/"


function Rowthree(props) {
    return (
    <Row gutter={16}>
        <Col span={8} >
            <Card
                hoverable
                style={{ width: 250 }}
                cover={<img  alt="example" src={str+props.data[props.id].source}/>}

            >
                <Meta
                    title={props.data[props.id].description}
                />
            </Card>
        </Col>
        <Col span={8}>
            <Card
                hoverable
                style={{ width: 250 }}
                cover={<img  alt="example" src={str+props.data[props.id + 1].source} />}
            >
                <Meta
                    title={props.data[props.id + 1].description}
                />
            </Card>
        </Col>
        <Col span={8}>
            <Card
                hoverable
                style={{ width: 250 }}
                cover={<img  alt="example" src={str+props.data[props.id + 2].source} />}
            >
                <Meta
                    title={props.data[props.id + 2].description}
                />
            </Card>
        </Col>
    </Row>
    )
}
function Rowtwo(props) {
    return (
    <Row gutter={16}>
        <Col span={8} >
            <Card
                hoverable
                style={{ width: 250 }}
                cover={<img  alt="example" src={str+props.data[props.id].source}/>}

            >
                <Meta
                    title={props.data[props.id].description}
                />
            </Card>
        </Col>
        <Col span={8}>
            <Card
                hoverable
                style={{ width: 250 }}
                cover={<img  alt="example" src={str+props.data[props.id + 1].source} />}
            >
                <Meta
                    title={props.data[props.id + 1].description}
                />
            </Card>
        </Col>
    </Row>
    )
}
function Rowone(props) {
    return  (
    <Row gutter={16}>
        <Col span={8} >
            <Card
                hoverable
                style={{ width: 250 }}
                cover={<img  alt="example" src={str+props.data[props.id].source}/>}

            >
                <Meta
                    title={props.data[props.id].description}
                />
            </Card>
        </Col>
    </Row>
    )
}
class Albumin extends Component {
    constructor(props){
        super(props);
        this.state={
            user:[],
            data:new Array(),
            item:[],
            ok:false
            //state可按需求进行更改
        }


    }
    componentWillReceiveProps(props) {
            var user = props.user;
            var album=[];
            if(user!=null){
            var album = user.albums[this.props.albumid];
            this.setState({data:album.eleList});
            }

    }

    render() {
        var rowlist=new Array();
        var i=0;
        var rowindex=0;
        var last;
        var length=this.state.data.length;
        while(i<length)
        {
            last=length-i;
            if(last>=3)
            {rowlist[rowindex]=<Rowthree key={rowindex} id={i} data={this.state.data}/>;i+=3;}
            else if(last==2)
            {rowlist[rowindex]=<Rowtwo key={rowindex} id={i} data={this.state.data}/>;i+=2;}
            else if(last==1)
            {rowlist[rowindex]=<Rowone key={rowindex} id={i} data={this.state.data}/>;i+=1;}
            rowindex+=1;
        }
        return (

            <div>
                {rowlist}
            </div>
        );
    }
}


export default Albumin;