import React from "react";

import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { syncHistoryWithStore } from "react-router-redux";
import { createBrowserHistory } from "history";

import NetworkService from "./utils/interceptor";
import store from "./store";

import "./styles/styles.scss";
import App from "./App";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
const browserHistory = createBrowserHistory();
const history = syncHistoryWithStore(browserHistory, store);
NetworkService.setupInterceptors(store, history);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <Router history={history}>
        <Routes>
          <Route path={"*"} element={<App />} />
        </Routes>
      </Router>
    </React.StrictMode>
  </Provider>
);
