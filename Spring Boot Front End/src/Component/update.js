import React, { useState} from "react";
import axios from "axios";
import './css/update.css';
import { Link } from "react-router-dom";

function UpdatePage() {
  const [todo, setTodo] = useState({
    firstName:'',
      lastName:'',
      mailid: '',
      number:'',
      pass: '',
  });

  const handleChange = (event) => {
    setTodo({ ...todo, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.put(`http://localhost:8080/putValues`, todo).then((res) => {
      console.log(res.data);
      setTodo({ id: "", firstName: "", lastName: "", mailid: "",pass: "", number: ""});
    });
  };
  
  return (
  
    <div>
      <div className="navbar">
      <nav>
  <ul>
    <li><Link to='/front'>Home</Link> </li>
    <li><Link to='/main'>Members</Link> </li>
    <li><Link to='/update'>Update</Link></li>
    <li><Link to='/'>Log Out</Link></li>
  </ul>
</nav>

      </div>
      
    <div className="logLogin" >
      <div className="reg">    
          <form id="regform" name="suForm" onSubmit={handleSubmit}>    
            <label className="name" ><b>Id:</b>
            </label>
            <input type="number" name="id" value={todo.id} id="uname" placeholder="Id"onChange={handleChange} />    
            <label className="name" id="lname2"><b>First Name:</b>
            </label>
            <input type="text" id="uname" placeholder="First Name" name="firstName" value={todo.firstName} onChange={handleChange} /> 
            <br /><br /> <br /><br /> 
            <label className="name" id="name" ><b>Last Name:</b>
            </label>
            <input type="text" id="uname" placeholder="Last Name" name="lastName" value={todo.lastName} onChange={handleChange} /> 
            <label className="name" id="lname" ><b>Mail Id:</b>
            </label>
            <input type="mail" id="uname" placeholder="Email Id" name="mailid" value={todo.mailid} onChange={handleChange} /> 
            <br /><br /> <br /><br /> 
            <label className="name" id="name1" ><b>Number:</b>
            </label>
            <input type="number" id="uname" name="number" value={todo.number} onChange={handleChange} /> 
            <label className="name" id="lname1"><b>Password:</b>
            </label>
            <input type="password" id="uname" name="pass" value={todo.pass} onChange={handleChange}/>
            <button className="button" type="submit">Update</button>
          </form>
 </div>
 </div>
 </div>
  );
  }
  
export default UpdatePage;