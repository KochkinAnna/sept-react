import {Outlet} from "react-router-dom";

import {PetsOwners} from "../../components";


const PetsOwnersPage = () => {
    return (
        <div>
            <PetsOwners/>
            <Outlet/>
        </div>
    );
};

export {PetsOwnersPage};