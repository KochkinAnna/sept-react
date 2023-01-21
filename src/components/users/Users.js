import {useEffect, useState} from "react";

import {User} from "../user/User";

import {userService} from "../../api/userService";

import './Users.css'


const Users = () => {

    const [users, setUsers] = useState([]);
    const [userChoose, setUserChoose] = useState(null);

    useEffect(() => {
        userService.getAll().then(value => value.data).then(value => setUsers([...value]))
    }, [])

    return (
        <div className={'usersandselected'}>
            <div className={'usersColumn'}>
                <h1>Users:</h1>
                <div className={'margin'}> {users.map(user => <User key={user.id} user={user} setUserChoose={setUserChoose}/>)} </div>
            </div>

            <div className={'selectedUserColumn'}>
                <h1> Selected user: </h1>
                <div className={'margin'}> {userChoose && <User user={userChoose}/>}</div>
            </div>

        </div>
    )
        ;
};

export {Users};