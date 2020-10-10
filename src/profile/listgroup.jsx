import React,{Component} from 'react';
class Listgroup extends Component{

     
	
	render(){
	const{ thead, td}=this.props;
	return (
	

	

  	
  		<tr>
  			<td><b>{thead}</b></td>
  			<td>{td}</td>
  		</tr>
  	
  	

	

	
	);
	}
}
export default Listgroup;
