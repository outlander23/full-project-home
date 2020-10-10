import React,{Component} from 'react';

import {NavLink,Link} from "react-router-dom";
import Sidebar from "../navbar/sidebar";

class Table extends Component{
	

	render(){
	
	const {title,testers,hosts}=this.props;
	return (
		
		
   <tr>
      <td>{title}</td>
      <td>{testers}</td>
      <td>{hosts}</td>
    </tr>

			
			
			
			
		
	
		);
	}







}




export default Table;
