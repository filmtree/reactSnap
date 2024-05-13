import React, { useState, useCallback } from 'react';
import './styles.css';

const Modal = ({ modalClose }) => {
	return (
		<div className='modal-wrap' onClick={modalClose}>
			<div className='modal-box' onClick={(e) => e.stopPropagation()}>
				<header>Modal Title</header>
				<div className='modal-contents'>Modal Basic</div>
				<footer>
					<button onClick={modalClose}>X</button>
				</footer>
			</div>
		</div>
	);
};

const App = () => {
	const [showModal, setShowModal] = useState(false);

	const modalToggle = useCallback(() => {
		return setShowModal((state) => !state);
	}, []);

	return (
		<div className='App'>
			<button className='show-modal' onClick={modalToggle}>
				open Modal
			</button>
			{showModal && <Modal modalClose={modalToggle} />}
		</div>
	);
};

export default App;
