/* Portal.jsx */
import { createPortal } from "react-dom";

const Portal = ({ children }) => {
  return createPortal(children, document.body);
};

export default Portal;

/* Modal.jsx */
import React from "react";
import styled from "styled-components";

const Background = styled.div`
  position: fixed;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  left: 0;
  top: 0;
  text-align: center;
  opacity: 0.5;
`;

const Content = styled.button`
  height: 100%;
  width: 950px;

  position: relative;
  overflow: scroll;
  background: #141414;
  color: #fff;
`;

const Modal = ({ onClose }) => {
  return (
    // ... modal 안의 contents 코드 ...
    <Background>
      <Content onClick={onClose}> 닫기</Content>
    </Background>
  );
};

export default Modal;

/* App.jsx */
import { useState } from "react";
import Portal from "./Components/Portal";
import Modal from "./Components/Modal";

const App = () => {
  const [modalOn, setModalOn] = useState(false);

  const handleModal = () => {
    setModalOn(!modalOn);
  };

  return (
    <>
      <button onClick={handleModal}>Modal View</button>
      <Portal>{modalOn && <Modal onClose={handleModal} />}</Portal>
    </>
  );
};

export default App;