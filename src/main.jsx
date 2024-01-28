import React from 'react';
import { createRoot } from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';
import { BrowserRouter } from "react-router-dom";
import App from './App';
import LoginButton from './components/auth/login_button';

const root = createRoot(document.getElementById('root'));

root.render(
  <Auth0Provider
    domain="dev-ukcv1nsl77121wun.us.auth0.com"
    clientId="8z1oHvsjguIRaTT1Xrt7Nh9rOLRr15cs"
    authorizationParams={{
      redirect_uri: window.location.origin,
      audience: "https://dev-ukcv1nsl77121wun.us.auth0.com/api/v2/"
    }}
  >
    <App />
  </Auth0Provider>,
);