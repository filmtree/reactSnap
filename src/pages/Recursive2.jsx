import React, { useState, useRef } from 'react';
import './styles.css';

const MenuItem = ({ item, depth }) => {
	const [open, setOpen] = useState(false);
	const submenuRef = useRef(null);

	const handleOnClick = () => setOpen(!open);

	return (
		<li>
			<div onClick={handleOnClick} style={{ paddingLeft: depth * 20, cursor: 'pointer' }}>
				{/* {item.children && (
          <FontAwesomeIcon icon={open ? faAngleDown : faAngleRight} />
        )} */}
				{item.label}
			</div>
			{item.children && (
				<ul className={`submenu ${open ? 'open' : ''}`} style={{ height: open ? submenuRef.current.scrollHeight + 'px' : 0 }} ref={submenuRef}>
					{item.children.map((child) => (
						<MenuItem key={child.label} item={child} depth={depth + 1} />
					))}
				</ul>
			)}
		</li>
	);
};

const CollapsibleSideMenu = ({ items }) => {
	return (
		<ul className='menu'>
			{items.map((item) => (
				<MenuItem key={item.label} item={item} depth={0} />
			))}
		</ul>
	);
};

export default CollapsibleSideMenu;
