import {Outlet} from "react-router-dom";

import {Pets} from "../../components";


const PetsPage = () => {
    return (
        <div>
            <Pets/>
            <Outlet/>
        </div>
    );
};

export {PetsPage};