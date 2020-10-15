import React, { Component ,useState,useEffect,Fragment} from "react";
import axios from 'axios'
import Table from 'react-bootstrap/Table'
import ListGroup from 'react-bootstrap/ListGroup'


export default function Gettickets() {
const [ticket, setTicket] = useState(null)
   

useEffect(() => {
        console.log("gettickets");
        getTickets();
        console.log(ticket)
    }, [])
        const getTickets = () => {

      let  tokenc= localStorage.getItem('token'); 
      let dataToSubmit = {
                token : tokenc}

      axios.post('http://localhost:4000/tickets/mytickets', dataToSubmit)
      .then(res=>{
        setTicket(res.data);
  /*
  var obj = JSON.parse(res.data) 
  setTicket(JSON.parse(res.data))
*/ 
  }//res

      )}
        
 if(ticket)
 {
    return (    
       <div>

{

ticket?.data?.map((breakpoint, idx) => (
  <ListGroup horizontal={breakpoint} className="my-10" key={idx}>  <br></br>
  <br></br><ListGroup.Item> Ticket Number : {breakpoint.ticketNumber} </ListGroup.Item>
    <ListGroup.Item>Subject :  {breakpoint.subject}</ListGroup.Item>
    <ListGroup.Item>Tiket Status :  {breakpoint.status}</ListGroup.Item>
    <ListGroup.Item>Department :  {breakpoint.department.name}</ListGroup.Item>
  

  </ListGroup>
))

 }
       </div>
          )
}
else{
  return(
      <div><h1>Please Hold on ...</h1></div>
  )

}

}


































{/** <div>{ ticket?.data?.map(datas=> 
        {return(
<div key = {datas.id}>
  {
  <h2>  {datas.id}  </h2>
  }  </div>
        )}
        )}  </div>

 */}

{/**
{ticket?.data?.map((breakpoint, idx) => (
        <ListGroup horizontal={breakpoint} className="my-10" key={idx}>
          <ListGroup.Item>{breakpoint.id} </ListGroup.Item>
          <ListGroup.Item>renders horizontally</ListGroup.Item>
          <ListGroup.Item>on {breakpoint.id}</ListGroup.Item>
          <ListGroup.Item>and above!</ListGroup.Item>
        </ListGroup>
      ))

*/}












