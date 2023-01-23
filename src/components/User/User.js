import {useState} from "react";
import {postService} from "../../api";
import {Posts} from "../Posts/Posts";
import {Post} from "../Post/Post";

const User = ({user, setUserId}) => {
    const {id, name, username, email} = user;
    const [posts, setPosts] = useState([]);

    const getPosts = () => {
        postService.getByUserID(id).then(({data}) => setPosts([...data]))
    }

    return (
        <div>
            <div>ID: {id}</div>
            <div>Name: {name}</div>
            <div>Username: {username}</div>
            <div>e-mail: {email}</div>
            {!posts.length&& <button onClick={() => getPosts()}>Posts</button>}
            {!!posts.length && <button onClick={() => setPosts([])}>Hide posts</button>}
            <div>{posts.map(post => JSON.stringify(post))}</div>


        </div>
    );
};

export {User};