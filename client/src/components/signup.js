import React, { Component ,useState} from "react";
import Axios from 'axios'
import { useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { loginUser,registerUser } from '../actions/users';


function Signup(props) {

    const dispatch = useDispatch();

    const [Email, setEmail] = useState("")
    const [Name, setName] = useState("")
    const [Password, setPassword] = useState("")
    
    const onEmailHandler = (event) => {
        setEmail(event.currentTarget.value)
    }

    const onNameHandler = (event) => {
        setName(event.currentTarget.value)
    }

    const onPasswordHandler = (event) => {
        setPassword(event.currentTarget.value)
    }

    
    const onSubmitHandler = (event) => {
        event.preventDefault();

        let dataToSubmit = {
            email: Email,
            password: Password,
            name: Name,
        }
      const registerdata = dispatch(registerUser(dataToSubmit))
           .then(response => {
                if (response.payload.success) {
                    alert("Congratulations! Registeration Succesfull");
                    props.history.push("/login")
                } else {
                    alert("Failed to sign up")
                }
            }) //then
            
        
    }


    return (
        <form onSubmit={onSubmitHandler}
        >
            <h3>Sign Up</h3>

            <div className="form-group">
                <label> name</label>
                <input type="text" className="form-control" placeholder="name" 
                 value={Name} onChange={onNameHandler}
                />
            </div>

           
            <div className="form-group">
                <label>Email address</label>
                <input type="email" className="form-control" placeholder="Enter email" 
                value={Email}  onChange={onEmailHandler}
                />
            </div>

            <div className="form-group">
                <label>Password</label>
                <input type="password" className="form-control" placeholder="Enter password" 
                value={Password} onChange={onPasswordHandler}/>
            </div>

            <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
          
        </form>
    );
}
export default withRouter(Signup)