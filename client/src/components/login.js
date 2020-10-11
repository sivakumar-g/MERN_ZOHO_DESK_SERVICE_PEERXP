import React, { Component,useState } from "react";
import Axios from 'axios'
import { useDispatch } from 'react-redux';
import { loginUser,registerUser } from '../actions/users';
import user from "../reducers/user";




 function Login(props) {

    const dispatch = useDispatch();

    const [Email, setEmail] = useState("")
    const [Password, setPassword] = useState("")

const onEmailHandler = (e)=>{
    setEmail(e.currentTarget.value);
}
const onPasswordHandler = (event) => {
    setPassword(event.currentTarget.value)
}
const onSubmitHandler = (event) => {
    event.preventDefault();

    let dataToSubmit = {
        email: Email,
        password: Password
    }

   const logindata= dispatch(loginUser(dataToSubmit))
      /* .then(response => {
            if (response.payload.success) {
                alert('Logged In Successfull');
                props.history.push('/')
            } else {
                alert('Error˝')
            }
        })
*/ 
alert('Logged In Successfull'); props.history.push('/ticket');

}



        return (
            <form  onSubmit={onSubmitHandler}>
                <h3>Sign In</h3>


                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" 
                    value={Email} onChange={onEmailHandler}
                    />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" 
                    value={Password} onChange={onPasswordHandler}
                    />
                </div>

              
                <button type="submit" className="btn btn-primary btn-block">Submit</button>
               
            </form>
        );
    }

    export default Login