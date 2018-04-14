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
import StoreRoom from '../components/manager/StoreRoom';
import Modals from '../components/manager/Modals';

import Tabs from '../components/manager/Tabs';

import Dashboard from '../components/dashboard/Dashboard';
import BasicAnimations from '../components/animation/BasicAnimations';
import ExampleAnimations from '../components/animation/ExampleAnimations';
import AuthBasic from '../components/auth/Basic';
import RouterEnter from '../components/auth/RouterEnter';
import Cssmodule from '../components/cssmodule';



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
            

                <Route exact path="/app/manager/storeroom" component={StoreRoom} />
                <Route exact path="/app/manager/modals" component={Modals} />
                <Route exact path="/app/manager/tabs" component={Tabs} />
                
                
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