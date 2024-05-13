import React, { useState } from 'react';

const MenuItem = ({ item }) => {
	const [open, setOpen] = useState(false);
	const handleOnClick = () => setOpen(!open);

	return (
		<li className='list'>
			<div className='title' style={{ color: item.children ? 'red' : 'black' }} onClick={handleOnClick}>
				{item.label}
			</div>
			{open && item.children && (
				<ul>
					{item.children.map((child) => (
						<MenuItem key={child.label} item={child} />
					))}
				</ul>
			)}
		</li>
	);
};

const CollapsibleSideMenu = ({ items }) => {
	return (
		<ul>
			{items.map((item) => (
				<MenuItem key={item.label} item={item} />
			))}
		</ul>
	);
};

export default CollapsibleSideMenu;
