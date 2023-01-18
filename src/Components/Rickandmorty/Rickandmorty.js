// 2. Створити компонент який описує персонажа (властивості id,name,status,species,gender,image) з цього апі
// https://rickandmortyapi.com/
// https://rickandmortyapi.com/api/character
// Створити 6 персонажів


const Rickandmorty = ({rickandmorty}) => {
    const {id,name,status,species,image}=rickandmorty;
    return (
        <div className={'block'}>
            <h4>id: {id}</h4>
            <h4>name: {name}</h4>
            <h4>status: {status}</h4>
            <h4>species: {species}</h4>
            <img src={image} alt={name}/>
        </div>
    );
};

export {Rickandmorty};