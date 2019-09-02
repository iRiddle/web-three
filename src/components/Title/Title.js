import React from "react";

const Title = ({ h1, h2 }) => {
  return h1 ? <h1>{h1}</h1> : <h2>{h2}</h2>;
};

export default Title;
