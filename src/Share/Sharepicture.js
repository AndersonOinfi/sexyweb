import React, { Component } from 'react';

import {Form, Upload, Icon,} from 'antd';
import 'antd/dist/antd.css';

import '../index.css'


const FormItem = Form.Item;

class Sharepicture extends Component {
    state = {
        classname: 'sharebox',
        display1:'',
        display2:'none',
        imageUrl:"https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
        file:'',
    }

    loaded(){
        this.setState({display1:'none'});
        this.setState({display2:''});
    }

    handleChange=(info)=>{
          this.setState({
              imageUrl: info.url ,
          });
        }

    canceled(){
        this.setState({display2:'none'});
        this.setState({display1:''});
    }

    shareActiveIn(){
        this.setState({classname:'sharebox_active'})}

    shareActiveOut(){
        this.setState({classname:'sharebox'})}

    normFile = (e) => {
        console.log('Upload event:', e);
        if (Array.isArray(e)) {
            return e;
        }
        return e && e.fileList;
    }
    render() {
        const {getFieldDecorator} = this.props.form;
        const formItemLayout = {
            labelCol: {span: 6},
            wrapperCol: {span: 14},
        };
        return (
        <FormItem
                {...formItemLayout}
            >
                <div className="dropbox" style={{width:400}}>
                    {getFieldDecorator('dragger', {
                        valuePropName: 'fileList',
                        getValueFromEvent: this.normFile,
                    })(
                        <Upload.Dragger name="files" action="/upload.do" onChange={this.handleChange}>
                            <div className={this.state.classname} onClick={this.loaded.bind(this)} onMouseMove={this.shareActiveIn.bind(this)} onMouseOut={this.shareActiveOut.bind(this)} style={{display:this.state.display1}}>
                                <Icon type="bulb"  style={{ fontSize:'12em'}} />
                                <div className="ant-upload-text" style={{ fontSize:'3em',marginTop:20}}>Share Pictures</div>
                            </div>
                            <div>
                                <img  onClick={this.canceled.bind(this)} style={{width:400,display:this.state.display2}} src={this.state.imageUrl} />
                            </div>
                        </Upload.Dragger>
                    )}
                </div>
            </FormItem>
        );
    }
    }

const Sharepictureform = Form.create()(Sharepicture);
export default Sharepictureform;