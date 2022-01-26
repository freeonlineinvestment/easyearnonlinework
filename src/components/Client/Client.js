import React from 'react';
import './Client.css'
import img from './pics/1.jpg';
const Client =()=>{
	return(
		<div className='ClientMain'>
			<img className="image-Client" alt="imageAlting" src={ img } />
			<div className='pkg-client'>
				<p className='headings b tracked-mega' >Package Information</p>
				<p className='tl'>In easy earn online work. The fastest profit has been made Our system will give you fifty percent profit.</p>
				
			</div>
			
		</div>
		);
}
export default Client;