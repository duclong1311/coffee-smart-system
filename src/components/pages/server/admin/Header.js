import { Link } from "react-router-dom";

export function Header() {
    return(
        <>
        <Link to="listpost">ListPost</Link>
        <Link to="dash">Dashboard</Link>
        </>
    )
}