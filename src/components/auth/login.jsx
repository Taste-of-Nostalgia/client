import React from "react";
import LoginButton from "./login_button";
import LogoutButton from "./logout_button";
import { useAuth0 } from "@auth0/auth0-react";

export default function LoginPage() {
    const { isAuthenticated } = useAuth0();

    return (
        <>
            {!isAuthenticated && <LoginButton />}
            {isAuthenticated && <LogoutButton />}
        </>
    )
}