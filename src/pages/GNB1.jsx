// Ref SlideDown
import { useRef, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import styled from "styled-components";

const SubMenuWrap = styled.ul`
  position: absolute;
  width: 100%;
  overflow: hidden;
  background-color: #333333;
  transition: maxHeight 0.3s linear;
`;

const Navilists = [
  { id: 1, name: "home", el: "/", child: [] },
  {
    id: 2,
    name: "one",
    el: "/one",
    child: [
      { id: 21, name: "one1", el: "/childone1" },
      { id: 22, name: "one2", el: "/childone2" },
      { id: 23, name: "one3", el: "/childone3" },
      { id: 24, name: "one4", el: "/childone4" },
    ],
  },
  {
    id: 3,
    name: "two",
    el: "/two",
    child: [
      { id: 31, name: "two1", el: "/childtwo1" },
      { id: 32, name: "two2", el: "/childtwo2" },
    ],
  },
  {
    id: 4,
    name: "three",
    el: "/three",
    child: [{ id: 41, name: "three1", el: "/childthree1" }],
  },
  {
    id: 5,
    name: "four",
    el: "/four",
    child: [
      { id: 51, name: "four1", el: "/childfour1" },
      { id: 52, name: "four2", el: "/childfour2" },
      { id: 53, name: "four3", el: "/childfour3" },
    ],
  },
];

const activeStyle = {
  fontWeight: "bold",
  color: "#FFFFFF",
};

const HeaderItem = ({ index, title, id, link, subList }) => {
  const subMenu = useRef(null);
  const [openIndex, setOpenIndex] = useState(false);

  const handleMouse = (index) => {
    setOpenIndex(index);
  };
  return (
    <li className="gnb-list" key={id} onMouseEnter={() => handleMouse(index)} onMouseLeave={() => handleMouse(null)}>
      <NavLink to={link} style={({ isActive }) => (isActive ? activeStyle : undefined)} className={({ isActive }) => (isActive ? "gnb-item is-active" : "gnb-item")}>
        {title}
      </NavLink>
      <SubMenuWrap
        ref={subMenu}
        style={{
          maxHeight: openIndex === index ? subMenu.current.scrollHeight : 0,
        }}
        className="gnb-sub-lists"
      >
        {subList.map((sub) => {
          return (
            <li className="gnb-sub-list" key={sub.id}>
              <Link to={sub.el} className="gnb-sub-list-item">
                {sub.name}
              </Link>
            </li>
          );
        })}
      </SubMenuWrap>
    </li>
  );
};

const Header = () => {
  return (
    <div className="gnb-wrapper">
      <ul className="gnb-lists">
        {Navilists.map((list, index) => (
          <HeaderItem key={index} index={index} title={list.name} id={list.id} link={list.el} subList={list.child} />
        ))}
        ;
      </ul>
    </div>
  );
};

export default Header;
