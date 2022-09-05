import React from "react";

const Time = (props) => {
  const { time } = props;
  return (
    <div>{`${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`}</div>
  );
};

export default Time;
