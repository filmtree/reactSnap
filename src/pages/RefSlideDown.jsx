import './styles.css';
import React, { useState, useRef } from 'react';
import styled from 'styled-components';

const Opener = styled.button`
	padding: 10px;
	border: 1px solid #ccc;
	background-color: #ffffff;
	cursor: pointer;
`;

const SlideBox = styled.div`
	transition: height 0.3s linear;
	overflow: hidden;
	p {
		border: 1px solid #dadada;
		padding: 20px;
	}
`;

export default function App() {
	const [isOpen, setIsOpen] = useState(false);
	const slideRef = useRef(null);

	const Toggle = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div className='App'>
			<Opener onClick={Toggle}>기본 ScrollHeight 슬라이드 Toggle</Opener>
			<SlideBox ref={slideRef} style={{ height: isOpen ? slideRef.current.scrollHeight : 0 }}>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque quis nibh augue. Nam semper metus in ligula pretium, et consectetur nulla rutrum. Aenean at nibh sit amet quam aliquet vehicula. Nam eu ante</p>
			</SlideBox>
		</div>
	);
}
