import { NavLink, useMatch } from 'react-router-dom';
import styled from 'styled-components';

const CustomNavLink = styled(NavLink)`
  &.myActiveClass {
    color: red;
  }
`;

function MyNavLink({ to, className, activeClassName, ...rest }) {
  // NavLink 컴포넌트의 활성 링크에 자동으로 active 클래스를 적용
  // useMatch 훅을 이용하면 현재 경로와 주어진 경로가 일치하는지 확인할 수 있습니다
  const match = useMatch(to);

  return (
    <CustomNavLink
      to={to}
      className={match ? `${className} ${activeClassName}` : className}
      {...rest}
    />
  );
}

const Header = () => {
  return (
    <div>
      <MyNavLink to="/example" className="myLink" activeClassName="myActiveClass">
        예시 링크
      </MyNavLink>
      <MyNavLink to="/about" className="myLink" activeClassName="myActiveClass">
        About
      </MyNavLink>
    </div>
  );
};

export default Header;