import React, {Suspense } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import Store from "store";
import {routes} from "./routes"
import PrivateRoute from './private-route';
import PublicRoute from './public-route';

const Routes = (props) => {

  return (
    <Provider store={Store}>
      <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          {routes.map((info)=>{
            return info.restricted ?  <PrivateRoute restricted={info.restricted} component={info.component} path={info.path} exact />
            : <PublicRoute restricted={info.restricted} component={info.component} path={info.path} exact />
            
          })}
        </Switch>
        </Suspense>
      </Router>
    </Provider>
  );
};

export default Routes;
