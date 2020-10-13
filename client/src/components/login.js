import React, { Component,useState } from "react";
import axios from 'axios'
import { useDispatch } from 'react-redux';
import { ACTION_TYPES, loginUser,registerUser,loginuseraction } from '../actions/users';
import user from "../reducers/user";
import { connect ,useSelector} from "react-redux";




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
        password: Password,
        
    }
 
       axios.post('http://localhost:4000/users/authenticate', dataToSubmit)
       .then(res=>
           {// console.log(res.data.success);
               dispatch(loginuseraction(res.data));
               if (res.data) {
                alert('Logged In Successfull');
                // console.log(res.data.token);
                localStorage.setItem('token',res.data.token);
                localStorage.setItem('user',res.data.success);
                //window.location.reload(true);
                props.history.push('/ticket')
            } else {
                alert('Error˝')
            }

           })



}//submit
        return (
            <form  onSubmit={onSubmitHandler}>
                <h3>Sign In</h3>


                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" 
                    value={Email} onChange={onEmailHandler} required
                    />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" 
                    value={Password} onChange={onPasswordHandler} required
                    />
                </div>

              
                <button type="submit" className="btn btn-primary btn-block">Submit</button>
               
            </form>
        );
    }

    
const mapStateToProps = state => ({
    login : state.user.loginSuccess
})

const mapActionToProps = {
loginaction : loginuseraction
}

    export default connect(mapStateToProps, mapActionToProps)(Login)















































   //props.loginaction(dataToSubmit)
  /*  var logindata = null;
    logindata= dispatch(loginUser(dataToSubmit)).then(response=>
       { console.log(response)});
*/