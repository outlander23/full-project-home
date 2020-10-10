import React,{Component} from 'react';
import './style.css';
import Sidebar from "../navbar/sidebar";


class Home extends Component{
	state={}
	
	render(){
	
	return (
	
	<div className="wrapper d-flex align-items-stretch">
	<Sidebar />
	<section id="banner">
				<div class="inner split">
					<section>
						<h2>Welcome to B12, a free responsive site to host contests</h2>
					</section>
					<section>
						<p>B12 will held a contest in every week. You can write your own problems & set them for upcoming contest</p>
						<ul class="actions">
							<li><a href="/contests" className="btn btn-primary">Get started</a></li>
						</ul>
					</section>
				</div>
				
				
				
				<section className="container">
				<div class="inner split">
					<div>
						<h2>Problems you shoud try !</h2>
					</div>
					<section>
						<section>
						<p>Problems of code forces are very intesstiing. We recommandd to try them !</p>
						<ul class="actions">
							<li><a href="/codeforces" className="btn btn-primary">Lets GO!</a></li>
						</ul>
					</section>
						
					</section>
				</div>
			</section>

				
			</section>
    	</div>
    	
	
	
	

	
	
	);
	}
}
export default Home;
