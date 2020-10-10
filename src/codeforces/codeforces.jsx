import React,{Component} from 'react';
import http from "../http/httpService";
import {NavLink,Link} from "react-router-dom";
import Sidebar from "../navbar/sidebar";
import Ctabel from "./mintable";

let endPoint="https://mah2020.herokuapp.com/api/cf_problem/"





class Codecorces extends Component{
	state={

	 itemsCount: 10,
	 pageSize:1,
	  currentPage: 1,
	  contest: [
	 
	]
	}
	 handlePageChange= page =>{
	 
	 
   	
   																														   									this.setState({currentPage:page});
   																														   																									   																																						   									
   };
	
	async componentDidMount(){
		 try{
		 const data = await http.get(endPoint);
		 const contest= data['data']['results'];
		 this.setState({contest});
		 
		 }
		 catch (ex){
		   alert("servar error");
		 
		 }
		
	
	};
	
	
	render(){
	
	const {currentPage,pageSize,itemsCount}=this.state;
	return (
	<React.Fragment>
			<div className="wrapper d-flex align-items-stretch">

			<Sidebar />
			
			<div className="container m-4 ">
			<h2>Most solved problems in Codeforces </h2>
			 <table className="table table-bordered table-hover">
     		<thead className="bg-primary">
	 		<tr>
      
      		<th scope="col">Problem Name</th>
      		<th scope="col">Total Solve</th>
      		<th scope="col">Solvers</th>
      		
      
    		</tr>
     		</thead>
     		<tbody>
     		
     		
     		{this.state.contest.map(contest => 
     
	<Ctabel
	
	
		problem_name={contest.problem_name}
		total_solve={contest.total_solve}
		problem_link={contest.problem_link}
		solver_list={contest.solver_list}
	
	
	/>)}
     		
     		</tbody>
     		</table>
			
                
			</div>
			</div>
			
			</React.Fragment>
   
			
			
			
			
		
	
		);
	}







}




export default Codecorces;
