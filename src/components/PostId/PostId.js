import {useEffect, useState} from "react";

import {postService} from "../../services";

const PostId = ({postId, state}) => {
    const [post, setPost] = useState(null);

    useEffect(() => {
            if (state) {
                setPost({...state})
            } else {
                postService.getById(postId).then(({data}) => {
                    setPost(data)
                })
            }
        },
        [postId])
    return (
        <div>
            {post &&
                <>
                    <div>userId:{post.userId}</div>
                    <div>id:{post.id}</div>
                    <div>title:{post.title}</div>
                    <div>body:{post.body}</div>
                </>
            }
        </div>
    );
};

export {PostId};