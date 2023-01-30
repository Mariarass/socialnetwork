import React, {FC, useState} from 'react';
import {addLike, deleteLike, deletePost, PostType} from "../../../../redux/reducers/profile-reducer";
import s from '../Post.module.css'
import {useDispatch, useSelector} from "react-redux";
import {profileSelector} from "../../../../redux/selectors/profile-selectors";
import {Avatar, IconButton} from "@mui/material";
import avatar from "../../../../assets/avatar.jpg";
import FavoriteIcon from '@mui/icons-material/Favorite';

import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import {MenuPost} from "../MenuPost/MenuPost";

export const ItemPost: FC<{ post: PostType }> = ({post}) => {
    const [like, setLike] = useState(false)
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl)

    const currentProfile = useSelector(profileSelector)
    const dispatch = useDispatch()

    const handleChangeLike = () => {
        like
            ? dispatch(deleteLike(post.id))
            : dispatch(addLike(post.id))
        setLike(!like)


    }

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    return (
        <div className={s.itemPost}>
            <div className={s.postContainer}>
                <div className={s.flex}>
                    <Avatar sx={{width: 55, height: 55}}
                            src={currentProfile.photos.large ? currentProfile.photos.large : avatar}/>
                    <div>
                        <p className={s.name}>{currentProfile.fullName}</p>
                        <p className={s.data}>{post.data}</p>
                    </div>

                </div>

                <IconButton onClick={handleClick}>
                    <MoreHorizIcon/>
                </IconButton>
                <MenuPost anchorEl={anchorEl}
                          open={open}
                          setAnchorEl={setAnchorEl}
                          id={post.id}/>


            </div>

            <p className={s.message}>
                {post.message}
            </p>
            {post.img != ''
                && <div className={s.photoContainer}>
                    <img className={s.photo} src={post.img}/>
                </div>}

            <div className={s.panel}>

                <IconButton onClick={handleChangeLike}>
                    <FavoriteIcon sx={{fill: like ? '#ec3553' : '#c9ced3'}}/>
                </IconButton>
                <p className={s.like}> {post.like}</p>

            </div>


        </div>
    );
};

