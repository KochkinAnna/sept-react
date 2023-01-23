import {useState} from "react";

import {Posts, Users} from "./components";

const App = () => {
    const [userID, setUserID] = useState(null);
    return (
        <div>
            <Users setUserID={setUserID}/>
            {userID && <Posts userID={userID}/>}
        </div>
    );
};

export {App};