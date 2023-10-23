import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/app/App";
import GlobalStyle from "./globalStyles";
// import PlusIcon from "./assets/icon-plus.svg";
// console.log(PlusIcon);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>
);
