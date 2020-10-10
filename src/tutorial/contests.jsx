import React,{Component} from 'react';
import Table from './contest';

import {NavLink,Link} from "react-router-dom";
import Sidebar from "../navbar/sidebar";
import http from "../http/httpService";
import Host from "./host";
const endPoint="http://mah2020.herokuapp.com/api/contests/"
class Contests extends Component{

	state={
	
	  contest: [
	  {
            "id": "o~MLr",
            "hosts": [
                "o~MJk"
            ],
            "testers": [
                "o~MKQ"
            ],
            "title": "String operation 1(Edu)",
            "text": "Restored from old",
            "start_time": "2020-09-11T15:00:00+06:00",
            "end_time": "2020-09-12T14:59:00+06:00",
            "group": "public"
        }
	
	]
	}
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
	
	
	
	return (
			<React.Fragment>
			<div className="wrapper d-flex align-items-stretch">

			<Sidebar />
			
			<div className="container m-4 ">
			
			 <table className="table table-bordered table-hover">
     		<thead className="bg-primary">
	 		<tr>
      
      		<th scope="col">Contest Name</th>
      		<th scope="col">Hosts</th>
      		<th scope="col">Testers</th>
      		
      
    		</tr>
     		</thead>
     		<tbody>
     		
     		{this.state.contest.map(contest => 
     
	<Table
	
	
		title={contest.title}
		testers={contest.testers}
		hosts={contest.hosts}
	
	
	/>)}
     		
     		</tbody>
     		</table>

			</div>
			</div>
			
			</React.Fragment>
	
		);
	}
}
export default Contests;
