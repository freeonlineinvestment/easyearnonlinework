import React from 'react';
import AboutUsForm from './AboutUsForm';
import './aboutus.css';
import ContactPic from './pics/pic1.png';
import fieldPic from './pics/investment-terminology.jpg';
import {Link} from 'react-scroll';
class AboutUs extends React.Component {

constructor(){
	super();
	this.state = {
		buttonPressed:true
	}
 
}

 onButtonPressed = (B) =>{
	document.getElementById('Effects').style.animation='Temp 5s 1';
	this.setState({buttonPressed:B});
}
render(){
	return(
	<div className='AboutUsMain'>
		
		<div className='aboutUs tc'>	

			

			<div className='aboutUsIN'>
				<div className='aboutUsInBox ConsolText'>
					<p className='Headings b'>JOIN OUR BUSSINESS</p>
					<br/>
					<br/><br/>
					
				</div>
				<div className='aboutUsInBox'>
					<img alt='field information' src={fieldPic}/>
				</div>


			</div>
			
			<div id= 'Effects'className='Effects'>
			{
				(this.state.buttonPressed)?
					<AboutUsForm onButtonPressed={this.onButtonPressed} />:null
				
			}
			</div>
		</div>
	</div>
	);
}
}
export default AboutUs;