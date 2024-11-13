import { Outlet } from "react-router-dom";
import { Header } from "./Header";

export function HomeAdmin() {
    return(
        <>
        <Header />
        <Outlet />
        </>
    )
}