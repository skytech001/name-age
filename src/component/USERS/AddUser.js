import React, { useState } from "react";
import Card from "../UI/Card";
import style from "./AddUser.module.css";
import Button from "../UI/Button";

const AddUser = (props) => {
  const [enterdUsername, setEnterdUsername] = useState("");
  const [enterdAge, setEnterdAge] = useState("");

  const userChangeHandler = (event) => {
    setEnterdUsername(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnterdAge(event.target.value);
  };

  const addUserHandler = (event) => {
    event.preventDefault();
    if (enterdUsername.trim().length === 0 || enterdAge.trim().length === 0) {
      return;
    }
    if (+enterdAge < 1) {
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

  return (
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
  );
};

export default AddUser;
