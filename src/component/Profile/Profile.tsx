import React, {useEffect, useState} from 'react';
import {Description} from "./Description/Description";
import s from './Profile.module.css'
import {useSelector} from "react-redux";
import {postSelector} from "../../redux/selectors/profile-selectors";
import {Post} from "./Post/Post";
import {Friends} from "./Friends/Friends";
import {ItemPost} from "./Post/ItemPost/ItemPost";


export const Profile = () => {

    const posts = useSelector(postSelector)
    console.log(posts)
    return (

        <div className={s.profileContainer}>
            <div className={s.profile}>

                <Description/>
                <div className={s.container}>
                    <Friends/>
                    <div className={s.postContainer}>
                        <Post/>
                        {posts.map(el => <ItemPost key={el.id} post={el}/>)}

                    </div>

                </div>


            </div>
        </div>


    )
        ;
};

