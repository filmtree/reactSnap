// NavLink를 사용하지 못할 경우 현재위치를 파악해서 활성 페이지 표시
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled(Link)`
  color: ${(props) => (props.isActive ? "red" : "blue")};
`;

function CustomLink({ to, children }) {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    //<Link to={} isActive={}>
    <StyledLink to={to} isActive={isActive}>
      {children}
    </StyledLink>
  );
}

export default function MyStyledLink() {
  return <CustomLink to="/example">예시 링크</CustomLink>;
}
