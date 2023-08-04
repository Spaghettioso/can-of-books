import React from "react";
import ReactDOM from "react-dom/client";
// import { createRoot } from "react-dom/client";
import { Auth0Provider } from "@auth0/auth0-react";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-vgfczmzpmsnw3gfu.uk.auth0.com"
      clientId="GW4rrShdvosIRT6oCqVQjOyiOdYhqa9C"
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>
);
