import { Outlet } from "react-router-dom";
import { Header } from "./Header";

export function Home() {
    return(
        <>
        <Header />
        <Outlet />
        </>
    )
}