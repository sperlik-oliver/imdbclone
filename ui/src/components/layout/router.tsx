import React from "react";
import { Route, Routes } from "react-router-dom";
import MoviePage from "../../pages/movies.page";
import StatisticsPage from "../../pages/statistics.page";
import UserPage from "../../pages/user.page";
import LoginPage from "../../pages/login.page";
import RegisterPage from "../../pages/register.page";

const Router = () =>
    <Routes>
        <Route index element={<MoviePage/>} />
        <Route path={'/statistics'} element={<StatisticsPage/>} />
        <Route path={'/account'} element={<UserPage/>} />
        <Route path={'/login'} element={<LoginPage/>} />
        <Route path={'/register'} element={<RegisterPage/>} />
    </Routes>

export default Router