import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { adminRoutes, authRoutes } from "./components/Routes";

import Adminlayout from "./components/layout/index";

const AppRoute = ({ component: Component, layout: Layout, ...item }) => (
  <Route
    {...item}
    render={(props) => (
      <Layout>
        <Component {...props}></Component>
      </Layout>
    )}
    exact
  ></Route>
);

function App() {
  return (
    <Router>
      <Switch>
        {authRoutes.map((route, index) => (
          <AppRoute key={index} path={route.path} component={route.component} />
        ))}
        {adminRoutes.map((route, index) => (
          <AppRoute
            key={index}
            path={route.path}
            component={route.component}
            layout={Adminlayout}
          />
        ))}
        <Redirect strict from="/" to="/dashboard" />
      </Switch>
    </Router>
  );
}

export default App;
