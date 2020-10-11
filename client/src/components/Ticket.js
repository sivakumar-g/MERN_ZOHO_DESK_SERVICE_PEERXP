

import React, { Component ,useState} from "react";
import Axios from 'axios'
import { useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { loginUser,registerUser } from '../actions/users';

 
function Ticket(props) {

    const dispatch = useDispatch();

    const [department, setdepartment] =  useState("")
const [category, setcategory] =  useState("")
const [subject, setsubject] =  useState("")
const [description, setdescription] =  useState("")
   
const ondepartmentHandler = (event) => {
        setdepartment(event.currentTarget.value)
    }

    const oncategoryHandler = (event) => {
        setcategory(event.currentTarget.value)
    }

    const onsubjectHandler = (event) => {
        setsubject(event.currentTarget.value)
    }

    const ondescriptionHandler = (event) => {
        setdescription(event.currentTarget.value)
    }
    const onSubmitHandler = (event) => {
        event.preventDefault();

        let body = {
           
        }
        /*
        dispatch(ticket(body))
            .then(response => {
                if (response.payload.success) {
                    props.history.push("/login")
                } else {
                    alert("Failed to sign up")
                }
            })
            */
    } // submit


    return (
        <form onSubmit={onSubmitHandler}
        >
            <h3>Submit a Ticket</h3>
            <h2>Ticket Information</h2>

            <div className="form-group">
                <label> Department</label>
                <input type="text" className="form-control" placeholder="Department" 
                 value={department} onChange={ ondepartmentHandler }
                />
            </div>

           
            <div className="form-group">
                <label>Category </label>
                <input type="email" className="form-control" placeholder="Category" 
                value={category} onChange={oncategoryHandler}/>
            </div>

            <div className="form-group">
                <label>Subject</label>
                <input type="text" className="form-control" placeholder="Subject" 
                value={subject} onChange={onsubjectHandler}/>
            </div>


            <div className="form-group">
                <label>Description</label>
                <input type="text" className="form-control" placeholder="Description" 
                value={description} onChange={ondescriptionHandler}/>
            </div>


            <button type="submit" className="btn btn-primary btn-block">Submit</button>
          
        </form>
    );
}
export default withRouter(Ticket)