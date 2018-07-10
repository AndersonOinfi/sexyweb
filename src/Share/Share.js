import React, { Component } from 'react';

import { Tooltip,Upload, Icon, Modal,Tabs,Input,Row, Col,Select,Button} from 'antd';

import 'antd/dist/antd.css';
import '../index.css'

import Sharepictureform from './Sharepicture';
import Headerdemo from '../Headerdemo/Headerdemo';
import Userfoot from '../User/Userfoot';


const TabPane = Tabs.TabPane;
const { TextArea } = Input;
const Option = Select.Option;
const text = <span>新建相册</span>;

class Share extends Component {
    state = {
        visible: false,
        confirmLoading: false,
        previewVisible: false,
        previewImage: '',
        type:'disabled',
        size: 'default',
        uploadiconLoading_share: false,
        canceliconLoading_share: false,
        uploadiconLoading_upload: false,
        canceliconLoading_upload: false,
        fileList: [{
            uid: -1,
            name: 'xxx.png',
            status: 'done',
            url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
        }],
    };


    uploadIconLoading_share = () => {
        this.setState({ uploadiconLoading_share: true });
    };

    uploadIconLoading_upload = () => {
        this.setState({ uploadiconLoading_upload: true });
    };

    cancelIconLoading_share = () => {
        this.setState({ canceliconLoading_share: true });
    };

    cancelIconLoading_upload = () => {
        this.setState({ canceliconLoading_upload: true });
    };

    showModal = () => {
        this.setState({
            visible: true,
        });
    };

    handleOk = () => {
        this.setState({
            ModalText: 'The modal will be closed after two seconds',
            confirmLoading: true,
        });
        setTimeout(() => {
            this.setState({
                visible: false,
                confirmLoading: false,
            });
        }, 2000);
    };

    handleModelCancel = () => {
        console.log('Clicked cancel button');
        this.setState({
            visible: false,
        });
    };

    handleChange_select(value) {
        console.log(`selected ${value}`);
    }

    handleCancel = () => this.setState({ previewVisible: false });

    handlePreview = (file) => {
        this.setState({
            previewImage: file.url || file.thumbUrl,
            previewVisible: true,
        });
    };

