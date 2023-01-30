import React, {useEffect} from 'react';
import s from './Friends.module.css'
import {useDispatch, useSelector} from "react-redux";

import {getUsers} from "../../../redux/selectors/user-selectors";

import {UserHeader} from "../../Users/User/UserHeader";
import {getUsersThunk} from "../../../redux/reducers/user-reducer";
import {AppDispatch} from "../../../redux/store";

export const Friends = () => {
    const users = useSelector(getUsers)
    const dispatch: AppDispatch = useDispatch()

    useEffect(() => {
        dispatch(getUsersThunk(1))
    },[])
    return (
        <div className={s.container}>
            <h3 className={s.header}>Me friends</h3>
            <div className={s.scroller}>
                {users.map(el =>
                    <UserHeader user={el} profile={true}/>
                )}
            </div>

        </div>
    );
};

