import {useLocation, useParams} from "react-router-dom";

import {PostId} from "../../components";

const PostIdPage = () => {
    const {postId} = useParams();
    const {state} = useLocation();


    return (
        <div>
            <PostId postId={postId} state={state}/>
        </div>
    );
};

export {PostIdPage};