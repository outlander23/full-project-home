import React,{Component} from 'react';

import {NavLink,Link} from "react-router-dom";
import Sidebar from "../navbar/sidebar";

class Solver extends Component{


	
	

	render(){
	
	
	
	
	
	return (
		
		
 
   <div>
   
   
     {this.props.solver_list.map(user =>user+', ' )}
     {"Kanaon"}
   
   </div>
			
			
			
			
		
	
		);
	}







}




export default Solver;
