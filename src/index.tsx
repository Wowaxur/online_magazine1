import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from "~/app/App";
import {Auth0Provider} from "@auth0/auth0-react";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const domain = "dev-ibbyn3ra8476rmqf.us.auth0.com";
const clientId = "kwBJzkF79v7bhfMDrWroYYiPgFKYXHX6";
root.render(
  <React.StrictMode>
      <Auth0Provider
          domain={domain}
          clientId={clientId}
          authorizationParams={{
              redirect_uri: window.location.origin
          }}
      >
          <App />
      </Auth0Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
