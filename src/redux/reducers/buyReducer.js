import { BUY_STATE } from "../../tools/const"

const initialState = {
    isBuy: false,
    itemPrice: '',
    cards: [],
    filteredCards: [],
    items: []
}

export const buyReducer = (state=initialState, action) => {
    if(action.type === BUY_STATE){
        return{
            ...state,
            ...action.payload
        }
    }
    return state
}