import React, {useEffect, useLayoutEffect, useRef, useState} from 'react';
import s from './Dialog.module.css'

import send from '../../assets/send.png'
import user from '../../assets/ava.jpg'
import Message, {MessageType} from "./Message/Message";
import Contact, {ContactType} from "./Contact/Contact";
import Input from "../../ui/Input";
import {Button, IconButton} from "@mui/material";
import {Send} from "@mui/icons-material";
import {useSelector} from "react-redux";
import {isAuthSelector} from "../../redux/selectors/auth-selectors";
import {redirect, useNavigate} from "react-router-dom";

const people=[ {
    user: 'Petr',
    id: '1',
    photo: 'https://sun9-7.userapi.com/impf/c639427/v639427591/2e63d/gGhwjQFOwRI.jpg?size=960x960&quality=96&sign=985b906279e01757b785fd9f65ee5eab&type=album'
},
    {
        user: 'Maria',
        id: '2',
        photo: 'https://sun9-11.userapi.com/impf/c637418/v637418591/3f12b/iWKGd5ZdC3M.jpg?size=960x1280&quality=96&sign=5c62a14e715cbbb47c77e7858465fe64&type=album'
    },
    {
        user: 'Cate',
        id: '3',
        photo: 'https://sun9-26.userapi.com/impf/c836238/v836238591/3419c/o4yf9P--NuA.jpg?size=720x720&quality=96&sign=5939e5e6ab63a27f44673db16f4e8aec&type=album'
    },
    {
        user: 'Darin ',
        id: '4',
        photo: 'https://sun9-83.userapi.com/impf/c836129/v836129591/2b8f8/raex7mloSaU.jpg?size=718x718&quality=96&sign=b7c7985c92b1a59b291b369fc4a1648a&type=album'
    },
    {
        user: 'Den',
        id: '5',
        photo: 'https://sun9-60.userapi.com/impf/c836129/v836129591/2b900/Umo_sy2qzzc.jpg?size=720x720&quality=96&sign=a3abb0916e337a22fb7f035f37a29e09&type=album'
    },
    {
        user: 'Nick',
        id: '6',
        photo: 'https://sun9-17.userapi.com/impf/c638318/v638318591/1c172/4mrEUWscfRQ.jpg?size=720x960&quality=96&sign=a0f4966e8ad4a50e356b62be8ade8f6d&type=album'
    },
    {
        user: 'Roma',
        id: '7',
        photo: 'https://sun9-38.userapi.com/impf/c636430/v636430840/28434/Px8vssq87ls.jpg?size=720x960&quality=96&sign=91ccccd10de0276eac5812a9be027c2f&type=album'
    },
    {
        user: 'Emma',
        id: '8',
        photo: 'https://sun9-29.userapi.com/impf/c637717/v637717840/d728/2vUmSPgtrRM.jpg?size=960x720&quality=96&sign=7b1bbda638da6b3087dbf48210cdd3aa&type=album'
    },
    {
        user: 'Sid',
        id: '9',
        photo: 'https://sun9-81.userapi.com/impf/c636424/v636424591/28fe5/FynJv-BVM_Q.jpg?size=960x720&quality=96&sign=d7e076d58b8b966de550ccb3c2a051bf&type=album'
    },
    {
        user: 'Petr',
        id: '10',
        photo: 'https://sun9-85.userapi.com/impf/c836627/v836627591/1c66/lCOXvPxETzQ.jpg?size=960x720&quality=96&sign=f9072f23c964925a52f006f47c8eee0f&type=album'
    },
    {
        user: 'Gal',
        id: '11',
        photo: 'https://sun9-17.userapi.com/impf/c636218/v636218591/27085/otxTEC_eXuc.jpg?size=682x497&quality=96&sign=b8c7618cb26c038ab83815c8c4b806ef&type=album'
    },
    {
        user: 'Julia',
        id: '12',
        photo: 'https://sun9-82.userapi.com/impf/c638921/v638921591/34d91/PKkYk3BV-mg.jpg?size=960x960&quality=96&sign=2ff4512aba056057d720f15d01dc5996&type=album'
    },
]
 export const Dialog = () => {
    const [dialog, setDialog] = useState<ContactType[]>(people)

    const [message, setMessage] = useState<MessageType[]>([{
        id: 1,
        user: 'Maria',
        message: 'DIALOGUE PAGE UNDER DEVELOPMENT',
        photo: user,
        time: '22:00'
    }])


    const [value, setValue] = useState<string>('')
    const [searchContact, setSearchContact] = useState<string>('')


    const onChangeMessage = () => {
        (value.length != 0) &&
        setMessage([...message, {
            id: Date.now(),
            user: 'Maria',
            message: value,
            photo: user,
            time: new Date().toLocaleTimeString().slice(0, -3)
        }])
        setValue('')
    }

    const filterContact = (value: any, arr: any) => arr.filter((m: any) => m.user.toLowerCase().includes(value.toLowerCase()))




        return (
            <div className={s.dialogContainer}>


                <div className={s.contact}>
                    <div className={s.searchContainer}>
                        <Input placeholder='search contact' class='inputSearch' value={searchContact}
                               setValue={setSearchContact}/>
                    </div>

                    <div className={s.scrollerContact}>
                        <Contact contact={filterContact(searchContact, dialog)}/>
                    </div>

                </div>

                <div className={s.containerScroller}>
                    <div className={s.header}>

                    </div>
                    <div  className={s.scroller}>{/*/ref={bottomRef}/ */}
                        <Message text={message}/>
                    </div>

                    <div className={s.send}>

                        <Input class='inputDefault' callback={onChangeMessage} value={value} setValue={setValue}/>
                        <IconButton onClick={onChangeMessage}>
                            <Send/>
                        </IconButton>


                    </div>

                </div>


            </div>
        );
    }
    ;

