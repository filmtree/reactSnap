import { BrowserRouter as Router, NavLink, useMatch } from 'react-router-dom';
import styled from 'styled-components';

const CustomNavLink = styled(NavLink)`
	&.myActiveClass {
		color: red;
	}
`;

function MyNavLink({ to, className, activeClassName, ...rest }) {
	const match = useMatch(to);

	return <CustomNavLink to={to} className={match ? `${className} ${activeClassName}` : className} {...rest} />;
}

export default function App() {
	return (
		<Router>
			<MyNavLink to='/example' className='myLink' activeClassName='myActiveClass'>
				예시 링크
			</MyNavLink>
		</Router>
	);
}
