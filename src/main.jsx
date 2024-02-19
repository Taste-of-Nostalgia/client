import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Auth0Provider } from "@auth0/auth0-react";
//import InputScreen from './inputscreen.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-ukcv1nsl77121wun.us.auth0.com"
      clientId="8z1oHvsjguIRaTT1Xrt7Nh9rOLRr15cs"
      authorizationParams={{
        redirect_uri: window.location.origin,
        audience: "https://dev-ukcv1nsl77121wun.us.auth0.com/api/v2/"
      }}
    >
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Auth0Provider>
  </React.StrictMode>
)
