import React, { useState, useContext } from "react";
import { AlertContext } from "../context/alert/alertContext";
import { FirebaseContext } from "../context/firebase/firebaseContext";

export const Form = () => {
  const [value, setValue] = useState("");
  const alert = useContext(AlertContext);
  const firebase = useContext(FirebaseContext);

  const onSubmit = e => {
    e.preventDefault();

    if (value.trim()) {
      firebase
        .addNote(value.trim())
        .then(() => {
          alert.show("note was be created", "success");
        })
        .catch(() => {
          alert.show("something is wrong", "danger");
        });
      setValue("");
    } else {
      alert.show("enter a note");
    }
  };

  return (
    <form className="form-inline my-2 my-lg-0" onSubmit={onSubmit}>
      <input
        value={value}
        onChange={e => setValue(e.target.value)}
        type="text"
        className="form-control  my-2 my-lg-0"
        placeholder="type note"
      />
      <button
        onClick={onSubmit}
        className="btn btn-outline-success my-2 my-sm-0 ml-2"
        type="submit"
      >
        Add note
      </button>
    </form>
  );
};
