/**
 * Created by hao.cheng on 2017/4/23.
 */
import React, { Component } from 'react';
import { Row, Col, Card, Input, Table, Button } from 'antd';
import BreadcrumbCustom from '../BreadcrumbCustom';

const Search = Input.Search;
const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
        filters: [
            {
                text: 'Joe',
                value: 'Joe',
            },
            {
                text: 'Jim',
                value: 'Jim',
            },
            {
                text: 'Submenu',
                value: 'Submenu',
                children: [
                    {
                        text: 'Green',
                        value: 'Green',
                    },
                    {
                        text: 'Black',
                        value: 'Black',
                    },
                ],
            },
        ],
        // specify the condition of filtering result
        // here is that finding the name started with `value`
        onFilter: (value, record) => record.name.indexOf(value) === 0,
        sorter: (a, b) => a.name.length - b.name.length,
    },
    {
        title: 'Age',
        dataIndex: 'age',
        defaultSortOrder: 'descend',
        sorter: (a, b) => a.age - b.age,
    },
    {
        title: 'Address',
        dataIndex: 'address',
        filters: [
            {
                text: 'London',
                value: 'London',
            },
            {
                text: 'New York',
                value: 'New York',
            },
        ],
        filterMultiple: false,
        onFilter: (value, record) => record.address.indexOf(value) === 0,
        sorter: (a, b) => a.address.length - b.address.length,
    },
];

const data = [];
for(let i=1;i<200;i++){
    data.push({
        key: i,
        name: `John Brown-> ${i}`,
        age: 10+i,
        address: 'New York No. 1 Lake Park',
    });
}
   
class WareCards extends Component {
    state = {
        selectedRowKeys: [],    //选定行数组
    };
    onSelectChange = (selectedRowKeys) => {
        console.log('selectedRowKeys changed: ', selectedRowKeys);
        this.setState({ selectedRowKeys });     //更新状态
    };

    onChange = (pagination, filters, sorter) => {
        console.log('params', pagination, filters, sorter);
    };
    render() {
        const { selectedRowKeys } = this.state;
        const rowSelection = {
            selectedRowKeys,
            onChange: this.onSelectChange,
        };
        return (
            <div className="gutter-example button-demo">
                <BreadcrumbCustom first="资产管理" second="资产卡片" />
                <Row gutter={16}>
                    <div className="gutter-box">
                        <Card bordered={false}>
                            <Col className="gutter-row" offset={2} md={12}>
                                <Search
                                    placeholder="input search text"
                                    onSearch={value => console.log(value)}
                                    enterButton
                                />
                            </Col>
                            <Col
                                className="gutter-row warecard-buttons"
                                offset={1}
                                md={6}
                            >
                                <Button type="primary">新增</Button>
                                <Button type="primary">删除</Button>
                                <Button type="primary">修改</Button>
                            </Col>
                        </Card>
                    </div>
                </Row>
                <Row gutter={16}>
                    <Col className="gutter-row" md={24}>
                        <div className="gutter-box">
                            <Card bordered={false}>
                                <Table
                                    rowSelection={rowSelection}
                                    columns={columns}
                                    dataSource={data}
                                    onChange={this.onChange}
                                />
                            </Card>
                        </div>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default WareCards;
