import { useState, useCallback } from 'react';
import { CSSTransition } from 'react-transition-group';
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

	const modalToggle = useCallback((e) => {
		return setShowModal((prevState) => !prevState);
	}, []);

	return (
		<div className='App'>
			<button className='show-modal' onClick={modalToggle}>
				open Modal
			</button>
			<CSSTransition in={showModal} timeout={500} classNames='modal' unmountOnExit>
				<Modal modalClose={modalToggle} showModal={showModal} />
			</CSSTransition>
		</div>
	);
};

export default App;

/* CSS 

.modal-enter {
  opacity: 0;
}
.modal-enter-active {
  opacity: 1;
  transition: all 0.5s;
}
.modal-exit {
  opacity: 1;
}
.modal-exit-active {
  opacity: 0;
  transition: all 500ms;
}

*/