    handleChange = ({ fileList }) => this.setState({ fileList });
    render() {
        const { visible, confirmLoading, } = this.state;
        const size = this.state.size;
        const { previewVisible, previewImage, fileList } = this.state;
        const uploadButton = (
            <div>
                <Icon type="plus" />
                <div className="ant-upload-text">Upload</div>
            </div>
        );
        return (
            <div style={{backgroundColor:'#fafafa'}}>
                <Tabs defaultActiveKey="1" size='large' style={{textAlign: 'center'}} >
                    <TabPane tab={<span><Icon type="camera" />分享此刻</span>} key="1">
                        <div style={{marginLeft:250,width:900}}>
                            <Row>
                                <Col span={12}>
                                    <Sharepictureform/>
                                </Col>
                                <Col span={12} style={{textAlign:'left'}}>
                                    <div style={{width:400,margin: 20}}>
                                        <TextArea rows={4}
                                                  placeholder="分享此刻的想法！"
                                                  size="large"
                                        style={{height:250,fontSize:'1.2em'}}/>
                                    </div>
                                    <div style={{width:400}}>
                                        <Row style={{paddingTop:5}}>
                                            <Col span={8}>
                                        <div style={{fontSize:'1.2em',paddingLeft:20,}}>上传相册至:</div>
                                            </Col>
                                            <Col span={8}>
                                        <Select defaultValue="相册1" style={{ width: 120 }} onChange={this.handleChange_select()}>
                                            <Option value="相册1">相册1</Option>
                                            <Option value="相册2">相册2</Option>
                                            <Option value="相册3">相册3</Option>
                                        </Select>
                                            </Col>
                                            <Col span={8}>
                                                <Tooltip placement="top" title={text}>
                                                    <Icon type="plus-circle" style={{fontSize:16,color:'#1088e9',paddingTop:8}} onClick={this.showModal}/>
                                                    <Modal title="新建相册"
                                                           visible={visible}
                                                           onOk={this.handleOk}
                                                           confirmLoading={confirmLoading}
                                                           onCancel={this.handleModelCancel}
                                                    >
                                                        <Input placeholder="请输入相册名称" />
                                                    </Modal>
                                                </Tooltip>
                                            </Col>
                                        </Row>
                                    </div>
                                    <div style={{margin:10,paddingLeft:70,paddingTop:20}}>
                                        <Row style={{width:300}}>
                                            <Col span={12}>
                                        <Button
                                        type="primary"
                                        icon="share-alt"
                                        size={size}
                                        loading={this.state.uploadiconLoading_share}
                                        onClick={this.uploadIconLoading_share}>Upload</Button>
                                            </Col>
                                            <Col span={12}>
                                        <Button
                                            type="danger"
                                            icon="pushpin-o"
                                            size={size}
                                            onClick={this.cancelIconLoading_share}>Cancle</Button>
                                            </Col>
                                        </Row>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </TabPane>
                    <TabPane tab={<span><Icon type="picture" />上传相册</span>} key="2">
                        <div  style={{marginLeft:250,width:900}}>
                            <Row>
                                <Col span={12}>
                        <div className="clearfix" style={{width:400,marginTop:20,borderRightWidth:1,borderTopWidth:0,borderLeftWidth:0,borderBottomWidth:0,borderStyle:'dashed',borderColor:'#1088e9'}}>
                            <Upload
                                action="//jsonplaceholder.typicode.com/posts/"
                                listType="picture-card"
                                onPreview={this.handlePreview}
                                onChange={this.handleChange}
                            >
                                {fileList.length >= 9 ? null : uploadButton}
                            </Upload>
                            <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
                                <img alt="example" style={{ width: '100%' }} src={previewImage} />
                            </Modal>
                        </div>
                                </Col>
                                <Col span={12}>
                                    <div style={{width:350,paddingTop:20}}>
                                        <Row style={{paddingTop:5}}>
                                            <Col span={12}>
                                                <div style={{fontSize:'1.2em',paddingLeft:20,}}>上传相册至:</div>
                                            </Col>
                                            <Col span={12}>
                                                <Row>
                                                    <Col span={12}>
                                                        <Select defaultValue="相册1" style={{ width: 120, }} onChange={this.handleChange_select()}>
                                                            <Option value="相册1">相册1</Option>
                                                            <Option value="相册2">相册2</Option>
                                                            <Option value="相册3">相册3</Option>
                                                        </Select>
                                                    </Col>
                                                    <Col span={12}>
                                                        <Tooltip placement="top" title={text}>
                                                            <Icon type="plus-circle" style={{fontSize:16,color:'#1088e9',paddingTop:8}} onClick={this.showModal}/>
                                                            <Modal title="新建相册"
                                                                   visible={visible}
                                                                   onOk={this.handleOk}
                                                                   confirmLoading={confirmLoading}
                                                                   onCancel={this.handleModelCancel}
                                                            >
                                                                <Input placeholder="请输入相册名称" />
                                                            </Modal>
                                                        </Tooltip>
                                                    </Col>
                                                </Row>
                                            </Col>
                                        </Row>
                                    </div>
                                    <div style={{margin:10,paddingLeft:30,paddingTop:20}}>
                                        <Row style={{width:300}}>
                                            <Col span={12}>
                                                <Button
                                                    type="primary"
                                                    icon="share-alt"
                                                    size={size}
                                                    loading={this.state.uploadiconLoading_upload}
                                                    onClick={this.uploadIconLoading_upload}>Upload</Button>
                                            </Col>
                                            <Col span={12}>
                                                <Button
                                                    type="danger"
                                                    icon="pushpin-o"
                                                    size={size}
                                                    onClick={this.cancelIconLoading_upload}>Cancle</Button>
                                            </Col>
                                        </Row>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </TabPane>
                </Tabs>
                <Userfoot/>
            </div>
        );
    }
}

export default Share;