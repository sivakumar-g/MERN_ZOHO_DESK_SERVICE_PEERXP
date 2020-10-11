
import axios from 'axios';

export const ACTION_TYPES = {
   
    LOGIN_USER: 'LOGIN_USER' ,
    REGISTER_USER:'REGISTER_USER'
   // AUTH_USER:'AUTH_USER'
};


export function registerUser(dataToSubmit) {
console.log(dataToSubmit);
    const request = axios.post('http://localhost:4000/users/register', dataToSubmit)
        .then(response => response.data)
console.log(request);
    return {
        type: ACTION_TYPES.REGISTER_USER, 
        payload: request
    }
}

export function loginUser(dataToSubmit) {
    console.log(dataToSubmit);
    const request = axios.post('http://localhost:4000/users/authenticate', dataToSubmit)
        .then(response => response.data)

    return {
        type: ACTION_TYPES.LOGIN_USER,
        payload: request
    }
}


//Need to send(POST) data to zoho desk api
/*
export function Ticket(dataToSubmit) {

    const request = axios.post('http://localhost:4000/users/ticket', dataToSubmit)
        .then(response => response.data)

    return {
        type: ACTION_TYPES.LOGIN_USER,
        payload: request
    }
}
*/