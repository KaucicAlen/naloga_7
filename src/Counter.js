import React, { memo } from "react";

const Counter = ({ number }) => {
  return <div>{number}</div>;
};

export default memo(Counter);
