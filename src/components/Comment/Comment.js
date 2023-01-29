import {useNavigate} from "react-router-dom";

const Comment = ({comment, post}) => {
    const navigate = useNavigate();
    const {postId, id, name, email, body} = comment;

    return (
        <div>
            <button onClick={() => navigate(id.toString(), {state: post})}>postId:{postId}</button>
            <div>id:{id}</div>
            <div>name:{name}</div>
            <div>email:{email}</div>
            <div>body:{body}</div>
            <hr/>
        </div>
    );
};

export {Comment};