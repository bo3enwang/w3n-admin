import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import "ant-design-pro/dist/ant-design-pro.css"; // 统一引入样式
import registerServiceWorker from "./registerServiceWorker";
import "./mock";

ReactDOM.render(<App />, document.getElementById("root") as HTMLElement);
registerServiceWorker();
