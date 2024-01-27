import { Link, useMatch, useResolvedPath } from "react-router-dom"

export default function Navbar() {
    return( 
        <nav className="nav">
            <Link to="/" className="site-title">Taste of Nostalgia</Link>
            <ul>
                <CustomLink to="/about">About</CustomLink>
                <CustomLink to="/login">Login</CustomLink>
                <CustomLink to="/signup">Signup</CustomLink>
                <CustomLink to="/input">Input</CustomLink>
                <CustomLink to="/scrapbook">Scrapbook</CustomLink>
                <CustomLink to="/recommendation">Recommendation</CustomLink>
            </ul>
        </nav>
    )
}

function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to) /*Current path your on*/
    const isActive = useMatch({ path: resolvedPath.pathname, end: true}) /*Sees if the navbar component is the current active component*/
    return (
        <li className={isActive === to ? "active" : ""}>
            <Link to={to} {...props}>{children}</Link>
        </li>
    )
}