import React from "react";
import { Button } from "reactstrap";

const ButtonCosts = ({ title, state, onClick }) => {
  return (
    <Button color={state} onClick={onClick}>
      {title}
    </Button>
  );
};
export default ButtonCosts;
