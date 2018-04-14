/**
 * Created by hao.cheng on 2017/4/23.
 */
import React from 'react';
import { Row, Col, Card, Input, Spin, Alert, Switch, Button } from 'antd';
import BreadcrumbCustom from '../BreadcrumbCustom';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

const Search = Input.Search;
class WareCards extends React.Component {
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
    render() {
        const container = (
            <Alert
                message="Alert message title"
                description="Further details about the context of this alert."
                type="info"
            />
        );
        return (
            <div className="gutter-example button-demo">
                <BreadcrumbCustom first="资产管理" second="资产卡片" />
                <Row gutter={16}>
                    <div className="gutter-box">
                        <Card bordered={false}>
                            <Col className="gutter-row" md={12}>
                                <Search
                                    placeholder="input search text"
                                    onSearch={value => console.log(value)}
                                    enterButton
                                />
                            </Col>
                            <Col className="gutter-row warecard-buttons" md={12}>
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
                                <Spin tip="Loading...">
                                    <Alert
                                        message="Alert message title"
                                        description="Further details about the context of this alert."
                                        type="info"
                                    />
                                </Spin>
                            </Card>
                        </div>
                    </Col>

                    <Col className="gutter-row" md={12}>
                        <div className="gutter-box">
                            <Card bordered={false}>
                                <Spin spinning={this.state.loading}>
                                    {container}
                                </Spin>
                                Loading state：<Switch
                                    checked={this.state.loading}
                                    onChange={this.toggle}
                                              />
                            </Card>
                        </div>
                    </Col>
                    <Col className="gutter-row" md={12}>
                        <div className="gutter-box">
                            <Card bordered={false}>
                                <h4>顶部进度条</h4>
                                <p>
                                    <Button
                                        icon="caret-right"
                                        onClick={this.nprogressStart}
                                    />
                                    <span> NProgress.start() — 显示进度条</span>
                                </p>
                                <p style={{ marginTop: 20 }}>
                                    <Button
                                        icon="caret-right"
                                        onClick={this.nprogressDone}
                                    />
                                    <span> NProgress.done() — 进度条完成</span>
                                </p>
                            </Card>
                        </div>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default WareCards;
