import {useLocation, useParams} from "react-router-dom";

import {PostsDetails} from "../../components";

import css from './PostDetailPage.module.css'

const PostDetailPage = () => {
    const {postId} = useParams();
    const {state} = useLocation();


    return (
        <div className={css.PostDetailPage}>
            <PostsDetails postId={postId} state={state}/>
        </div>
    );
};

export {PostDetailPage};