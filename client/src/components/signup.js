import React, { Component ,useState} from "react";
import axios from 'axios'
import { useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { loginUser,registerUser, registeruseraction } from '../actions/users';


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
       /*var registerdata = null; 
       registerdata = dispatch(registerUser(dataToSubmit))
       */
      axios.post('http://localhost:4000/users/register', dataToSubmit)
      .then(res=>
          {console.log(res.data.success);
              dispatch(registeruseraction(res.data));
              if (res.data.success) {
               alert('Sign UP Successfull');
               props.history.push('/sign-in')
           } else {
               alert('Error˝')
           }

          })
      
        
    }


    return (
        <form onSubmit={onSubmitHandler}
        >
            <h3>Sign Up</h3>

            <div className="form-group">
                <label> name</label>
                <input type="text" className="form-control" placeholder="name" 
                 value={Name} onChange={onNameHandler} required
                />
            </div>

           
            <div className="form-group">
                <label>Email address</label>
                <input type="email" className="form-control" placeholder="Enter email" 
                value={Email}  onChange={onEmailHandler}  required
                />
            </div>

            <div className="form-group">
                <label>Password</label>
                <input type="password" className="form-control" placeholder="Enter password" 
                value={Password} onChange={onPasswordHandler}  required />
            </div>

            <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
          
        </form>
    );
}
export default withRouter(Signup)












