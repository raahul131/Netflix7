import React from "react";

const PlayTime = ({ time }) => {
  const hours = Math.floor(time / 60);
  const minutes = time % 60;
  return (
    <div>
      {" "}
      {hours} hours {minutes} minutes
    </div>
  );
};

export default PlayTime;
