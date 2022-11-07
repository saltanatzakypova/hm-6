import React, { useState } from "react";

const Counter = () => {
  const [Counter, setCounter] = useState(0);

  const increase = () => {
    setCounter(Counter + 1);
  };
  const decrease = () => {
    if (Counter > 0) {
      setCounter(Counter - 1);
    }
  };

  return (
    <div>
      <div>{Counter}</div>
      <button onClick={increase}>increase</button>
      <button onClick={decrease}>decrease</button>
    </div>
  );
};

export default Counter;
