import React from 'react';
import './Navigation.css';
import './Docked.css';
import Menu from './menu.webp';
import CloseX from './x.png';
import {Link} from 'react-scroll';


	
const DockedMenuFunction = async( B )=> {
	var MenuDocked = document.getElementById('DockedMenu').style;
	if( B === 'block' ){
		MenuDocked.display=B;
		MenuDocked.animation='DMenub 1s 1';
	}else{
		MenuDocked.animation='DMenubAfter 1s 1';
		MenuDocked.display=B;

	}
}
	

const Navigation =()=>{
const DivProp = ' no-underline dn dib-ns pv4 ph4 grow pointer';

const MenuDivProp = 'MenuBarInside no-underline pv1 grow pointer';

    		
	return(
	<div className='navBar'>
		<div className='navBarInside'>
			<div className='Logo'>
			</div>
			<h3>EASY EARN ONLINE WORK</h3>
		</div>
		<svg className='MenuBtn fr mt2' onClick={()=>DockedMenuFunction('block')} id='MenuBtn' viewBox="0 0 24 24">
			<path fill="currentColor" d="M5,13L9,17L7.6,18.42L1.18,12L7.6,5.58L9,7L5,11H21V13H5M21,6V8H11V6H21M21,16V18H11V16H21Z" />
		</svg>
		<div className='NavList'>
			<div className={DivProp}><Link to='Home' spy={true} smooth={true}>Home</Link></div>
			<div className={DivProp}><Link to='ClientMain' spy={true} smooth={true}>About bussiness</Link></div>
			<div className={DivProp}><Link  to='BeginersMain' spy={true} smooth={true}>Our Polices</Link></div>
			<div className={DivProp}><Link activeClass='active' to='AboutUsMain' spy={true} smooth={true}>Join Team</Link></div>
			<div className={DivProp}><Link to='FooterMain' spy={true} smooth={true}>Contact Person</Link></div>
		</div>
		

		<div id='DockedMenu' className='DockedMenu'>
			<svg  className='XBtn fr' onClick={()=>DockedMenuFunction('none')} viewBox="0 0 24 24">
				<path fill="currentColor" d="M10.5 18H18V20H10.5C6.91 20 4 17.09 4 13.5S6.91 7 10.5 7H16.17L13.08 3.91L14.5 2.5L20 8L14.5 13.5L13.09 12.09L16.17 9H10.5C8 9 6 11 6 13.5S8 18 10.5 18Z" />
			</svg>
			<div className='DockedList'>
			<div className={MenuDivProp}><Link to='Home' spy={true} smooth={true}>Home</Link></div>
			<div className={MenuDivProp}><Link to='ClientMain' spy={true} smooth={true}>About bussiness</Link></div>
			<div className={MenuDivProp}><Link  to='BeginersMain' spy={true} smooth={true}>Our Polices</Link></div>
			<div className={MenuDivProp}><Link activeClass='active' to='AboutUsMain' spy={true} smooth={true}>Join Team</Link></div>
			<div className={MenuDivProp}><Link to='FooterMain' spy={true} smooth={true}>Contact Person</Link></div>
			</div>

		</div>
	</div>

	);
}
export default Navigation;