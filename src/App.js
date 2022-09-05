import React, { useState } from "react";
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
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UserList users={userList} />
    </div>
  );
}

export default App;
