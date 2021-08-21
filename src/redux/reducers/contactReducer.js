
import { CONTACT_STATE } from "../../tools/const"

const initalState = {
    send: false
}

export const contactReducer = (state = initalState, action) => {
    if(action.type === CONTACT_STATE){
        return{
            ...state,
            ...action.payload
        }
    }
    return state
}