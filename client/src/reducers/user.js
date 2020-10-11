
import { 
    ACTION_TYPES
 } from "../actions/users";

export default function (state = {}, action) {
    switch (action.type) {
     
        case ACTION_TYPES.REGISTER_USER:
            console.log(action.type);   
        console.log(action.payload);
           
            return { ...state, register: action.payload }
            break;

            case ACTION_TYPES.LOGIN_USER:
                console.log(action.type);   
                console.log(action.payload);
                   
            return { ...state, loginSuccess : action.payload }
                break;
       
                
     /*   case AUTH_USER:
            return { ...state, userData: action.payload }
            break;
        */
       default:
            return state;
    }
}
