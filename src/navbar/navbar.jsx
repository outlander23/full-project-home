import React,{Component} from 'react';
import Navlist from "./navlist";
import {NavLink,Link} from "react-router-dom";


const facebook="https://web.facebook.com/smmiloy.rahman.161/";
const fivver="https://www.fiverr.com/miloy23?up_rollout=true";

class Navbar extends Component{
	
	componentDidMount (){
  	try{
    	
    	}
    catch (ex){
    
    }
    };
    l(){
    console.log("submitfdhdfhdfhdsfhsdf");
    
    
    };
	render(){
	
	
	
	return (
	<React.Fragment>
	<nav className="navbar navbar-expand-lg navbar-light bg-primary">
  	<Link className="navbar-brand" to="/home">B12</Link>
  	
   <button 

   className="navbar-toggler collapsed" 
   type="button" 
   data-toggle="collapse" 
   data-target="#navbarCollapse" 
   aria-controls="navbarCollapse" 
   aria-expanded="false" 
   aria-label="Toggle navigation"> 
   <span class="navbar-toggler-icon"></span>
   </button>
  
   <div class="navbar-collapse collapse" id="navbarCollapse">
    <ul className="navbar-nav mr-auto">
        <NavLink className="nav-item nav-link" to="/home">Home</NavLink>
      
        <NavLink className="nav-item nav-link" to="/codeforces">Codeforces</NavLink>
        <NavLink className="nav-item nav-link" to="/contests">Contests</NavLink>
      </ul>
      
      
       <React.Fragment>
      {!this.props.user &&
      <ul className="navbar-nav ml-auto">
        <NavLink className="nav-item nav-link" to="/register">Registar</NavLink>
        <NavLink className="nav-item nav-link" to="/login">Login</NavLink>
      
    </ul>}
     </React.Fragment>
     
     
    <React.Fragment>
    {this.props.user &&
      <ul className="navbar-nav ml-auto">
        <NavLink className="nav-item nav-link" to="/profile">{this.props.user.username}</NavLink>
        <NavLink className="nav-item nav-link" to="/logout">Logout</NavLink>
    	</ul>}
    </React.Fragment>
    
    
    </div>
	</nav>
	
   </React.Fragment>
	
	);
	}
	
}
export default Navbar;
