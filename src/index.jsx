import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { UserProvider } from "./component/Dataprovide/DataProvider.jsx";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter } from "react-router-dom";
import "./index.css"

const authToken = localStorage.getItem("authtoken");
const initialUser = authToken
  ? { user: undefined, token: authToken }
  : { user: undefined, token: undefined };

const rootElement = document.getElementById("root");

createRoot(rootElement).render(
  <React.StrictMode>
    <UserProvider value={initialUser}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </UserProvider>
  </React.StrictMode>
);

