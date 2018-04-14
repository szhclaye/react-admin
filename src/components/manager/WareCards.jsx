/**
 * Created by hao.cheng on 2017/4/23.
 */
import React, { Component } from 'react';
import { Row, Col, Card, Input, Table, Button } from 'antd';
import BreadcrumbCustom from '../BreadcrumbCustom';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

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

const data = [
    {
        key: '1',
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
    },
    {
        key: '2',
        name: 'Jim Green',
        age: 42,
        address: 'London No. 1 Lake Park',
    },
    {
        key: '3',
        name: 'Joe Black',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
    },
    {
        key: '4',
        name: 'Jim Red',
        age: 32,
        address: 'London No. 2 Lake Park',
    },
];
class WareCards extends Component {
    state = { loading: false };
    toggle = value => {
        this.setState({ loading: value });
    };
    nprogressStart = () => {
        NProgress.start();
    };
    nprogressDone = () => {
        NProgress.done();
    };
    onChange = (pagination, filters, sorter) => {
        console.log('params', pagination, filters, sorter);
    };
    render() {
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
                    <Col className="gutter-row" md={12}>
                        <div className="gutter-box">
                            <Card bordered={false}>
                                <Table
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
