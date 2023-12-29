import axios from 'axios';
import { SET_LOADER,
    CLOSE_LOADER,
    SET_TOKEN,
    REGISTER_ERRORS,
    LOGIN_ERRORS
} from '../types/UserTypes';

export const postRegister = (state) => {
    return async (dispatch) => {
        
        console.log(state);

        const config = {
        headers: {
            'Content-Type': 'application/json',
        },
        };
        dispatch({type: SET_LOADER});
        try {
        const {data} = await axios.post("http://localhost:5000/register", state, config);
        dispatch({type: CLOSE_LOADER});
        localStorage.setItem('myToken', data.token);
        dispatch({type: SET_TOKEN, payload: data.token})   
        console.log("account acc created"); 
    } catch (error) {
        dispatch({type: CLOSE_LOADER});
        dispatch({type: REGISTER_ERRORS, payload: error.response.data.errors});
        console.log('Error responses here!')
        console.log(error.response)
        }
    }
}

export const postLogin = (state) => {
    return async(dispatch) => {
        const config = {
            headers: {
                'Content-Type': 'application/json',
            },
        };
        try { 
            dispatch({type: SET_LOADER});
            const {data} = await axios.post("http://localhost:5000/login", state, config);
            dispatch({type: CLOSE_LOADER});
            localStorage.setItem('myToken', data.token);
            dispatch({type: SET_TOKEN, payload: data.token})   
            console.log("login successful"); 
        } catch (error) {
            dispatch({type: CLOSE_LOADER});
            dispatch({type: LOGIN_ERRORS, payload: error.response.data.errors});
            console.log('Error responses here!')
            console.log(error.response)
            }
    };
}