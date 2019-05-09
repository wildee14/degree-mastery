import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import AppRouter from "./routers/AppRouter";
import configureStore from "./store/configureStore";
import { setTextFilter } from "./actions/filters";
import "normalize.css/normalize.css";
import "./styles/styles.scss";
import registerServiceWorker from "./components/registerServiceWorker";

const store = configureStore();

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById("app"));
registerServiceWorker();
