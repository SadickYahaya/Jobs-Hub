import React from "react";
import ReactDOM from "react-dom/client";
import { render } from "react-dom"
import { createStore, applyMiddleware, Store } from "redux"
import { Provider } from "react-redux"
import thunk from "redux-thunk"

import "./index.css";
import App from "./App";
import reducer from "./reducers/reducer";

const store: Store<JobState,JobAction> & {
  dispatch: DispatchType
} = createStore(reducer, applyMiddleware(thunk))


const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
