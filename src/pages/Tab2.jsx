import React, { useState } from 'react';
import './styles.css';
import Mail from './Mail';
import Cafe from './Cafe';

export default function App() {
	const [activeIndex, setActiveIndex] = useState(0);

	// 이벤트 외부 작성
	// const tabChange = (index) => {
	//   setActiveIndex(index);
	// };

	const tabButtons = ['하나', '둘'];

	return (
		<div className='App'>
			<ul className='tabs is-boxed'>
				{tabButtons.map((tabButton, index) => (
					<li onClick={() => setActiveIndex(index)} className={activeIndex === index ? 'is-active' : ''}>
						{tabButton}
					</li>
				))}
			</ul>
			{/* {activeIndex === 0 ? <Mail /> : <Cafe />} */}
			{activeIndex === 0 ? <Mail /> : ''}
			{activeIndex === 1 ? <Cafe /> : ''}
		</div>
	);
}
