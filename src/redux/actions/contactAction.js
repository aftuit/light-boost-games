import { toast } from "react-toastify";
import { CONTACT_STATE } from "../../tools/const";

export function contactAction(data) {
    return{
        type: CONTACT_STATE,
        payload: data
    }
}

export const sendContacts = (event, errors, values) => {
    return function(dispatch) {
        dispatch(contactAction({send: true}))
        toast('Ok, We will contact with you soon !')
    }
}
