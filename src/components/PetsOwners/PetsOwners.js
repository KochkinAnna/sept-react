import {useAppReducer} from "../hooks/useAppReducer";
import {PetsOwner} from "../PetsOwner/PetsOwner";

const PetsOwners = () => {
    const[petsOwners]=useAppReducer((reducers)=>reducers.petsOwnersReducer)

    return (
        <div>
            {petsOwners.map(petsowner=><PetsOwner key={petsowner.id} petsOwner={petsowner}/>)}
        </div>
    );
};

export {PetsOwners};