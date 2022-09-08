import React, { useState, Fragment, useRef } from "react";
import Card from "../UI/Card";
import style from "./AddUser.module.css";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const [error, setError] = useState("");

  const addUserHandler = (event) => {
    const enterdUsername = nameInputRef.current.value;
    const enterdAge = ageInputRef.current.value;
    event.preventDefault();
    if (enterdUsername.trim().length === 0 || enterdAge.trim().length === 0) {
      setError({
        title: "invalid input",
        message: "Input field is empty. Please enter a valid name and age.",
      });
      return;
    }
    if (+enterdAge < 1) {
      setError({
        title: "invalid Age",
        message: "Age cannot be less than 1. Please enter a valid age.",
      });
      return;
    }
    const enterdData = {
      name: enterdUsername,
      age: enterdAge,
    };

    props.onAddUser(enterdData);
    nameInputRef.current.value = "";
    ageInputRef.current.value = "";
  };

  const errorHandler = () => {
    setError("");
  };

  return (
    <Fragment>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card cardStyle={style.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input id="username" type="text" ref={nameInputRef} />
          <label htmlFor="age">Age (Years)</label>
          <input id="age" type="number" ref={ageInputRef} />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Fragment>
  );
};

export default AddUser;
