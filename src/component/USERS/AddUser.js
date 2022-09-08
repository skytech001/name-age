import React, { useState, Fragment } from "react";
import Card from "../UI/Card";
import style from "./AddUser.module.css";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
  const [enterdUsername, setEnterdUsername] = useState("");
  const [enterdAge, setEnterdAge] = useState("");
  const [error, setError] = useState("");

  const userChangeHandler = (event) => {
    setEnterdUsername(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnterdAge(event.target.value);
  };

  const addUserHandler = (event) => {
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
    setEnterdUsername("");
    setEnterdAge("");
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
          <input
            id="username"
            type="text"
            onChange={userChangeHandler}
            value={enterdUsername}
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            onChange={ageChangeHandler}
            value={enterdAge}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Fragment>
  );
};

export default AddUser;
