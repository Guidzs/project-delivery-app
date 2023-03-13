import React from 'react';
import { Route, Switch } from 'react-router';
import Page404 from '../pages/Page404';
import AdminManage from '../pages/AdminManage';

function AdminSwitch() {
  return (
    <div className="App">
      <Switch>
        <Route path="/admin/manage" component={ AdminManage } />
        <Route component={ Page404 } />
      </Switch>
    </div>
  );
}

export default AdminSwitch;
