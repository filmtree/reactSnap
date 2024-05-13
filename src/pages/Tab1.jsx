import React, { useState } from 'react';
import './styles.css';

const Mail = () => <div className='tab-panel'>Tab 1</div>;
const Cafe = () => <div className='tab-panel'>Tab 2</div>;
const Mall = () => <div className='tab-panel'>Tab 3</div>;

const Tabs = [
	{ title: 'Tab1', content: <Mail /> },
	{ title: 'Tab2', content: <Cafe /> },
	{ title: 'Tab3', content: <Mall /> },
];

export default function Tab() {
	const [activeTab, setActiveIndex] = useState(0);
	return (
		<div className='App'>
			<ul className='tabs is-boxed'>
				{Tabs.map((tab, index) => (
					<li key={tab.title} onClick={() => setActiveIndex(index)} className={activeTab === index ? 'is-active' : ''}>
						{tab.title}
					</li>
				))}
			</ul>
			<div className='panel'>{Tabs[activeTab].content}</div>
		</div>
	);
}
