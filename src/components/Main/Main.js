import React, { Component, Suspense } from "react";
import { Route, Switch } from "react-router-dom";

import routes from "../../routes";

class Main extends Component {
  state = {};
  render() {
    return (
      <Suspense fallback={<h1>...loading</h1>}>
        <Switch>
          {routes.map(({ path, exact, component }) => (
            <Route exact={exact} path={path} component={component} key={path} />
          ))}
        </Switch>
      </Suspense>
    );
  }
}

export default Main;
