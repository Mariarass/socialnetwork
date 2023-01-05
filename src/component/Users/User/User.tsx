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
                <NavLink to={`/profile/${el.id}`} className={s.linkUser}>
                    <Avatar sx={{width: 66, height: 66}} src={el.photos.large}/>
                    <div className={s.description}>
                        <p className={s.name}>{el.name}</p>
                        <p className={s.status}>{el.status}</p>

                    </div>

                </NavLink>

                {el.followed
                    ? <Button disabled={users.followingInProgress.some((id:string) => id === el.id)}
                              onClick={() => deleteFollow(el.id)}> unfollow</Button>
                    : <Button disabled={users.followingInProgress.some((id:string) => id === el.id)}
                              onClick={() => postFollow(el.id)}>follow</Button>}


            </div>
        )


    );
})

export default User;