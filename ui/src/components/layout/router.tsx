import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import MoviePage from "../../pages/movies.page";
import StatisticsPage from "../../pages/statistics.page";
import UserPage from "../../pages/user.page";
import LoginPage from "../../pages/login.page";
import RegisterPage from "../../pages/register.page";
import { UserContext } from "../user/user.context";

const Router = () =>
{
    const [user, _] = useContext(UserContext)
    return <Routes>
        <Route index element={<MoviePage/>} />
        <Route path={'/statistics'} element={<StatisticsPage/>} />
        <Route path={'/account'} element={user.loggedIn ? <UserPage/> : <LoginPage/>} />
        <Route path={'/login'} element={user.loggedIn ? <UserPage/> : <LoginPage/>} />
        <Route path={'/register'} element={user.loggedIn ? <UserPage/> : <RegisterPage/>} />
    </Routes>

}

export default Router