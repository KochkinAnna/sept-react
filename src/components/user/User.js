const User = ({user, setUserChoose}) => {
    const {id, name} = user;
    return (
        <div>
            <div>ID: {id}</div>
            <div>NAME: {name}</div>
            <button onClick={()=>setUserChoose(user)}> Click to choose </button>
        </div>
    );
};

export {User};
