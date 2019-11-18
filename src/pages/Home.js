import React, { Fragment, useContext, useEffect } from "react";
import { Form } from "../components/Form";
import { Notes } from "../components/Notes";
import { FirebaseContext } from "../context/firebase/firebaseContext";
import { AlertContext } from "../context/alert/alertContext";
import { Loader } from "../components/Loader";

export const Home = () => {
  const { isLoading, notes, fetchNotes, removeNote } = useContext(
    FirebaseContext
  );
  const { show } = useContext(AlertContext);

  const onRemoveNote = id => {
    removeNote(id);
    show("Note was be deleted", "info");
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  return (
    <Fragment>
      <Form />
      <hr />
      {isLoading ? <Loader /> : <Notes onRemove={onRemoveNote} notes={notes} />}
    </Fragment>
  );
};
