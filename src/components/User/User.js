const User = ({user, setUserID}) => {
    const {id, name, username, email}= user;


    return (
        <div>
            <div>ID: {id}</div>
            <div>Name: {name}</div>
            <div>Username: {username}</div>
            <div>e-mail: {email}</div>
            <button onClick={()=>setUserID(id)}>Posts</button>
        </div>
    );
};

export {User};