import React, {memo, useEffect, useState} from 'react';
import {Avatar, Button} from "@mui/material";
import {NavLink} from "react-router-dom";
import s from '../Users.module.css'
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, AppRootStateType} from "../../../redux/store";
import {
    followThunk,
    unfollowThunk,
} from "../../../redux/reducers/user-reducer";
import {ButtonFollow, CssButton} from "../../../utils/style-for-mui/style-for-mui";
import avatar from '../../../assets/avatar.jpg'
import {UserHeader} from "./UserHeader";

const User = memo(() => {

    const users = useSelector<AppRootStateType, any>(state => state.user)
    const dispatch: AppDispatch = useDispatch()

    const deleteFollow = (id: string) => {
        dispatch(unfollowThunk(id))
    }

    const postFollow = (id: string) => {
        dispatch(followThunk(id))
    }


    return (
        users.user.map((el: any) =>

            <div key={el.id} className={s.userItem}>
                <UserHeader user={el}/>
                {el.followed
                    ? <CssButton disabled={users.followingInProgress.some((id: string) => id === el.id)}
                                 onClick={() => deleteFollow(el.id)}> unfollow</CssButton>
                    : <CssButton disabled={users.followingInProgress.some((id: string) => id === el.id)}
                                 onClick={() => postFollow(el.id)}>follow</CssButton>}


            </div>
        )


    );
})

export default User;