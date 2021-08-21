
import { BUY_STATE } from "../../tools/const"
export function updateBuyAction(data) {
    return{
        type: BUY_STATE,
        payload: data
    }    
}

export const moreInfoByUrl = (url_path, item, history) => {
    return function async(dispatch){
        
        dispatch(getCards(item))
       
        history.push('/home/shop/' + url_path)
    }
}

export const getCards = (item) => (dispatch) => {
    dispatch(updateBuyAction({items: item}))
}



