import React from "react-dom";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div>Header</div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/content">Content</Link>
        </li>
        <li>
          <Link to="/not">Not</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
