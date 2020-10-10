import React from 'react';
import Form from "./form";
import http from "../http/httpService";
import Sidebar from "../navbar/sidebar";

const endPoint="http://mah2020.herokuapp.com/api/register/";

class Register extends Form {
    
    state = {
        data: {email: "", username: "", password: ""},
        errors: {}
    };
    
    
    
   handleSubmit = async (event) => {
    	const {username,password,email}=this.state.data;
        event.preventDefault();
        const errors = this.validate();
        this.setState({errors: errors || {}});
        if (errors) return;
        
       const info={ 'username' : username, 'password': password , 'email':email}
       const {data:jwt}= await http.post(endPoint,info);
       localStorage.setItem("token",jwt['jwt']);
      
       if (jwt['detail']==="User already exists"){
        			
       		alert(jwt['detail']);
       		return (null);

       }
       
       window.location = "/home" ;
   
    

    };
    
    render() {
        return (
        <React.Fragment>
        <div className="wrapper d-flex align-items-stretch">
        <Sidebar />
            <div className="container m-4">
                <h2>Register</h2>
                <form >
                    {this.renderInput("email", "Email", "text")}
                    {this.renderInput("username", "Username", "text")}
                    {this.renderInput("password", "Password", "password")}
                    {this.renderButton("Register")}
                </form>
            </div>
           </div>
          </React.Fragment>
        );
    }
}

export default Register;
