import React,{Component} from 'react';

import {NavLink,Link} from "react-router-dom";
import Sidebar from "../navbar/sidebar";
import Solver from "./solvetabel";
class Ctabel extends Component{
	

	render(){
	
	const { problem_name, total_solve, problem_link, solver_list }=this.props;
	return (
		
		
   <tr>
      <td><a href={problem_link} > {problem_name}</a></td>
      <td>{total_solve}</td>
      <td><Solver solver_list={solver_list} /> </td>
    </tr>

			
			
			
			
		
	
		);
	}







}




export default Ctabel;
