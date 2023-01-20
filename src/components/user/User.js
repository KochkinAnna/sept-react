import './User.css'

const User = ({user, setUserChoose}) => {
    const {id, name} = user;
    return (
        <div className={'singleUser'}>
            <div>ID: {id}</div>
            <div>NAME: {name}</div>
            <button onClick={()=>setUserChoose(user)}> Select </button>
        </div>
    );
};

export {User};
