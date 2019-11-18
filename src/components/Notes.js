import React from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";

export const Notes = ({ notes, onRemove }) => (
  <TransitionGroup component="ul" className="list-group">
    {notes.map(note => {
      return (
        <CSSTransition timeout={800} classNames={"note"} key={note.id}>
          <li className="list-group-item d-flex justify-content-between align-items-center">
            <div>
              <strong className="mr-3">{note.title}</strong>
              <small>{note.date}</small>
            </div>
            <button
              onClick={() => onRemove(note.id)}
              type="button"
              className="btn btn-outline-danger btn-small"
            >
              &times;
            </button>
          </li>
        </CSSTransition>
      );
    })}
  </TransitionGroup>
);
