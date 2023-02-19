import React, {useEffect, useState} from 'react';
import {Description} from "./Description/Description";
import s from './Profile.module.css'
import {useSelector} from "react-redux";
import {postSelector} from "../../redux/selectors/profile-selectors";
import {Post} from "./Post/Post";
import {Friends} from "./Friends/Friends";
import {ItemPost} from "./Post/ItemPost/ItemPost";
import {useParams} from "react-router-dom";


export const Profile = () => {

    const posts = useSelector(postSelector)
    let {userId}: any = useParams();

    return (

        <div className={s.profileContainer}>
            <div className={s.profile}>

                <Description/>
                <div className={s.container}>
                    <Friends/>
                    <div className={s.postContainer}>
                        {userId===undefined && <Post/>}
                        {posts.map(el => <ItemPost key={el.id} post={el}/>)}

                    </div>

                </div>


            </div>
        </div>


    )
        ;
};

