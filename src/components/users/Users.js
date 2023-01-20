import {useEffect, useState} from "react";
import {User} from "../user/User";
import {userService} from "../../api/userService";

const Users = () => {

    const [users, setUsers] = useState([]);
    const [userChoose, setUserChoose] = useState(null);

    useEffect(() => {
        userService.getAll().then(value => value.data).then(value => setUsers([...value]))
    }, [])

    return (
        <div>
            <h1>
                Users:
            </h1>
            {users.map(user => <User key={user.id} user={user} setUserChoose={setUserChoose}/>)}

            <h1> Selected user: </h1>
            {userChoose && <User user={userChoose}/>}

        </div>
    );
};

export {Users};