import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "./styles.css";
import Home from "./Home";
import About from "./About";
import Header from "./Header";

const App = () => {
  const location = useLocation();
  return (
    <>
      <Header />
      <TransitionGroup>
        <CSSTransition key={location.pathname} timeout={1000} classNames="fade-slide" appear={true}>
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </CSSTransition>
      </TransitionGroup>
    </>
  );
};

export default App;
