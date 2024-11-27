import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import "./style/index.css";
// import "./style/screens/HomePage.css";
import App from "./App";
import React from "react";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "./redux/ConfigureStore";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(

  <Provider store={store} >
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);

