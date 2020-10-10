import React,{Component} from 'react';
import { Link } from "react-router-dom";
class Navlist extends Component{
	
	
	render(){
	
	const {label,link}=this.props;
	
	return (
			<li class="nav-item nav-link">
				<Link 
				to={link}
				>
				{label}
				</Link>
			</li>
		);
	}
}
export default Navlist;
