import React from 'react';
import s from '../Profile.module.css'
import SpanInput from "./SpanInput/SpanInput";
import {useSelector} from "react-redux";
import {
    isLoadingPhotoSelector, profileSelector, statusSelector,
} from "../../../redux/selectors/profile-selectors";
import {useParams} from "react-router-dom";
import back from '../../../assets/3.png'
import avatar from "../../../assets/avatar.jpg";
import {UploadPhoto} from "../../../common/UploadPhoto/UploadPhoto";
import {CircularProgress} from "@mui/material";

export const Description = () => {
    const profile = useSelector(profileSelector)
    const status = useSelector(statusSelector)
    const isLoading = useSelector(isLoadingPhotoSelector)

    let {userId}: any = useParams();

    return (

        <div className={s.DescriptionContainer}>
            <img className={s.back} src={back}/>

            {isLoading
                ? <div className={s.loading}><CircularProgress/></div>
                : <img className={s.img} src={profile.photos.large || avatar}/>}

            {userId === undefined && <UploadPhoto classname={'addPhotoProfile'}/>}

            <div className={s.description}>
                <h3 className={s.name}> {profile.fullName}</h3>
                {userId === undefined
                    ? <SpanInput/>
                    : <p className={s.status}>{status}</p>}
            </div>
        </div>
    );
};

