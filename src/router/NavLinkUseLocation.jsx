import { NavLink, useLocation } from 'react-router-dom';
import styled from 'styled-components';

const CustomNavLink = styled(NavLink)`
  &.active {
    color: red;
  }
`;

function MyNavLink({ to, ...props }) {
  const { pathname } = useLocation();

  // 현재 경로와 주어진 경로가 일치하는지 확인
  const isActive = pathname === to;

  return (
    <CustomNavLink
      to={to}
      className={isActive ? 'active' : ''}
      {...props}
    />
  );
}


const Header = () => {
  return (
    <div>
      <MyNavLink to="/example" className="myLink">
        예시 링크
      </MyNavLink>
      <MyNavLink to="/about" className="myLink" >
        About
      </MyNavLink>
    </div>
  );
};

export default Header;