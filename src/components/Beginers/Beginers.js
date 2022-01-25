import React from 'react';
import './Beginers.css'
import img from './pics/1.jpg';
import ClientSlide from './ClientSlide';
const Beginers =()=>{
	return(
		<div className='BeginersMain'>
			<img className="image-Beginers" alt="imageAlting" src={ img } />
			<div className='pkg-Beginers tc'>
				<h6 className='heading-Beginers tracked-mega tc'>BEGINERS</h6>
				<p>Easy earn online work Ak official website Hy Aur hamare team 24 hours is site per kam kar rahi hai.<br/>Humne Apne investors ko Made Nazar rakhte hue.<br/>2000 ka package bhi ad kiya Hy <br/>80000<br/>200000<br/>K mazeed new package BHI add kiye Hain<br/>Aap logon ki rahnumaie ka bahut shukriya</p>
			
			</div>
			<ClientSlide />
		</div>
		);
}
export default Beginers;