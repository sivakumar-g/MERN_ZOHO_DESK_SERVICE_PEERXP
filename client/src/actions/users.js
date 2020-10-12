
import axios from 'axios';

export const ACTION_TYPES = {
   
    LOGIN_USER: 'LOGIN_USER' ,
    REGISTER_USER:'REGISTER_USER'
   // AUTH_USER:'AUTH_USER'
};

export function registeruseraction(dataToSubmit)
{
    return ({
        type: ACTION_TYPES.REGISTER_USER,
                payload: dataToSubmit
    })
}


export function loginuseraction(dataToSubmit)
{
    return ({
        type: ACTION_TYPES.LOGIN_USER,
                payload: dataToSubmit
    })
}














































































/*
export const loginUser = (dataToSubmit)=> dispatcht=>{

axios.post('http://localhost:4000/users/authenticate', dataToSubmit)
.then(res=>
    {
        dispatcht({
            type: ACTION_TYPES.LOGIN_USER,
            payload: res.data
        })
    })
    
}
  
*/

/*
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
*/


 /*   
const request = axios.post('http://localhost:4000/users/authenticate', dataToSubmit)
.then(response => response.data)
//console.log(request);

return {
type: ACTION_TYPES.LOGIN_USER, 
payload: request
}
*/

// console.log(dataToSubmit);
/*var request;
    return{ type: ACTION_TYPES.LOGIN_USER,
        payload : request = axios.post('http://localhost:4000/users/authenticate', dataToSubmit)
        .then(response =>
          response.data//  {console.log(response.data);}
            )
           
         } // console.log(request);
*/











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