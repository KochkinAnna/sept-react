import {Users} from "./components/users/Users";
import {SpaceX} from "./components/spaceX/SpaceX";

import './App.css'

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