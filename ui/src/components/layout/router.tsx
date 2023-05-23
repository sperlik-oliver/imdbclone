import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import MoviePage from "../../pages/movie.page";
import StatisticsPage from "../../pages/statistics.page";
import UserPage from "../../pages/user.page";
import LoginPage from "../../pages/login.page";
import RegisterPage from "../../pages/register.page";
import { UserContext } from "../user/user.context";
import MoviesPage from "../../pages/movies.page";

const Router = () =>
{
    const [user, _] = useContext(UserContext)
    return <Routes>
        <Route index element={<MoviesPage/>} />
        <Route path={'/movies'} element={<MoviesPage />} />
        <Route path={'/movie/:id'} element={<MoviePage />} />
        <Route path={'/statistics'} element={<StatisticsPage/>} />
        <Route path={'/account'} element={user.loggedIn ? <UserPage/> : <LoginPage/>} />
        <Route path={'/login'} element={user.loggedIn ? <UserPage/> : <LoginPage/>} />
        <Route path={'/register'} element={user.loggedIn ? <UserPage/> : <RegisterPage/>} />
    </Routes>

}

export default Router