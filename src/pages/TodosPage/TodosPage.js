import {Todos} from "../../components";

import {Outlet} from "react-router-dom";

const TodosPage = () => {
    return (
        <div>
            <Todos/>
            <Outlet/>
        </div>
    );
};

export {TodosPage};