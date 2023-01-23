import {useEffect, useState} from "react";

import {Post} from "../Post/Post";

import {postService} from "../../api";

const Posts = ({userID}) => {
    const [posts,setPosts] = useState ([]);

    useEffect(() => {
            postService.getByUserID(userID).then(({data}) => setPosts([...data]))
        },
        [userID])

    return (
        <div>
            {posts.map(post=><Post key = {post.id} post={post}/>)}
        </div>
    );
};


export {Posts};