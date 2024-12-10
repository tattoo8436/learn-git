import { Input } from "antd";
import React, { useState } from "react";

const InputCustom = () => {
  const [input, setInput] = useState("");

  return <Input value={input} onChange={(e) => setInput(e.target.value)} />;
};

export default InputCustom;
