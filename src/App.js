import React, { useState, Fragment } from "react";
import AddUser from "./component/USERS/AddUser";
import UserList from "./component/USERS/UserList";

function App() {
  const [userList, setUserList] = useState([]);

  const addUserHandler = (user) => {
    setUserList((prevUserList) => {
      return [...prevUserList, user];
    });
  };

  return (
    <Fragment>
      <AddUser onAddUser={addUserHandler} />
      <UserList users={userList} />
    </Fragment>
  );
}

export default App;
