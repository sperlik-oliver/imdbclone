import React from "react";
import Footer from "./footer";
import Navbar from "./navbar";
import Router from "./router";

const Layout = () => {
    return <>
        <Navbar />
        <Router />
        <Footer/>
    </>
}

export default Layout