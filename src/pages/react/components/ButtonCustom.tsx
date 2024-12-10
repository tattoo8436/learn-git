import { Button } from "antd";
import React, { LegacyRef } from "react";

const ButtonCustom = React.forwardRef((props: any, ref: any) => {
  const handleClick = () => {
    console.log("Button clicked");
  };

  return (
    <Button ref={ref} type="primary" onClick={handleClick}>
      Click
    </Button>
  );
});

export default ButtonCustom;
