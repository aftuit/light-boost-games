import { LOGIN_STATE } from "../../tools/const"

const initialState = {
    isLogin: false,
    isModal: false
}

export const loginReducer = (state=initialState, action) => {
    if(action.type === LOGIN_STATE){
        return{
            ...state,
            ...action.payload
        }
    }
    return state
}