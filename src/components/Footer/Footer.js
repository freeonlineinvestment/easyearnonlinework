import React from 'react';
import './Footer.css';
import img from './map.png';

const Footer =()=>{
	
	
	return(
		<div className='FooterMain tc'>
			
			<div className='FooterBody'>
				

				<div className='FooterAdresses tc'>
					
					<div className='FooterAddressBoxMap shadow-3'>
						<p className='f5 b shadow-3  tracked pa3'>HEAD OFFICE</p>
						<img className='google-map' src={img} />
					</div>
					<div className='FooterAddressBox  shadow-3'>
						<p className='f5 b shadow-3 tracked pa3'>CONTACT PERSON</p>
						<p className='tracked-mega yellow hover-orange f6 pt3 pa3 b'>
							AMEER ALI 
							<br /><br />
						</p>
						<p className='hover-yellow pointer f6 pt3 pa3 b tc'>
							CONTACT  0305 3071 873
						</p>
						<p className='hover-yellow pointer f6 pt3 pa3'>
						Near Samar Heights, Delhi Society Delhi CHS PECHS, Karachi.
							<br /><br />
						</p>
						
						
					</div>
				</div>

				<div className="NewsSletter fr mt4 ">
					<div>
						<form className="bg-blue mw6 center pa2 br2-ns ba hover-bg-yellow b--black-10 grow">
							<fieldset className="cf bn ma0 pa0">
								<legend className="pa0 f5 f4-ns mb3 black-80">Sign up for our newsletter</legend>
								<div className="cf">
						    		<label className="clip" htmlFor="email-address">Email Address</label>
						    		<input className="f5 f5-l input-reset bn fl black-80 bg-white pa1 lh-solid w-100 w-70-m w-70-l br2-ns br--left-ns" placeholder="Your Email Address" type="text" name="email-address" value="" id="email-address" />
						    		<input className="f6 f5-l button-reset fl pv2 tc bn bg-animate bg-black-70 hover-bg-black white pointer w-100 w-30-m w-30-l br2-ns br--right-ns" type="submit" value="Subscribe" />
								</div>
							</fieldset>
						</form>
					</div>
					<footer  className="mt3 ">
						<a className="link grow blue hover-yellow dib mh3 tc" href="https://facebook.com" title="Facebook">
					    	<svg className="dib h2 w2" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fillRule="evenodd" clipRule="evenodd" strokeLinejoin="round" strokeMiterlimit="1.414"><path d="M15.117 0H.883C.395 0 0 .395 0 .883v14.234c0 .488.395.883.883.883h7.663V9.804H6.46V7.39h2.086V5.607c0-2.066 1.262-3.19 3.106-3.19.883 0 1.642.064 1.863.094v2.16h-1.28c-1 0-1.195.476-1.195 1.176v1.54h2.39l-.31 2.416h-2.08V16h4.077c.488 0 .883-.395.883-.883V.883C16 .395 15.605 0 15.117 0" fillRule="nonzero"/></svg>
					    	<span className="f6 db">Facebook</span>
					  	</a>
					  	<a className="link grow hover-yellow blue dib mh3 tc" href="https://instagram.com/mrmrs_" title="Instagram">
					    	<svg className="dib h2 w2" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fillRule="evenodd" clipRule="evenodd" strokeLinejoin="round" strokeMiterlimit="1.414"><path d="M8 0C5.827 0 5.555.01 4.702.048 3.85.088 3.27.222 2.76.42c-.526.204-.973.478-1.417.923-.445.444-.72.89-.923 1.417-.198.51-.333 1.09-.372 1.942C.008 5.555 0 5.827 0 8s.01 2.445.048 3.298c.04.852.174 1.433.372 1.942.204.526.478.973.923 1.417.444.445.89.72 1.417.923.51.198 1.09.333 1.942.372.853.04 1.125.048 3.298.048s2.445-.01 3.298-.048c.852-.04 1.433-.174 1.942-.372.526-.204.973-.478 1.417-.923.445-.444.72-.89.923-1.417.198-.51.333-1.09.372-1.942.04-.853.048-1.125.048-3.298s-.01-2.445-.048-3.298c-.04-.852-.174-1.433-.372-1.942-.204-.526-.478-.973-.923-1.417-.444-.445-.89-.72-1.417-.923-.51-.198-1.09-.333-1.942-.372C10.445.008 10.173 0 8 0zm0 1.44c2.136 0 2.39.01 3.233.048.78.036 1.203.166 1.485.276.374.145.64.318.92.598.28.28.453.546.598.92.11.282.24.705.276 1.485.038.844.047 1.097.047 3.233s-.01 2.39-.048 3.233c-.036.78-.166 1.203-.276 1.485-.145.374-.318.64-.598.92-.28.28-.546.453-.92.598-.282.11-.705.24-1.485.276-.844.038-1.097.047-3.233.047s-2.39-.01-3.233-.048c-.78-.036-1.203-.166-1.485-.276-.374-.145-.64-.318-.92-.598-.28-.28-.453-.546-.598-.92-.11-.282-.24-.705-.276-1.485C1.45 10.39 1.44 10.136 1.44 8s.01-2.39.048-3.233c.036-.78.166-1.203.276-1.485.145-.374.318-.64.598-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276C5.61 1.45 5.864 1.44 8 1.44zm0 2.452c-2.27 0-4.108 1.84-4.108 4.108 0 2.27 1.84 4.108 4.108 4.108 2.27 0 4.108-1.84 4.108-4.108 0-2.27-1.84-4.108-4.108-4.108zm0 6.775c-1.473 0-2.667-1.194-2.667-2.667 0-1.473 1.194-2.667 2.667-2.667 1.473 0 2.667 1.194 2.667 2.667 0 1.473-1.194 2.667-2.667 2.667zm5.23-6.937c0 .53-.43.96-.96.96s-.96-.43-.96-.96.43-.96.96-.96.96.43.96.96z"/></svg>
					    	<span className="f6 db">Instagram</span>
					  	</a>
					  	<a className="link grow hover-yellow blue dib mh3 tc" href="https://linkedin.com" title="LinkedIn">
					    	<svg className="dib h2 w2" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fillRule="evenodd" clipRule="evenodd" strokeLinejoin="round" strokeMiterlimit="1.414"><path d="M13.632 13.635h-2.37V9.922c0-.886-.018-2.025-1.234-2.025-1.235 0-1.424.964-1.424 1.96v3.778h-2.37V6H8.51V7.04h.03c.318-.6 1.092-1.233 2.247-1.233 2.4 0 2.845 1.58 2.845 3.637v4.188zM3.558 4.955c-.762 0-1.376-.617-1.376-1.377 0-.758.614-1.375 1.376-1.375.76 0 1.376.617 1.376 1.375 0 .76-.617 1.377-1.376 1.377zm1.188 8.68H2.37V6h2.376v7.635zM14.816 0H1.18C.528 0 0 .516 0 1.153v13.694C0 15.484.528 16 1.18 16h13.635c.652 0 1.185-.516 1.185-1.153V1.153C16 .516 15.467 0 14.815 0z" fillRule="nonzero"/></svg>
					    	<span className="f6 db">LinkedIn</span>
					  	</a>
					  	<a className="link grow hover-yellow blue dib mh3 tc" href="https://twitter.com/mrmrs_" title="Twitter">
					    	<svg className="dib h2 w2" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fillRule="evenodd" clipRule="evenodd" strokeLinejoin="round" strokeMiterlimit="1.414"><path d="M16 3.038c-.59.26-1.22.437-1.885.517.677-.407 1.198-1.05 1.443-1.816-.634.375-1.337.648-2.085.795-.598-.638-1.45-1.036-2.396-1.036-1.812 0-3.282 1.468-3.282 3.28 0 .258.03.51.085.75C5.152 5.39 2.733 4.084 1.114 2.1.83 2.583.67 3.147.67 3.75c0 1.14.58 2.143 1.46 2.732-.538-.017-1.045-.165-1.487-.41v.04c0 1.59 1.13 2.918 2.633 3.22-.276.074-.566.114-.865.114-.21 0-.416-.02-.617-.058.418 1.304 1.63 2.253 3.067 2.28-1.124.88-2.54 1.404-4.077 1.404-.265 0-.526-.015-.783-.045 1.453.93 3.178 1.474 5.032 1.474 6.038 0 9.34-5 9.34-9.338 0-.143-.004-.284-.01-.425.64-.463 1.198-1.04 1.638-1.7z" fillRule="nonzero"/></svg>
					    	<span className="f6 db">Twitter</span>
					  	</a>
					</footer>
				</div>
			</div>


			<div className='FooterSign tc f6 white'>
				<p className='b font-set'>© 2022 EASY EARN ONLINE WORK. All Rights Reserved.</p>
			</div>

		</div>
	);
}
export default Footer;