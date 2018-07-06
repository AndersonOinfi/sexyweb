import React, { Component } from 'react';
import { Card } from 'antd';
import 'antd/dist/antd.css';
import '../index.css'
import { Col, Row } from 'antd';
const { Meta } = Card;

class Whitealbum2 extends Component {
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