import ReactDOM from "react-dom";
import React from "react";
import App from "./components/App";
import { createStore, compose } from "redux";
import middleware from "./middleware";
import reducer from "./reducers";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(middleware));

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);
