import {useReducer, useRef} from "react";

import {Cats} from "./Cats/Cats";
import {Dogs} from "./Dogs/Dogs";

import css from './Pets.module.css';

const Pets = () => {

    const catInput = useRef();
    const dogInput = useRef();

    const [state, dispatch] = useReducer(reducer, {cats: [], dogs: []}, (data) => data);

    const saveCat = () => {
        dispatch({type: 'ADD_CAT', payload: catInput.current.value})
        catInput.current.value = ''
    }
    const saveDog = () => {
        dispatch({type: 'ADD_DOG', payload: dogInput.current.value})
        dogInput.current.value = ''
    }

    const reducer = (state, action) => {
        switch (action.type) {
            case'ADD_CAT':
                const [lastCat] = state.cats.slice(-1);
                const CatId = lastCat ? lastCat.id + 1 : 0;
                return {...state, cats: [...state.cats, {id: CatId, name: action.payload}]}
            case'DELETE_CAT':
                const indexCat = state.cats.findIndex(cat => cat.id === action.payload);
                state.cats.splice(indexCat, 1)
                return {...state}
            case'ADD_DOG':
                const [lastDog] = state.dogs.slice(-1);
                const DogId = lastDog ? lastDog.id + 1 : 0;
                return {...state, dogs: [...state.dogs, {id: DogId, name: action.payload}]}
            case'DELETE_DOG':
                const indexDog = state.dogs.findIndex(dog => dog.id === action.payload);
                state.dogs.splice(indexDog, 1)
                return {...state}
            default:
                return {...state}
        }
    }

    return (
        <div className={css.Pets}>
            <div>
                Add Cat's name: <input type="text" ref={catInput}/>
                <button onClick={saveCat}> GET A CAT</button>
                <Cats cats={state.cats} dispatch={dispatch}/>
            </div>
            <div>
                Add Dog's name: <input type="text" ref={dogInput}/>
                <button onClick={saveDog}> GET A DOG</button>
                <Dogs dogs={state.dogs} dispatch={dispatch}/>
            </div>
        </div>
    );
};

export {Pets};