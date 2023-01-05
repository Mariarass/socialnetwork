import React, {useState} from 'react';
import s from './Contact.module.css'
import {NavLink} from "react-router-dom";
import {Avatar} from "@mui/material";
export type ContactType={
    user:string
    id:string
    photo: string
}
type PropsType={
    contact:ContactType[]
}
const Contact = (props:PropsType) => {
    return (
        <div>
            {props.contact.map(d=><NavLink key={d.id} className={s.link} to={d.id}>
                <div className={s.contactWrap}>
                    <Avatar  sx={{ width: 46, height: 46 }}  alt="user" src={d.photo} />

                    <p className={s.contactItem}>{d.user}</p>
                </div>

            </NavLink>)}
        </div>
    );
};

export default Contact;