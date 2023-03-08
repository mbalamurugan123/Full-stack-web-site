import {Link} from 'react-router-dom';
import './css/front.css';
function Index(){
  return(
    <div>
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
      <div>
       <p>Welcome to the Main Page</p> 
      </div>
    </div>
  );
}
export  default Index;