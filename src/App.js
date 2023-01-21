import {Users, SpaceX} from "./components";

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