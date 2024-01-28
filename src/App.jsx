import { useState } from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import LoginPage from './components/auth/login'
import './App.css'
import Profile from './components/auth/profile'
import React from 'react'
import { default as axios } from 'axios'

function App() {
  const { getAccessTokenSilently, isAuthenticated } = useAuth0();

  const getAdminResource = async (accessToken) => {
    const apiServerUrl = 'http://localhost:3010'
    const config = {
      url: `${apiServerUrl}/secure-endpoint`,
      method: "GET",
      headers: {
        // "content-type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    };

    const { data, error } = await axios.request(config);

    return {
      data: data || null,
      error,
    };
  };


  React.useEffect(() => {
    getAccessTokenSilently({ ignoreCache: true }).then(accessToken => {
      getAdminResource(accessToken).then((res) => {
        console.log("Returned data:", res.data);
      }).catch((err) => {
        console.log("ERROR:", err);
      });
    })
  }, [isAuthenticated]);

  return (
    <>
      <LoginPage />
      <Profile />
    </>
  )
}

export default App
