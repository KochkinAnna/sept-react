const petsOwnersActionTypes = {
    ADD: 'ADD',
    DELETE_BY_ID: 'DELETE_BY_ID'
}

const petsOwnersActions = {
    ADD:(item)=>({type:petsOwnersActionTypes.ADD, payload:item}),
    DELETE_BY_ID:(id)=>({type:petsOwnersActionTypes.DELETE_BY_ID, payload:id}),
}

const initional = () => []



const petsOwnersReducerFunction = (state, action) => {
    switch (action.type) {
        case petsOwnersActionTypes.ADD:
            const last = state.slice(-1);
            const id = last.length ? last[0].id + 1 : 0;
            return [...state, {id, ...action.payload}]

        case petsOwnersActionTypes.DELETE_BY_ID:
            const index = state.findIndex(value => value.id===action.payload)
            state.splice(index,1)
            return {...state}

        default:
            return {...state}
    }
}


export {
    initional,
    petsOwnersReducerFunction,
    petsOwnersActions
}