import React from "react";

const EventClick = () => {
  const handleClick = (index: number) => {
    console.log(`Click ${index}`);
  };

  return (
    <div
      style={{ width: 300, height: 300, backgroundColor: "blue" }}
      onClick={() => handleClick(1)}
    >
      <div
        style={{ width: 200, height: 200, backgroundColor: "green" }}
        onClick={() => handleClick(2)}
      >
        <div
          style={{ width: 100, height: 100, backgroundColor: "orange" }}
          onClick={(e) => {
            e.stopPropagation();
            handleClick(3);
          }}
        ></div>
      </div>
    </div>
  );
};

export default EventClick;
