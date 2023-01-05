import React, {useState} from 'react';
import s from "../../Profile.module.css";
import {useDispatch, useSelector} from "react-redux";
import {statusSelectors} from "../../../../redux/selectors/profile-selectors";
import { updateStatusThunk} from "../../../../redux/reducers/profile-reducer";
import {AppDispatch} from "../../../../redux/store";

const SpanInput = () => {

    const [toggle, setToggle] = useState(true)
    const status = useSelector(statusSelectors)
    const [profileStatus, setProfileStatus] = useState(status)
    const dispatch: AppDispatch = useDispatch()

    const changeInput = (value: string) => {
        setProfileStatus(value)
    }

    const sendDate = () => {
        setToggle(true);
        dispatch(updateStatusThunk(profileStatus))


    }
    return (
        status != null &&

        (toggle)
            ? <div className={s.status}>
                <p onDoubleClick={() => {
                    setToggle(false)
                }} className={s.textDes}>{status.length != 0 ? status : 'Enter status'}</p>
            </div>
            : <div className={s.status}>
                <input className={s.input} value={profileStatus} type='text' autoFocus={true}
                       onChange={(event) => changeInput(event.target.value)}
                       onBlur={sendDate}
                       onKeyPress={(event) => {
                           if (event.key === "Enter") {
                               sendDate()
                           }
                       }}

                /></div>


    )
        ;
};

export default SpanInput;