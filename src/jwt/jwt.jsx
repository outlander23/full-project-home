import React, { Component} from 'react';

class Jwt extends Component {
	state={};
  	componentDidMount (){
  	try{
    	const jwty =localStorage.getItem("token");
    	const user =jwtDecode(jwty);
    	console.log(user);
    	this.setState({user});
    	}
    catch (ex){
    
    }
    };
    
    return (this.state);
}
export default Jwt;
