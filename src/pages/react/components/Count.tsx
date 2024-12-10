import { Card } from "antd";
import React, { memo } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";

const Count = memo(() => {
  const count = useSelector((state: RootState) => state.counter.value);

  console.log("render count");

  return <Card>{count}</Card>;
});

export default Count;
