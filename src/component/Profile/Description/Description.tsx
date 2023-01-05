import React, {useState} from 'react';
import s from '../Profile.module.css'
import ava from '../../../assets/ava.jpg'

import SpanInput from "./SpanInput/SpanInput";
import {useSelector} from "react-redux";
import {statusSelectors} from "../../../redux/selectors/profile-selectors";
import {useParams} from "react-router-dom";


type DescriptionType = {
    profile: any
}
const Description: React.FC<DescriptionType> = ({profile}) => {
    const status = useSelector(statusSelectors)
    let {userId}: any = useParams();

    return (

        <div className={s.DescriptionContainer}>
            <div>
                <img className={s.img} src={profile.photos.small}/>
            </div>
            <div className={s.description}>
                <div>
                    <p className={s.name}> {profile.fullName}</p>
                    <p className={s.subContainer}>
                       {/* <p style={{margin: 0}}>3181 subscribers</p>
                        <p style={{margin: 0}}>1,249 subscriptions</p>*/}
                    </p>


                </div>
                {userId===undefined? <SpanInput/>:<span>{status}</span>}{/*//убрать spaninput у других пользователей*/}



            </div>

        </div>
    );
};

export default Description;