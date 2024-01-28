import Profile from "./profile";
import { useAuth0 } from "@auth0/auth0-react";
import React from 'react'
import { default as axios } from 'axios'

export default function Home() {
    const { getAccessTokenSilently, isAuthenticated } = useAuth0();

    const getAdminResource = async (accessToken) => {
        const apiServerUrl = 'http://localhost:3010'
        const config = {
            url: `${apiServerUrl}/userid`,
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
        if (!isAuthenticated) return;

        getAccessTokenSilently({ ignoreCache: true }).then(accessToken => {
            console.log("Access token", accessToken);
            getAdminResource(accessToken).then((res) => {
                console.log("Returned data:", res.data);
            }).catch((err) => {
                console.log("ERROR:", err);
            });
        })
    }, [isAuthenticated]);
    return (
        <>
            <h1>Home</h1>
            <Profile />
        </>
    )
}