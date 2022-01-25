import React from 'react';
import './work.css';
import Pic1 from './pics/civil.jpg';
import Pic2 from './pics/mechanical.jpg';
import Pic3 from './pics/electrical.jpg';
import Pic4 from './pics/maintain.jpg';
import Pic5 from './pics/paint.jpg';

const work =()=>{
	return(
	<div id='service' className='workMain'>
		<div className='tc'>
			<p className='Headings f2 b'>What We Do</p>
			<p className='f3 white lh-copy'>
				We are pooled with resources of technical knowledge coupled with industrial expertise. The services are tailored to meet the unique needs of clients based on rich experience.
			</p>
		</div>
		<div className='work tc'>			
			<div className='workAddressBox'>
				<img  alt='Altering' src={Pic2} />
				<p className='f4 b pv2 shadow-3'>MECHANICAL WORK</p>
				<p className='f4 pt3 pa3'>
				Mechanical Maintenance plays a vital role in any plant or industry.
				</p>
			</div>
			<div className='workAddressBox'>
				<img  alt='Altering' src={Pic4} />
				<p className='f4 b pv2 shadow-3'>MAINTENANCE WORK</p>
				<p className='f4 pt3 pa3'>
					Mechanical Maintenance plays a vital role in any plant or industry.
				</p>
			</div>
			<div className='workAddressBox'>
				<img  alt='Altering' src={Pic1} />
				<p className='f4 b pv2 shadow-3'>CIVIL WORK</p>
				<p className='f4 pt3 pa3'>
				Heavy foundations for vessels, equipment, machinery, water retaining and oil tanks, supports/anchors etc.
				</p>
			</div>
			<div className='workAddressBox'>
				<img  alt='Altering' src={Pic3} />	
				<p className='f4 b pv2 shadow-3'>ELECTRTICAL & INSTR: WORK</p>
				<p className='f4 pt3 pa3'>
					Installation of panels/MCC and Motor /Generators. Also laying and testing of cable, terminations and energizing. Lighting system and control cabling.
				</p>
			</div>
			<div className='workAddressBox'>
				<img  alt='Altering' src={Pic5} />
				<p className='f4 b pv2 shadow-3'>INSULATION & PAINTING WORK</p>
				<p className='f4 pt3 pa3'>
					Blast cleaning to SA2-1/2 and then Paint-Airless spray system installation along with special machinery/workshop for metal working.
				</p>
			</div>
		</div>
	</div>
	);
}
export default work;