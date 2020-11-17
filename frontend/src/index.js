import { render } from "react-dom";
import React from "react";
import { Provider } from "react-redux";
import App from "./containers/App";
import store from "./store";
render(
  <React.StrictMode>
    <Provider store={store}>
      <App/>
     </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
