

import React, { Component ,useState,useEffect} from "react";
import axios from 'axios'
import { useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { loginUser,registerUser } from '../actions/users';

 
function Ticket(props) {
    useEffect(() => {
        console.log("ticket component")
    }, [])

    const dispatch = useDispatch();

    const [department, setdepartment] =  useState("PWSLab Devops Support")
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
       let  tokenc= localStorage.getItem('token')
        let dataToSubmit = {
            
                subject : subject,
                //departmentId : "7189000000051431",
                  token : tokenc,
                  category:category,
                  description:description

                
           
        }
        axios.post('http://localhost:4000/tickets/create-ticket', dataToSubmit)
        .then(res=>
            { console.log(res.data);
                if(res.data)
            {
                alert("Ticket Created" )
                props.history.push('/')

            }
               // dispatch(loginuseraction(res.data));
             
            })
        
    } // submit


    return (
        <form onSubmit={onSubmitHandler}
        >
            <h3>Submit a Ticket</h3>
            <h2>Ticket Information</h2>

            <div className="form-group">
                <label> Department</label>
                <input type="text" className="form-control" placeholder="Department" 
                 value={department} // onChange={ ondepartmentHandler }
                />
            </div>

           
            <div className="form-group">
                <label>Category </label>
                <input type="text" className="form-control" placeholder="Category" 
                value={category} onChange={oncategoryHandler}      />
            </div>

            <div className="form-group">
                <label>Subject *</label>
                <input type="text" className="form-control" placeholder="Subject" 
                value={subject} onChange={onsubjectHandler} required />
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









/*

  
const getTickets = () => {

        
    let  tokenc= localStorage.getItem('token'); 
    const dataToSubmit = {
              token : tokenc}


 axios.get('http://localhost:4000/users/mytickets', dataToSubmit)
    .then(res=>
        { console.log(res.data);
            if(res.data)
        {
            alert("Mytickets")
        }
     })
}

*/