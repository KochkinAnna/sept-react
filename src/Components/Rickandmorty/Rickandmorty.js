// 2. Створити компонент який описує персонажа (властивості id,name,status,species,gender,image) з цього апі
// https://rickandmortyapi.com/
// https://rickandmortyapi.com/api/character
// Створити 6 персонажів

const Rickandmorty = ({rickandmorty}) => {
    const {id,name,status,species,image}=rickandmorty;
    return (
        <div>
            <div>id:{id}</div>
            <div>name:{name}</div>
            <div>status:{status}</div>
            <div>species:{species}</div>
            <img src={image} alt={name}/>
        </div>
    );
};

export {Rickandmorty};