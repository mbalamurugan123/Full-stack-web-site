import axios from "axios";
import { Link } from "react-router-dom";
import "./css/main.css";

import React, { useState,useEffect } from "react";
function Main(){
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
      axios.get('http://localhost:8080/getValues')
          .then(response => {
              setQuotes(response.data);
          })
          .catch(error => {
              console.log(error);
          });
  }, []);
  const [id, setId] = useState('');
   

  const handleDelete = (id) => {
    axios.delete(`http://localhost:8080/delete?id=${id}`)
      .then(response => {
        // alert('Details is deleted successfully!');
        setId('');
 
      })
      .catch(error => {
        // alert('Failed to delete the details.');
        console.error(error);
      });
  };
    return (
      <div className="body">
      <div className="navbar">
      <nav>
  <ul>
    <li><a><Link to='/front'>Home</Link> </a></li>
    <li><a><Link to='/main'>Members</Link> </a></li>
    <li><a><Link to='/update'>Update</Link> </a></li>
    <li><a><Link to='/'>Log Out</Link> </a></li>
  </ul>
</nav>

      </div>
      <div className="table">
        <table border={2}>
          <thead>
            <tr>
              <th>Id</th>
              <th>firstName</th>
              <th>lastName</th>
              <th>EmailId</th>
              <th>Number</th>
              <th>Password</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
             {quotes.map(quote =>(
              <tr key={quote.id}>
              <td>{quote.id}</td>
              <td>{quote.firstName}</td>
              <td>{quote.lastName}</td>
              <td>{quote.mailid}</td>
              <td>{quote.number}</td>
              <td>{quote.pass}</td>
              <td><button type="button" className="delbut" onClick={()=>handleDelete(quote.id)}>Delete</button></td>
              
              </tr>

             )
          
              )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default Main;