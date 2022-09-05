import React from "react";
import Card from "../UI/Card";
import style from "./UserList.module.css";

const UserList = (props) => {
  return (
    <Card cardStyle={style.users}>
      <ul>
        {props.users.map((user) => {
          return (
            <li key={Math.random()}>
              {user.name} ({user.age} Years old)
            </li>
          );
        })}
      </ul>
    </Card>
  );
};

export default UserList;
