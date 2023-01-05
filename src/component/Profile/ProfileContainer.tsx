import React, {useEffect, useState} from 'react';
import {withRedirect} from "../../HOC/withAuthRedirect";

import Profile from './Profile';
import {useDispatch, useSelector} from "react-redux";
import {myIdSelectors} from "../../redux/selectors/auth-selectors";
import {isFetchingProfileSelector, profileSelectors} from "../../redux/selectors/profile-selectors";

import {getProfileThunk, getStatusThunk} from "../../redux/reducers/profile-reducer";
import {useParams} from "react-router-dom";
import s from "./Profile.module.css";
import {CircularProgress} from "@mui/material";
import {AppDispatch} from "../../redux/store";

const ProfileContainer = () => {
    /*  const ProfileWidthRedirect = withRedirect(<Profile/>);*/
    const isFetching = useSelector(isFetchingProfileSelector)
    const myId = useSelector(myIdSelectors)
    const profile = useSelector(profileSelectors)
    let {userId}: any = useParams();
    const dispatch: AppDispatch = useDispatch()


    useEffect(() => {
        dispatch(getProfileThunk(userId, myId))
        dispatch(getStatusThunk(userId, myId))
    }, [userId])

    return (
        profile != null ?

            <div>

                {isFetching
                    ? <div className={s.progress}><CircularProgress/></div>
                    : <Profile/>}


            </div> :
            <div></div>
    );
};

export default ProfileContainer;