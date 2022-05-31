import { Outlet } from "react-router-dom"
import React from "react"
import HeaderTop from "./HeaderTop";
import HeaderBot from "./HeaderBot";

const Header = () => {
    return (
        <>
            <HeaderTop></HeaderTop>
            <HeaderBot></HeaderBot>
            <Outlet/>
        </>
    )
}
export default Header