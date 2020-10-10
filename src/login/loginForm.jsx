import Sidebar from "../navbar/sidebar";

import Form from "./form";
import React from 'react';

import http from "../http/httpService";

const endPoint="http://mah2020.herokuapp.com/api/login/";



class Login extends Form {
    
    state = {
        data: { username: "", password: ""},
        errors: {}
    };
    
    handleSubmit = async (event) => {
    	const {username,password}=this.state.data;
        event.preventDefault();
        const errors = this.validate();
        this.setState({errors: errors || {}});
        if (errors) return;
        
       const info={ 'username' : username, 'password': password}
       const {data:jwt}= await http.post(endPoint,info);
       console.log(jwt['jwt']);
       localStorage.setItem("token",jwt['jwt']);
       
       window.location = "/home" ;
   
    

    };
   
    
    render() {
        return (
        <React.Fragment>
        <div className="wrapper d-flex align-items-stretch">
        <Sidebar />
            <div className="container ml-4 m-4">
                <h2>Login</h2>
                <form >
                    {this.renderInput("username", "Username", "text")}
                    {this.renderInput("password", "Password", "password")}
                    {this.renderButton("login")}
                </form>
            </div>
            </div>
           </React.Fragment>
        );
    }
}

export default Login;
