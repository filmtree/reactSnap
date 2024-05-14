import React from "react-dom";
import { NavLink } from "react-router-dom";

const Header = () => {
  const Navi = [
    { id: 1, link: "/", name: "Home" },
    { id: 2, link: "/content", name: "Content" },
    { id: 3, link: "/not", name: "Not" },
  ];

  const activeStyle = {
    color: "red",
    fontSize: "20px",
  };

  const menuList = Navi.map((nav, index) => {
    return (
      <li key={nav.id}>
        {/* 6버전에서는 active가 기본으로 적용된다. */}
        <NavLink to={nav.link}>{nav.name}</NavLink>
      </li>
    );
  });

  return (
    <div className="header">
      <div>Header</div>
      <ul>{menuList}</ul>
    </div>
  );
};

export default Header;
