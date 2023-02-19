import React, {useEffect, useState} from 'react';
import './App.css';
import {Route, Router, Routes, useNavigate} from "react-router-dom";
import Users from "./component/Users/Users";


import {Login} from './component/Login/Login'
import ProfileContainer from "./component/Profile/ProfileContainer";
import {useDispatch, useSelector} from "react-redux";
import {isAuthSelector} from "./redux/selectors/auth-selectors";
import {AppDispatch} from "./redux/store";
import {getAuthThunk} from "./redux/reducers/auth-reducer";
import {Dialog} from "./component/Dialog/Dialog";
import {SideBar} from "./component/SideBar/SideBar";


function App() {
    const navigate = useNavigate()
    const isAuth = useSelector(isAuthSelector)
    const dispatch: AppDispatch = useDispatch()
    useEffect(() => {
        dispatch(getAuthThunk())
    }, [])


    return (


        <div className="AppContainer">
            {isAuth && <SideBar/>}
            {isAuth ?
                <Routes>

                    <Route path="/profile/:userId" element={<ProfileContainer/>}/>
                    <Route path="/profile" element={<ProfileContainer/>}/>
                    <Route path="/message" element={<Dialog/>}/>
                    <Route path="/users" element={<Users/>}/>
                    <Route path="/login" element={<Login/>}/>
                </Routes> :
                <div>
                    <Login/>
                </div>}


        </div>


    )
        ;
}

export default App;
