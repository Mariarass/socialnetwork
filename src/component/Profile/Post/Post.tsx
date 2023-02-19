import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {setPostAC} from "../../../redux/reducers/profile-reducer";
import {v1} from 'uuid';
import s from './Post.module.css'
import BorderColorIcon from '@mui/icons-material/BorderColor';
import {IconButton} from "@mui/material";
import {CssInput} from '../../../utils/style-for-mui/style-for-mui';
import {UploadPhoto} from "../../../common/UploadPhoto/UploadPhoto";

export const Post = () => {

    const [postInput, setPostInput] = useState('')
    const [imgPost, setImgPost] = useState('')
    const dispatch = useDispatch()
    const sendPost = () => {

        if (postInput.trim()||imgPost!='') {
            const newPost = {
                id: v1(),
                message: postInput,
                like: 0,
                data: (new Date()).toISOString().slice(0, 10),
                img: imgPost
            }
            dispatch(setPostAC(newPost))
            setPostInput('')
            setImgPost('')
        }
    }
    const handleChange = (value: string) => {
        setPostInput(value)
    }


    return (
        <div className={s.container}>

            <CssInput
                sx={{width: '100%', borderRadius: '10px'}}
                value={postInput}
                onChange={(e) => handleChange(e.target.value)}
                onKeyPress={(event => {
                    if (event.key === 'Enter') {
                        sendPost()
                    }
                })}/>


            {imgPost != '' && <div className={s.photoContainer}>
                    <img className={s.photo} src={imgPost}/>
                </div>
            }

            <div className={s.headerContainer}>
                <UploadPhoto classname={'addPhotoPost'} callback={setImgPost}/>

                <div className={s.flex}>
                    <IconButton onClick={sendPost}>
                        <BorderColorIcon className={s.createIcon}/>
                    </IconButton>
                    <p className={s.header}>Create post</p>
                </div>

            </div>
        </div>
    );
};
