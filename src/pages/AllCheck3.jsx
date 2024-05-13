import React, { useState } from 'react';
import './styles.css';

const CheckboxGroup = () => {
	const [checkboxes, setCheckboxes] = useState([
		{ id: 1, name: 'checkbox1', checked: false },
		{ id: 2, name: 'checkbox2', checked: false },
		{ id: 3, name: 'checkbox3', checked: false },
	]);

	const handleCheckAll = (event) => {
		const newCheckboxes = checkboxes.map((checkbox) => ({
			...checkbox,
			checked: event.target.checked,
		}));
		setCheckboxes(newCheckboxes);
	};

	const handleCheckboxChange = (event) => {
		const { name, checked } = event.target;
		const newCheckboxes = checkboxes.map((checkbox) => (checkbox.name === name ? { ...checkbox, checked } : checkbox));
		setCheckboxes(newCheckboxes);
	};

	return (
		<div>
			<label>
				<input type='checkbox' checked={checkboxes.every((checkbox) => checkbox.checked)} onChange={handleCheckAll} />
				Check all
			</label>
			{checkboxes.map((checkbox) => (
				<label key={checkbox.id}>
					<input type='checkbox' name={checkbox.name} checked={checkbox.checked} onChange={handleCheckboxChange} />
					{checkbox.name}
				</label>
			))}
		</div>
	);
};

export default CheckboxGroup;
