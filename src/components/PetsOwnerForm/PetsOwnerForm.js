import {useForm} from "react-hook-form";
import {useAppReducer} from "../hooks/useAppReducer";
import {petsOwnersActions} from "../../reducers";

const PetsOwnerForm = () => {
        const {register, reset, handleSubmit} = useForm();

        const [, dispatch] = useAppReducer(value => value.petsOwnersReducer);

        const save = (petsOwner) => {
            dispatch(petsOwnersActions.ADD(petsOwner))
            reset()
        }

        return (
            <div>
                <form onSubmit={handleSubmit(save)}>
                    <input type="text" placeholder={'name'}{...register('name')}/>
                    <input type="text" placeholder={'surmname'}{...register('surmname')}/>
                    <input type="text" placeholder={'age'}{...register('age', {valueAsNumber: true})}/>
                    <input type="text" placeholder={'petsID'}{...register('petsID', {valueAsNumber: true})}/>
                    <input type="text" placeholder={'petsName'}{...register('petsName')}/>
                    <input type="text" placeholder={'cat or dog'}{...register('catORdog')}/>
                    <button> SAVE</button>
                </form>
            </div>
        );
    }
;

export {PetsOwnerForm};