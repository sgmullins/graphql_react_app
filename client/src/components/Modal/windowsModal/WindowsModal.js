import React from "react";
import "./WindowsModal.css";

const windowsModal = props => (
  <div className="windows-modal">
    <div className="header">
      <div className="bar-content">
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
      <div className="title">{props.title}</div>
      <div className="buttons">
        <span className="dot">
          <div className="min">
            <div className="minbar"></div>
          </div>
        </span>
        <span className="dot">
          <div className="max">
            <div className="maxbox"></div>
          </div>
        </span>
        {props.canCancel && (
          <span className="dot">
            <button className="x" onClick={props.onCancel}></button>
          </span>
        )}
      </div>
    </div>
    <div className="content">
      <section className="content-text">{props.children}</section>
      <section className="actions">
        {props.canCancel && (
          <button className="windowsBtn" onClick={props.onCancel}>
            <span className="firstLetter">C</span>ancel
          </button>
        )}

        {props.canConfirm && (
          <button className="windowsBtn" onClick={props.onConfirm}>
            {props.confirmText}
          </button>
        )}
      </section>
    </div>
  </div>
);

export default windowsModal;
