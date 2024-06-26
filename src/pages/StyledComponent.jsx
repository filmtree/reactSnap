import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

const ButtonStyle = css`
	border: none;
	border-radius: 4px;
	font-size: 1rem;
	font-weight: bold;
	padding: 0.25rem 1rem;
	color: white;
	outline: none;
	cursor: pointer;
	background: #333;
	&:hover {
		background: #aaa;
	}
	${(props) =>
		props.fullWidth &&
		css`
			padding-top: 0.75rem;
			padding-bottom: 0.75rem;
			width: 100%;
			font-size: 1.125rem;
		`}
	${(props) =>
		props.cyan &&
		css`
			background: #888;
			&:hover {
				background: #999;
			}
		`}
`;

const StyledButton = styled.button`
	${ButtonStyle}
`;

const StyledLink = styled(Link)`
	${ButtonStyle}
`;

const Button = (props) => {
	return props.to ? (
		// StyledLink를 사용하는 과정에서는 props.cyan 값을 숫자 1과 0으로 변환해 주었습니다.
		// 이렇게 한 이유는 styled() 함수로 감싸서 만든 컴포넌트의 경우에는 임의 props가
		// 필터링되지 않기 때문입니다(styled.button으로 만든 컴포넌트의 경우에는 cyan과 같은
		// 임의 props가 자동으로 필터링되어 스타일을 만드는 용도로만 사용되고,
		// 실제 button 엘리먼트에게 속성이 전달되지 않습니다).
		// 필터링이 되지 않으면 cyan={true}라는 값이 Link에서 사용하는 a 태그에 그대로 전달되는데,
		// a 태그는 boolean 값이 임의 props로 설정되는 것을 허용하지 않습니다.
		// 숫자/문자열만 허용하기 때문에 삼항 연산자를 사용하여 boolean을 숫자로 변환해 준 것입니다.
		//
		// Button 컴포넌트에 props로 전달되는 모든 props를 매개변수 props로 받아서 {...props}로 각 컴포넌트에 적용 한다.
		// <Button fullWidth cyan /> 와 같이 작성되면 {...props}를 통해 컴포넌트에 작성된 props를 전달 한다.
		<StyledLink {...props} cyan={props.cyan ? 1 : 0} />
	) : (
		<StyledButton {...props} />
	);
};

export default Button;
