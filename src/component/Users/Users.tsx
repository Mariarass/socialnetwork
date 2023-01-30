import React, {ChangeEvent, useEffect, useState} from 'react';
import s from './Users.module.css'
import User from "./User/User";
import {CircularProgress, Pagination} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {
    getUsersThunk,
    setCurrentPageAC,

} from "../../redux/reducers/user-reducer";
import {AppDispatch, AppRootStateType} from "../../redux/store";

import {currentPageSelector, isFetchingSelector, totalCountSelector} from "../../redux/selectors/user-selectors";


const Users = () => {
    const isFetching = useSelector(isFetchingSelector)
    const currentPage = useSelector(currentPageSelector)
    const totalUserCount = useSelector(totalCountSelector)
    const dispatch: AppDispatch = useDispatch()

    const changePage = (event: ChangeEvent<unknown>, page: number) => {
        dispatch(setCurrentPageAC(page))
    }

    useEffect(() => {
        return () => {
            dispatch(setCurrentPageAC(1))
        }
    }, [])

    useEffect(() => {
        dispatch(getUsersThunk(currentPage))
    }, [currentPage])


    return (
        <div className={s.userContainer}>
            <h3 className={s.header}>Users</h3>
            <div className={s.page}>
                <Pagination count={Math.round(totalUserCount / 10,)} onChange={changePage}/>
            </div>

            <div className={s.users}>
                {
                    isFetching
                        ? <div className={s.progress}>
                            <CircularProgress/>
                        </div>
                        : <User/>
                }


            </div>


        </div>
    );
};

export default Users;