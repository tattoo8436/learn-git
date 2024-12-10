import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";

const User = () => {
  const user = useSelector((state: RootState) => state.user);

  console.log("render user");

  return (
    <div>
      <div>User: </div>
      <div>{user.name}</div>
    </div>
  );
};

export default User;
