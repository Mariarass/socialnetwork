import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {statusSelector} from "../../../redux/selectors/profile-selectors";
import ItemPost from './ItemPost/ItemPost';
import Input from "../../../ui/Input";
import {setPostAC} from "../../../redux/reducers/profile-reducer";
import { v1 } from 'uuid';

const Post = () => {
    const posts = useSelector(statusSelector)
    const [postInput, setPostInput] = useState('')
    const dispatch = useDispatch()
    const sendPost = () => {
        const newPost = {
            id: v1(),
            message: postInput,
            like: 0
        }
        dispatch(setPostAC(newPost))
       setPostInput('')

    }


    return (
        <div>
            <Input class={''} value={postInput} setValue={setPostInput}/>
            <button onClick={sendPost}/>
            {posts.map(el => <ItemPost key={el.id} post={el}/>)}

        </div>
    );
};

export default Post;