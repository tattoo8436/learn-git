import { Input } from "antd";
import React, { useEffect, useState } from "react";

const Filter = () => {
  const [input, setInput] = useState("");
  const [isRefetch, setIsRefetch] = useState(false);

  useEffect(() => {
    handleSearch();
  }, [isRefetch]);

  const handleSearch = () => {
    console.log({ input });
  };

  return (
    <div>
      <div>Filter</div>

      <Input
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
          setIsRefetch((pre) => !pre);
        }}
        onPressEnter={handleSearch}
      />
    </div>
  );
};

export default Filter;
