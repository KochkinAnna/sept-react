const Car = ({car,setUpdateCar}) => {
    const {id, brand, price, year} = car;


return (
    <div>
        <div>ID: {id}</div>
        <div>BRAND: {brand}</div>
        <div>PRICE: {price}</div>
        <div>YEAR: {year}</div>
        <button onClick={()=>setUpdateCar(car)}>UPDATE</button>
        <button>DELETE</button>
        <hr/>
    </div>
);
};

export {Car};