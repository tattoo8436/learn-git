import React from "react";
import useCounterStore from "../../redux/counterStore";
import { Button, Space } from "antd";

const Zustand = () => {
  const { number, increment, reset } = useCounterStore();

  const handleIncrement = () => {
    const value = Number(Math.random() * 10).toFixed(0);
    console.log({ value });

    increment(+value);
  };

  return (
    <>
      <h1>Zustand</h1>

      <p>Number: {number}</p>

      <Space>
        <Button onClick={handleIncrement}>Increment</Button>
        <Button onClick={reset}>Reset</Button>
      </Space>
    </>
  );
};

export default Zustand;
