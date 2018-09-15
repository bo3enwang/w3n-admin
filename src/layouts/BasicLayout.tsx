import React, { Component, Fragment } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import styled from "styled-components";
import TopHeader from "./TopHeader";
import NavHeader from "./NavHeader";
import { plainNode } from "routes";

const PageWrap = styled.div`
  @media (min-width: 576px) {
    max-width: 540px;
  }
  @media (min-width: 768px) {
    max-width: 720px;
  }
  @media (min-width: 992px) {
    max-width: 960px;
  }
  @media (min-width: 1200px) {
    max-width: 1140px;
  }

  @media (min-width: 1600px) {
    max-width: 1550px;
  }

  padding: 15px 0;
  width: 100%;
  padding-right: 6px;
  padding-left: 6px;
  margin-right: auto;
  margin-left: auto;
  min-height: calc(100vh - 135px);
  flex-grow: 1;
`;

const Error404 = () => {
  return <div>Error</div>;
};

export class BasicLayout extends Component {
  render() {
    return (
      <Fragment>
        <TopHeader />
        <NavHeader />
        <PageWrap id="content">
          <Switch>
            {plainNode.map(item => (
              <Route exact={item.exact} key={item.path} path={item.path} component={item.component} />
            ))}
            <Redirect exact={true} from="/" to="/workplace" />
            <Route component={Error404} />
          </Switch>
        </PageWrap>
      </Fragment>
    );
  }
}

export default BasicLayout;
