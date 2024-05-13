import React, { useState } from 'react';
import PropTypes from 'prop-types';

function CustomSelect({ options, onSelect }) {
	const [selectedOption, setSelectedOption] = useState(null);

	const handleSelect = (option) => {
		setSelectedOption(option);
		onSelect(option);
	};

	return (
		<div className='custom-select'>
			<div className='selected-option'>{selectedOption || 'Select an option'}</div>
			<ul className='options'>
				{options.map((option) => (
					<li key={option} onClick={() => handleSelect(option)}>
						{option}
					</li>
				))}
			</ul>
		</div>
	);
}

CustomSelect.propTypes = {
	options: PropTypes.arrayOf(PropTypes.string).isRequired,
	onSelect: PropTypes.func.isRequired,
};

export default CustomSelect;
