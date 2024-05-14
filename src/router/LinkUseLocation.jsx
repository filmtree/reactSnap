import { Link, useLocation } from "react-router-dom";

function CustomLink({ to, children }) {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link to={to} className={isActive ? "active" : ""}>
      {children}
    </Link>
  );
}

const Href = () => {
  return (
    <div>
      <CustomLink to="/example" className="myLink" activeClassName="myActiveClass">
        예시 링크
      </CustomLink>
    </div>
  );
};

export default Href;
