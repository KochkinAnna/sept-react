const PetsOwner = ({petsOwner}) => {
    const {id, name, surmname, age, petsID, petsName, catORdog} = petsOwner;
    return (
        <div>
            <div>id: {id}</div>
            <div>name: {name}</div>
            <div>surmname: {surmname}</div>
            <div>age: {age}</div>
            <div>petsID: {petsID}</div>
            <div>petsName: {petsName}</div>
            <div>kind of pet: {catORdog}</div>
            <hr/>
        </div>
    );
};

export {PetsOwner};