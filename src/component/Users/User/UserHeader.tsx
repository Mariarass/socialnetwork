import React, {FC} from 'react';
import s from "../Users.module.css";
import {Avatar} from "@mui/material";
import avatar from "../../../assets/avatar.jpg";
import {NavLink} from "react-router-dom";
import {UserType} from "../../../redux/reducers/user-reducer";

type UserHeaderType = {
    user: UserType
    profile?: boolean

}
export const UserHeader: FC<UserHeaderType> = ({user, profile}) => {
    return (
        <NavLink to={`/profile/${user.id}`} className={!profile ? s.linkUser : s.linkUser + ' ' + s.linkUserProfile}>
            <Avatar sx={{width: 66, height: 66}} src={user.photos.large || avatar}/>
            <p className={s.name}>{user.name}</p>
        </NavLink>
    );
};

