import React, { useState, useRef, useEffect } from 'react';
import { confirmAlert } from 'react-confirm-alert';
import emailjs from '@emailjs/browser';
import 'react-confirm-alert/src/react-confirm-alert.css';
import './aboutusform.css';

import CloseX from './pics/x.png';


	const AboutUsForm =({onButtonPressed})=>{

		const form = useRef();

		const [number, setNumber] = useState("");
		const [email, setEmail] = useState("");
		const [name, setName] = useState("");
		const [date, setDate] = useState("");
		const [code, setCode] = useState("");
		const [msg, setMsg] = useState("");
		const [pkg, setPkg] = useState("");

		const sendEmail = (e) => {
			
			e.preventDefault();
			
			emailjs.send( 'service_bwkhvql', 'template_r4cw5hb', {
				name: name,
				message: msg,
				email: email,
				number: number,
				date: date,
				today: new Date().toDateString(),
				code: code,
				pkg: pkg
				}, 'user_r467qDowX3j9iXO1bcn2f')
			.then((result) => {
				document.getElementById('messageForm').style.animation='EClose 3s 1';
				
				fetch(null)
				.then( setTimeout(()=>{onButtonPressed(false)},3000));	
				confirmAlert({ title:'Email Notification', message: 'Message Sent, We will get back to you shortly', buttons: [ { label: 'Close', onClick: () => {} } ] });	
			
			}, (error) => {
				confirmAlert({ title: 'Email Notification', message: 'Message not Sent, Please try again', buttons: [ { label: 'Close', onClick: () => {} } ] });
			});
			
		}

		useEffect( async() => {
			fetch(null)
			.then(await window.scroll(0, ( window.window.innerWidth < 769 ) ? 3988 : 3606 ),10000)
			},[]);
		

			const ClosingAnimation = async(event)=>{
				
				document.getElementById('messageForm').style.animation='EClose 3s 1';
				
				fetch(null)
				.then(await setTimeout(()=>{onButtonPressed(false)},3000));
			}
				

	return(
		<div id='messageForm' className='AboutUsFormMain'>
			<form className='formbox' ref={form} onSubmit={sendEmail}>
			<img 
				onClick={()=>ClosingAnimation()}
				src={CloseX} className='XFormBtn fr' />
				<div className="field black" >
					
				<p className="fieldinput b">COME WORK WITH US</p>
				<p>Join the Team</p>
				</div>	
				<div className="field" tabindex="1">
					
					<input className="fieldinput" name="username" type="text" value={name} onChange={ ( event ) => { setName( event.target.value ); } } placeholder="Full Name" />
				</div>
				
				<div className="field" tabindex="2">
					
					<input className="fieldinput" name="email" type="email" value={email} onChange={ ( event ) => { setEmail( event.target.value ); } } placeholder="Email Addres *" required/>
				</div>
				
				<div className="field" tabindex="2">
					
					<input className="fieldinput" name="number" type="text" value={number} onChange={ ( event ) => { setNumber( event.target.value ); } }  placeholder="Phone Number" />
				</div>
				
				<div className="field" tabindex="3">
					
				<label className="fl black mh3">
					When can you start?
					</label>
					<input className="fieldinput" name="date"  onClick={ ( event ) => { setDate( event.target.value ); } } type="date" />
				</div>
				<label className="fl black mh3">
					Select a Package
					</label>
				<div className="field" tabindex="3">
					<select className="fieldinput" name="pkg" id="pkg" onChange={ ( event ) => { setPkg( event.target.value ); } }>
						<option value=""></option>
						<option value="5000 invest Get 7500 in 7 days">5000 invest Get 7500 in 7 days</option>
						<option value="10000 invest Get 15000 in 7 days">10000 invest Get 15000 in 7 days</option>
						<option value="20000 invest Get 30000 in 7 days">20000 invest Get 30000 in 7 days</option>
						<option value="30000 invest Get 45000 in 7 days">30000 invest Get 45000 in 7 days</option>
						<option value="40000 invest Get 60000 in 7 days">40000 invest Get 60000 in 7 days</option>
						<option value="50000 invest Get 75000 in 7 days">50000 invest Get 75000 in 7 days</option>
					</select>
					
				</div>
				
				<div className="field" tabindex="3">
					
					<input className="fieldinput" name="refernce" type="text" value={code}  onChange={ ( event ) => { setCode( event.target.value ); } }  placeholder="Reference Code" />
				</div>
				
				<div className="field" tabindex="3">
					
					<input className="fieldinput h4" name="message" type="text" value={msg} onChange={ ( event ) => { setMsg( event.target.value ); } }  placeholder="Additional Message" />
				</div>
				<input type="submit" className="fieldinput pa2 bg-orange b dib br3 hover-bg-yellow grow" value="Send Me Message" />
				
			</form>
		</div>
	);
}
export default AboutUsForm;