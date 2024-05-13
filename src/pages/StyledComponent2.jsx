import styled, { css } from 'styled-components';

/* Props 조건에 따른 변경 */
const Box = styled.div`
	width: 100%;
	height: 200px;
	background-color: ${(props) => props.color || 'blue'};
	padding: 20px;
	box-sizing: border-box;
`;

const Button = styled.button`
	width: 100px;
	height: 40px;
	background-color: white;
	color: black;
	box-sizing: border-box;
	border: 1px solid white;
	margin: 0 5px;
	${(props) =>
		props.inverted &&
		css`
			background-color: black;
			color: white;
			border: 1px solid #ffffff;
		`}
`;

// Button 스타일 상속
const BigButton = styled(Button)`
	font-size: 30px;
	width: 150px;
	height: 60px;
`;

// Component 상속
const Link = ({ className, children }) => (
	<a className={className} style={{ color: 'white' }}>
		{children}
	</a>
);

const StyledLink = styled(Link)`
	color: palevioletred !important;
	font-weight: bold;
`;

/* Props 추가 */
const Thing = styled.div.attrs((/* props */) => ({ tabIndex: 0 }))`
	color: blue;
	&:hover {
		color: red; /* // <Thing> when hovered */
	}
	& ~ & {
		background: tomato; /* // <Thing> as a sibling of <Thing>, but maybe not directly next to it */
	}
	& + & {
		background: lime; /* // <Thing> next to <Thing> */
	}
	&.something {
		background: orange; /* // <Thing> tagged with an additional CSS class ".something" */
	}
	.something-else & {
		border: 1px solid; /* // <Thing> inside another element labeled ".something-else" */
	}
`;

// 속성 추가
const Input = styled.input.attrs({ type: 'checkbox' })``;

const Label = styled.label`
	align-items: center;
	display: flex;
	gap: 8px;
	margin-bottom: 8px;
`;

/* 조건부 props 설정 */
const LabelText = styled.span`
	${(props) => {
		switch (props.$mode) {
			case 'dark':
				return css`
					background-color: black;
					color: white;
					${Input}:checked + && {
						color: blue;
					}
				`;
			default:
				return css`
					background-color: white;
					color: black;
					${Input}:checked + && {
						color: red;
					}
				`;
		}
	}}
`;

const StyledComponent = () => (
	<Box color='black'>
		<Button>Button1</Button>
		<Button inverted={true}>Button2</Button>
		<BigButton>Big</BigButton>
		<br />
		<br />
		<br />
		<Link>Unstyled, boring Link</Link>
		<br />
		<StyledLink>Styled, exciting Link</StyledLink>
		<br />
		<br />
		<br />
		<br />
		<Thing>Hello world!</Thing>
		<Thing>How ya doing?</Thing>
		<Thing className='something'>The sun is shining...</Thing>
		<div>Pretty nice day today.</div>
		<Thing>Don't you think?</Thing>
		<div className='something-else'>
			<Thing>Splendid.</Thing>
		</div>
		<br />
		<br />
		<br />
		<br />
		<br />
		<Label>
			<Input defaultChecked />
			<LabelText>Foo</LabelText>
		</Label>
		<Label>
			<Input />
			<LabelText $mode='dark'>Foo</LabelText>
		</Label>
		<Label>
			<Input defaultChecked />
			<LabelText>Foo</LabelText>
		</Label>
		<Label>
			<Input defaultChecked />
			<LabelText $mode='dark'>Foo</LabelText>
		</Label>
	</Box>
);

export default StyledComponent;
