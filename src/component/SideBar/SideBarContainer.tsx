import React, {useEffect} from 'react';
import {PersistentDrawerLeft} from "./Drawer";
import axios from "axios";
import {useDispatch} from "react-redux";
import {setUserDataAC} from "../../redux/reducers/auth-reducer";

const SideBarContainer = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        axios.get('https://social-network.samuraijs.com/api/1.0/auth/me',
            {withCredentials: true}).then((res) => {

            if(res.data.resultCode===0){
                const {email, id, login} = res.data.data
                dispatch(setUserDataAC(id, login, email))

            }

        })
    }, [])


    return (
        <PersistentDrawerLeft/>
    );
};

export default SideBarContainer;