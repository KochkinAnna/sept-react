import './SpaceX.css'
import {useEffect, useState} from "react";
import axios from "axios";


const SpaceX = () => {
    const [launch, setLaunch]= useState([])
    useEffect(()=> {
        axios.get('https://api.spacexdata.com/v3/launches/').then(value => value.data).then(value => setLaunch([...value]))
    },[])
    return (
        <div>
            <h1>SpaceX launch :</h1>
            <div className={'wrap'}>
            {launch.sort (item => item.launch_year-item.launch_year).filter(item => item.launch_year !=='2020').map(item => {
                return (

                        <div className={'launch'} key={item.flight_number}>
                        <img src={item.links.mission_patch_small} alt={item.mission_name}/>
                        <div className={'text'}>
                        <div>MISSION NAME: {item.mission_name}</div>
                        <div>LAUNCH YEAR: {item.launch_year}</div>
                        </div>
                    </div>
                )
            }
                )}</div>
        </div>
    );
};

export {SpaceX};