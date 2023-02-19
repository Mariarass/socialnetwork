import React, {useEffect, useState} from 'react';
import {withRedirect} from "../../HOC/withAuthRedirect";

import {Profile} from './Profile';
import {useDispatch, useSelector} from "react-redux";
import {myIdSelectors} from "../../redux/selectors/auth-selectors";
import {isFetchingProfileSelector, profileSelector} from "../../redux/selectors/profile-selectors";

import {getProfileThunk, getStatusThunk} from "../../redux/reducers/profile-reducer";
import {useParams} from "react-router-dom";
import s from "./Profile.module.css";
import {CircularProgress} from "@mui/material";
import {AppDispatch} from "../../redux/store";

const ProfileContainer = () => {

    const isFetching = useSelector(isFetchingProfileSelector)
    const myId = useSelector(myIdSelectors)
    const profile = useSelector(profileSelector)
    let {userId}: any = useParams();
    const dispatch: AppDispatch = useDispatch()

    useEffect(() => {
        dispatch(getProfileThunk(userId, myId))
        dispatch(getStatusThunk(userId, myId))
    }, [userId])


    if (Object.keys(profile).length == 0) {
        return <></>
    }
    return (
        isFetching
            ? <div className={s.progress}><CircularProgress/></div>
            : <Profile/>)


}

export default ProfileContainer;