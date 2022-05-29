import { Action } from "./action"

export type noteType = {
    notes: string[]
}

const iniState = {
    notes:[]
}



export const notesReducer = (state:noteType =iniState,action:Action)=>{
    switch (action.type) {
        case "ADD_NOTE":
            return{
                ...state,
                notes:[...state.notes,action.payload]
            }
        default:
            return state
    }
}