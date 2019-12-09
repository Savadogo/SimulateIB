import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import {Provider} from 'react-redux';
import {store} from './redux/store';

import "assets/vendor/nucleo/css/nucleo.css";
import "assets/vendor/font-awesome/css/font-awesome.min.css";
import "assets/scss/argon-design-system-react.scss";

import App from "./App";
import Profile from "views/examples/Profile.jsx";

ReactDOM.render(
  <Provider store={store}>
  <BrowserRouter>
    <Switch>
      <Route 
      path="/" exact
       render={props => <App {...props}
        />} />
      <Route
        path="/simulation"
        exact
        render={props => <Profile {...props} 
        />}
      />
      <Redirect to="/" />
    </Switch>
  </BrowserRouter>,
  </Provider>,
  document.getElementById("root")
);
