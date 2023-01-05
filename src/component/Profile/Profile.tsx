import React, {useEffect, useState} from 'react';
import Description from "./Description/Description";
import s from './Profile.module.css'

import { useSelector} from "react-redux";

import {profileSelectors} from "../../redux/selectors/profile-selectors";

import Post from "./Post/Post";

export type LineType = {
    id: number
    url: any
    description: string
    date: string
}

type ProfileType = {
    modal?: boolean
    setModal?: (value: boolean) => void
}


const Profile: React.FC<ProfileType> = ({modal, setModal}) => {
    const profile = useSelector(profileSelectors)

    return (

        <div className={s.profileContainer}>
            <div className={s.profile}>

                <Description profile={profile}/>
                <Post/>

            </div>
        </div>


    )
        ;
};

export default Profile;