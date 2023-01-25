import {carService} from "../../services";

const Car = ({car,setUpdateCar,setCars}) => {
    const {id, brand, price, year} = car;


return (
    <div>
        <div>ID: {id}</div>
        <div>BRAND: {brand}</div>
        <div>PRICE: {price}</div>
        <div>YEAR: {year}</div>
        <button onClick={()=>setUpdateCar(car)}>UPDATE</button>
        <button onClick={() => {
                carService.deleteById(id).then (async ()=>{const {data}=await carService.getAll();
                setCars([...data])}).catch(err=> console.log(err))
            }
        }>DELETE</button>
        <hr/>
    </div>
);
};

export {Car};