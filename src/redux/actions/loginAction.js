
import { toast } from "react-toastify";
import { LOGIN_STATE } from "../../tools/const";


export function updateLoginState(data) {
    return {
        type: LOGIN_STATE,
        payload: data
    }
}

export function loginAction(event, errors, values, history) {
    return function async(dispatch) {

        if(values.name !== '' && values.email !== '' && values.password !== ''){
        dispatch(updateLoginState({isLogin: true}));
        history.push('/home');
        toast.success('Signed in Successfully');
    }
}
}

export function signOut (history) {
    return function (dispatch){
        dispatch(updateLoginState({isLogin: false, isModal: false}))
        history.replace('/',`${history.location.pathname}`)
    }
}