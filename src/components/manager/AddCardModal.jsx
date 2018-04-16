import React, { Component } from 'react';
import { Input, Button, Modal, Row, Col, Form } from 'antd';

const FormItem = Form.Item;
class AddCardModal extends Component {
    state = {
        visibleOfAddCard: false,
    };
    showAddCardModal = () => {
        /** toggle addCard Modal */
        this.setState({
            visibleOfAddCard: true,
        });
    };
    handleOkOfAddCard = e => {
        this.setState({
            visibleOfAddCard: false,
        });
    };
    handleCancelOfAddCard = e => {
        this.setState({
            visibleOfAddCard: false,
        });
    }; /** toggle addCard Modal */
    render() {
        const { visible } = this.props;
        const formItemLayout = {
            labelCol: { span: 6 },
            wrapperCol: { span: 14 },
        };
        return (
            <div>
                <Button type="primary" onClick={this.showAddCardModal}>
                    新增
                </Button>
                <Modal
                    title="新增卡片"
                    width="800px"
                    visible={this.state.visibleOfAddCard || visible}
                    onOk={this.handleOkOfAddCard}
                    onCancel={this.handleCancelOfAddCard}
                >
                    <Form >
                        <Row gutter={16} className="add-new-modal-row">
                            <Col md={8} className="add-new-modal-col">
                                <FormItem
                                    {...formItemLayout}
                                    label="资产条码"
                                >
                                    <Input size="small" style={{ width: '65%' }} />
                                </FormItem>
                            </Col>
                            <Col md={8} className="add-new-modal">
                                <FormItem
                                    {...formItemLayout}
                                    label="Plain Text"
                                >
                                    <span className="ant-form-text">China</span>
                                </FormItem>
                            </Col>
                            <Col md={8} className="add-new-modal">
                                <FormItem
                                    {...formItemLayout}
                                    label="Plain Text"
                                >
                                    <span className="ant-form-text">China</span>
                                </FormItem>
                            </Col>
                        </Row>
                    </Form>

                    <Row gutter={16}>
                        <Col md={8} className="add-new-modal">
                            <label htmlFor="">资产条码</label>
                            <Input size="small" style={{ width: '65%' }} />
                        </Col>
                        <Col md={8} className="add-new-modal">
                            <label htmlFor="">资产类别</label>
                            <Input size="small" style={{ width: '65%' }} />
                        </Col>
                        <Col md={8} className="add-new-modal">
                            <label htmlFor="">资产名称</label>
                            <Input size="small" style={{ width: '65%' }} />
                        </Col>
                    </Row>
                    <Row gutter={16}>
                        <Col md={8} className="add-new-modal">
                            <label htmlFor="">规格型号</label>
                            <Input size="small" style={{ width: '65%' }} />
                        </Col>
                        <Col md={8} className="add-new-modal">
                            <label htmlFor="">SN号</label>
                            <Input size="small" style={{ width: '65%' }} />
                        </Col>
                        <Col md={8} className="add-new-modal">
                            <label htmlFor="">计量单位</label>
                            <Input size="small" style={{ width: '65%' }} />
                        </Col>
                    </Row>
                </Modal>
            </div>
        );
    }
}

export default AddCardModal;
