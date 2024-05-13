import './styles.css';
import React, { useState, useRef } from 'react';
import styled from 'styled-components';

const AccordionWrap = styled.div`
	margin-top: -1px;
`;

const AccordionButton = styled.div`
	padding: 10px;
	margin-top: -1px;
	border: 1px solid #dadada;
	text-align: left;
	cursor: pointer;
	&:hover {
		background-color: #ddd;
	}
`;

const AccordionContent = styled.div`
	overflow: hidden;
	transition: all 0.3s linear;
	box-sizing: border-box;
	p {
		margin: 0;
		margin-top: -1px;
		padding: 20px;
		border: 1px solid #dadada;
		text-align: left;
		background-color: #eee;
	}
`;

function AccordionItem({ title, content }) {
	const contentRef = useRef(null);
	const [isOpen, setIsOpen] = useState(false);

	function toggleAccordion() {
		setIsOpen(!isOpen);
	}

	return (
		<AccordionWrap>
			<AccordionButton onClick={toggleAccordion}>{title}</AccordionButton>
			<AccordionContent ref={contentRef} style={{ maxHeight: isOpen ? contentRef.current.scrollHeight : 0 }}>
				<p>{content}</p>
			</AccordionContent>
		</AccordionWrap>
	);
}

const Accordion = ({ items }) => {
	return (
		<div>
			{items.map((item, index) => (
				<AccordionItem key={index} title={item.title} content={item.content} />
			))}
		</div>
	);
};

export default function App() {
	const items = [
		{
			title: 'Acc1',
			content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
      Quisque quis nibh augue. Nam semper metus in ligula pretium, 
      et consectetur nulla rutrum. Aenean at nibh sit amet quam aliquet vehicula. 
      Nam eu ante scelerisque, suscipit metus ut, tincidunt elit. 
      Orci varius natoque penatibus et magnis dis parturient montes, 
      nascetur ridiculus mus. Morbi tempor nulla vel auctor sodales. 
      Donec ultrices in nisi sed convallis. Nullam ac lacus mauris.`,
		},
		{
			title: 'Acc2',
			content: `Aenean iaculis dictum nisl in venenatis. 
      Vestibulum tincidunt pretium hendrerit. 
      Phasellus laoreet diam nec varius vestibulum. 
      Sed eget pellentesque augue. Nulla tempus cursus nulla, 
      quis scelerisque orci. Vivamus ultrices sem nulla, 
      venenatis mattis magna tempus placerat. 
      Mauris vulputate semper turpis nec imperdiet. 
      Etiam a pulvinar dui. Fusce pretium tincidunt congue. 
      Praesent porttitor diam sit amet luctus pulvinar. 
      Phasellus eget laoreet velit, a sodales diam. 
      Vestibulum ut lacus mauris. Donec nec auctor est, 
      eget fermentum nulla. In quis justo vitae sem iaculis sodales eu vitae ante. 
      Suspendisse vitae tellus vestibulum, lacinia felis quis, tincidunt est.`,
		},
		{
			title: 'Acc3',
			content: `Integer sed enim sed enim dictum bibendum molestie a ex. 
      Fusce in lorem sit amet risus lobortis aliquam. Morbi ornare molestie lacus, 
      eu rutrum est consequat ac. In non pharetra arcu, faucibus porta nunc. 
      Nam porta tincidunt mi aliquam porttitor. Sed porttitor, 
      massa eu condimentum fringilla, nunc erat vehicula leo, 
      id iaculis dui neque sed sapien. Donec nibh odio, pretium ac finibus in, 
      lobortis et mauris.`,
		},
	];
	return (
		<div className='App'>
			<Accordion items={items} />
		</div>
	);
}
