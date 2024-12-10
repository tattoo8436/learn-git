import { Button, Input, Space, Typography } from "antd";
import { LegacyRef, ReactNode, useEffect, useRef, useState } from "react";
import InputCustom from "./components/Input";
import { useDispatch, useSelector } from "react-redux";
import { incrementByAmount } from "../../redux/counterSlice";
import { RootState } from "../../redux/store";
import ButtonCustom from "./components/ButtonCustom";
import { Outlet, useNavigate } from "react-router-dom";

const React = () => {
  // useEffect(() => {
  //   fetchProducts();
  // }, []);

  // const fetchProducts = () => {
  //   fetch("http://localhost:5000/products")
  //     .then((res) => res.json())
  //     .then((res) => console.log({ res }));
  // };

  const navigate = useNavigate();

  const [number, setNumber] = useState(0);

  const handle = () => {
    navigate("/react/outlet1");
  };

  return (
    <Space>
      <Button type="primary" onClick={handle}>
        Click2
      </Button>

      <Outlet />
    </Space>
  );
};

export default React;
