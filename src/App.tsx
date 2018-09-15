import * as React from "react";
import { Provider } from "mobx-react";
import stores from "stores";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { LocaleProvider } from "antd";
import "moment/locale/zh-cn";
import zh_CN from "antd/lib/locale-provider/zh_CN";
import LoginRoute from "routes/Auth/LoginRoute";
import BasicLayout from "layouts/BasicLayout";

class App extends React.Component {
  render() {
    return (
      <Provider {...stores}>
        <LocaleProvider locale={zh_CN}>
          <BrowserRouter>
            <Switch>
              <Route exact={true} path="/login" component={LoginRoute} />
              <Route
                render={props =>
                  stores.appStore.isLogin ? (
                    <BasicLayout />
                  ) : (
                    <Redirect
                      to={{
                        pathname: "/login",
                        state: { from: props.location }
                      }}
                    />
                  )
                }
              />
            </Switch>
          </BrowserRouter>
        </LocaleProvider>
      </Provider>
    );
  }
}

export default App;
