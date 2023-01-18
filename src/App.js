import React from "react";
import {RickandmortyAll} from "./Components/RickandmortyAll/RickandmortyAll";

import './Components/RickandmortyAll/RickandmortyAll.css'
import './Components/Rickandmorty/Rickandmorty.css'

const App = () => {
    return (
        <div className={'wrap'}>
            <h1>The Rick and Morty</h1>
            <div className={'allchar'}><RickandmortyAll/></div>
        </div>
    );
};

export {App};