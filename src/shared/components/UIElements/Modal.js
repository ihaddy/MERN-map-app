import React from "react";
import reactDom from "react-dom";
import Backdrop from "./Backdrop";
import { CSSTransition } from "react-transition-group";

import "./Modal.css";
export default function Modal(props) {
  return (
    <React.Fragment>
      {props.show && <Backdrop onClick={props.onCancel} />}
      <CSSTransition
        in={props.show}
        mountOnEnter
        unmountOnExit
        timeout={200}
        classNames="modal"
      >
        <ModalOverlay {...props}></ModalOverlay>
      </CSSTransition>
    </React.Fragment>
  );
}

function ModalOverlay(props) {
  const content = (
    <div className={`modal ${props.classname}`} style={props.style}>
      <header className={`modal__header ${props.headerClass}`}>
        <h2>{props.header}</h2>
      </header>
      <form
        onSubmit={
          props.onSubmit ? props.onSubmit : (event) => event.preventDefault()
        }
      >
        <div className={`modal__content ${props.contentClass}`}>
          {props.children}
        </div>
        <footer className={`modal__footer ${props.footer}`}>
          {props.footer}
        </footer>
      </form>
    </div>
  );
  return reactDom.createPortal(content, document.getElementById("modal-hook"));
}
