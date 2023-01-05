import React, {FC} from 'react';
import {PostType} from "../../../../redux/reducers/profile-reducer";

const ItemPost: FC<{ post: PostType }> = ({post}) => {
    return (
        <div>
            {post.message}

        </div>
    );
};

export default ItemPost;