import React, { Component } from 'react';

import { Card, Col, Row } from 'antd';
import 'antd/dist/antd.css';

import '../index.css'


const { Meta } = Card;

class Whitealbum2 extends Component {
    constructor(props) {
        super(props);
        this.state={
            albums: []
        };
        this.update.bind(this)
    }

    update(props) {
        this.setState({
            albums: props.albums
        })
    }

    componentWillReceiveProps(props) {
        this.update(props)
    }

    render() {
        return (
            <div style={{width:'100%', background: '#fafafa'}}>
                <Row gutter={32}>
                    <Col span={8} >
                <Card
                    hoverable
                    style={{ width: 250 }}
                    cover={<img  alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                >
                    <Meta
                        title="相册1"
                    />
                </Card>
                    </Col>
                    <Col span={8}>
                        <Card
                            hoverable
                            style={{ width: 250 }}
                            cover={<img  alt="example" src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png" />}
                        >
                            <Meta
                                title="相册2"
                            />
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card
                            hoverable
                            style={{ width: 250 }}
                            cover={<img  alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />}
                        >
                            <Meta
                                title="相册3"
                            />
                        </Card>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Whitealbum2;