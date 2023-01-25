import {CarForm, Cars} from "./components";
import {useEffect, useState} from "react";
import {carService} from "./services";

const App = () => {
    const [cars,setCars]=useState([]);
    const [updateCar,setUpdateCar]=useState(null);

    useEffect(()=>{
        carService.getAll().then(({data})=>setCars([...data]))
    },[])
    return (
        <div>
            <h1> CARS </h1>
            <h2>Please fill out this form:</h2>

            <CarForm setCars={setCars} updateCar={updateCar}/>

            <hr/>
            <h2>Check it out ... o_O </h2>

            <Cars cars={cars} setUpdateCar={setUpdateCar}/>
        </div>
    );
};

export {App};