import {useContext} from "react";
import {Outlet} from "react-router-dom";

import {MyContext} from "../../index";

import {Users} from "../../components";

const UsersPage = () => {
    const context = useContext(MyContext);

    return (
        <div>
            <div style={{margin:'20px'}}>
               {/*<div>name:{context.name}</div>*/}
               {/* <div>name:{context.age}</div>*/}
                {JSON.stringify(context)}
            </div>
            <hr/>
            <Users/>
            <Outlet/>
        </div>
    );
};

export {UsersPage};