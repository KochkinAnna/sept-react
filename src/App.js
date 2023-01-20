import {Users} from "./components/users/Users";

import './App.css'
import {SpaceX} from "./components/spaceX/SpaceX";

const App = () => {
    return (
        <div className={'App'}>
            <div className={'block'}>
                <Users/>
            </div>

            <div className={'spaceXblock'}><SpaceX/></div>

        </div>
    );
};

export {App};