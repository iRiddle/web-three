import React from "react";
import { Button } from "reactstrap";

const ButtonCosts = ({ title, state }) => {
  return <Button color={state}>{title}</Button>;
};
export default ButtonCosts;
