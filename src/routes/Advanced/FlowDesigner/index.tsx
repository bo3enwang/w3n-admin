import React, { Component } from "react";
import { Switch, Route, RouteComponentProps } from "react-router-dom";
import ListRoute from "./routes/ListRoute";
import EditorRoute from "./routes/EditorRoute";

export class FlowDesigner extends Component<RouteComponentProps<string>> {
  render() {
    const { match } = this.props;
    return (
      <Switch>
        <Route exact={true} path={match.url} component={ListRoute} />
        <Route exact={true} path={`${match.url}/create`} component={EditorRoute} />
      </Switch>
    );
  }
}

export default FlowDesigner;
