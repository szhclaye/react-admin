/**
 * Created by 叶子 on 2017/8/13.
 */
import React, { Component } from 'react';
// import { Router, Route, hashHistory, IndexRedirect } from 'react-router';
import { Route, Redirect, Switch } from 'react-router-dom';
import BasicForm from '../components/forms/BasicForm';
import BasicTable from '../components/tables/BasicTables';
import AdvancedTable from '../components/tables/AdvancedTables';
import AsynchronousTable from '../components/tables/AsynchronousTable';
import Echarts from '../components/charts/Echarts';
import Recharts from '../components/charts/Recharts';
import Icons from '../components/manager/Icons';
import Spins from '../components/manager/Spins';
import Modals from '../components/manager/Modals';
import Notifications from '../components/manager/Notifications';
import Tabs from '../components/manager/Tabs';
import Banners from '../components/manager/banners';
import Dashboard from '../components/dashboard/Dashboard';
import Gallery from '../components/manager/Gallery';
import BasicAnimations from '../components/animation/BasicAnimations';
import ExampleAnimations from '../components/animation/ExampleAnimations';
import AuthBasic from '../components/auth/Basic';
import RouterEnter from '../components/auth/RouterEnter';
import Wysiwyg from 'bundle-loader?lazy!../components/manager/Wysiwyg';  // 按需加载富文本配置
import Bundle from '../components/widget/Bundle';
import Cssmodule from '../components/cssmodule';
import Mapmanager from '../components/manager/map';

const WysiwygBundle = (props) => (
    <Bundle load={Wysiwyg}>
        {(Component) => <Component {...props} />}
    </Bundle>
);

export default class CRouter extends Component {
    reqmanagerreAuth = (permission, component) => {
        const { auth } = this.props;
        const { permissions } = auth.data;
        // const { auth } = store.getState().httpData;
        if (!permissions || !permissions.includes(permission)) return <Redirect to={'404'} />;
        return component;
    };
    render() {
        return (
            <Switch>
                <Route exact path="/app/dashboard/index" component={Dashboard} />
                <Route exact path="/app/form/basicForm" component={BasicForm} />
                <Route exact path="/app/table/basicTable" component={BasicTable} />
                <Route exact path="/app/table/advancedTable" component={AdvancedTable} />
                <Route exact path="/app/table/asynchronousTable" component={AsynchronousTable} />
                <Route exact path="/app/chart/echarts" component={Echarts} />
                <Route exact path="/app/chart/recharts" component={Recharts} />
                <Route exact path="/app/manager/icons" component={Icons} />
                <Route exact path="/app/manager/spins" component={Spins} />
                <Route exact path="/app/manager/modals" component={Modals} />
                <Route exact path="/app/manager/notifications" component={Notifications} />
                <Route exact path="/app/manager/tabs" component={Tabs} />
                <Route exact path="/app/manager/banners" component={Banners} />
                <Route exact path="/app/manager/wysiwyg" component={WysiwygBundle} />
                <Route exact path="/app/manager/gallery" component={Gallery} />
                <Route exact path="/app/manager/map" component={Mapmanager} />

                <Route exact path="/app/animation/basicAnimations" component={BasicAnimations} />
                <Route exact path="/app/animation/exampleAnimations" component={ExampleAnimations} />

                <Route exact path="/app/auth/basic" component={AuthBasic} />
                <Route exact path="/app/auth/routerEnter" component={(props) => this.reqmanagerreAuth('auth/testPage', <RouterEnter {...props} />)} />

                <Route exact path="/app/cssModule" component={Cssmodule} />

                <Route render={() => <Redirect to="/404" />} />
            </Switch>
        )
    }
}