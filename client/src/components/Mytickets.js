
import React, { Component ,useState,useEffect} from "react";
import axios from 'axios'
import { useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { loginUser,registerUser } from '../actions/users';

 
 function Mytickets() {


    useEffect(() => {
//        getTickets()
console.log("did mount");
}, [])
  
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

return (
        <div>
            Hi There
        </div>
    )
}

export default Mytickets