import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import AuthProvider from "./context/AuthContext.jsx";
import NavBar from "./view/NavBar.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <App />
        <NavBar />
      </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>
);

//Authprovider was wrapped around the browser router and app so that every component will have access to the state and the dispatch function
