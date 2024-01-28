import { Link, useMatch, useResolvedPath } from "react-router-dom"
import React from "react"
import logo from "../assets/images/logo.svg"

import { useAuth0 } from "@auth0/auth0-react";

export default function Navbar() {
    const { loginWithRedirect, isAuthenticated, logout } = useAuth0();

    return (
        <nav className="nav">
            <Link to="/" className="site-title"><img src={logo}></img></Link>
            <ul>
                <CustomLink to="/about">About</CustomLink>
                <CustomLink to="/input">Input</CustomLink>
                <CustomLink to="/scrapbook">Scrapbook</CustomLink>
                <CustomLink to="/recommendation">Recommendation</CustomLink>
                {isAuthenticated ?
                    <CustomRegularLink>
                        <a onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
                            Logout
                        </a>
                    </CustomRegularLink>
                    :
                    <CustomRegularLink><a onClick={() => {
                        loginWithRedirect();
                    }}>Login/Sign Up</a></CustomRegularLink>
                }

                {/* <CustomLink>Signup</CustomLink> */}
            </ul>
        </nav>
    )
}

function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to) /*Current path your on*/
    const isActive = useMatch({ path: resolvedPath.pathname, end: true }) /*Sees if the navbar component is the current active component*/
    return (
        <li className={isActive === to ? "active" : ""}>
            <Link to={to} {...props}>{children}</Link>
        </li>
    )
}

function CustomRegularLink({ children, ...props }) {
    // const resolvedPath = useResolvedPath(to) /*Current path your on*/
    // const isActive = useMatch({ path: resolvedPath.pathname, end: true }) /*Sees if the navbar component is the current active component*/
    return (
        <li>
            {children}
        </li>
    )
}