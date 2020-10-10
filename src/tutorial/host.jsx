import React,{Component} from 'react';
import Table from './contest';

import {NavLink,Link} from "react-router-dom";
import Sidebar from "../navbar/sidebar";
import http from "../http/httpService";

const endPoint="http://mah2020.herokuapp.com/api/user/user_id="
class Host extends Component{
	
	state={
	
	  data: [
	  {
          "id": "o~MMQ",
    "username": "shakib75bd",
    "name": "Shakib Hossain Shanto",
    "email": null,
    "cf_handle": "shakib112",
    "uri_id": "not_added",
    "batch": 12,
    "solve": 118,
    "accepted": 125,
    "wrong": 97,
    "limit": 8,
    "error": 3,
    "other": 0,
    "user": null
        }
	
	]
	}
	
	
	
	render(){
	const {username,name}=this.state.data;
	
	
	
	
	
	return (
	<h1> {username} </h1>
	
	
	);
	
	}
}

export default Host;
