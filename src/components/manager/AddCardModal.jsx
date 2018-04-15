import React, { Component } from 'react';
import { Button, Modal } from 'antd';

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
        console.log(e);
        this.setState({
            visibleOfAddCard: false,
        });
    };
    handleCancelOfAddCard = e => {
        console.log(e);
        this.setState({
            visibleOfAddCard: false,
        });
    }; /** toggle addCard Modal */
    render() {
        const { visible } = this.props;
        return (
            <div>
                <Button type="primary" onClick={this.showAddCardModal}>
                    新增
                </Button>
                <Modal
                    title="新增卡片"
                    visible={this.state.visibleOfAddCard || visible}
                    onOk={this.handleOkOfAddCard}
                    onCancel={this.handleCancelOfAddCard}
                >
                    <p>test AddCardModal</p>
                    <p>test AddCardModal</p>
                    <p>test AddCardModal</p>
                </Modal>
            </div>
        );
    }
}

export default AddCardModal;
