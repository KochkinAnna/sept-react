import {useState,useEffect} from "react";

import {userService} from "../../api";

import {User} from "../User/User";

const Users = ({setUserID}) => {
    const [users,setUsers] = useState ([]);

    useEffect(()=>{
        userService.getAll().then (value => value.data).then (value => setUsers([...value]))
    }, [])

    return (
        <div>
            {users.map(user=><User key = {user.id} user={user} setUserID={setUserID}/>)}
        </div>
    );
};

export {Users};