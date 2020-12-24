import React, { useState } from "react";

const UseStateCounter = () => {
  const [value, setValue] = useState(0);
  const decreaseCount = () => {
    setValue(value - 1);
  };
  const increaseCount = () => {
    setValue(value + 1);
  };
  const resetValue = () => {
    setValue(0);
  };
  const complexIncrease = () => {
    setTimeout(() => {
      //setValue(value + 1);
      // by doing this, we are getting the old stale value, so whenever we click complex increase multiple times
      // we are getting it updated only once, so to change that we are going to get the previous state within the function of useState
      setValue((prevState) => {
        return prevState + 1;
      });
    }, 2000);
  };
  return (
    <React.Fragment>
      <section style={{ margin: "4rem 0" }}>
        <h2>regular counter</h2>
        <h1>{value}</h1>
        <button className="btn" onClick={() => decreaseCount()}>
          Decrease
        </button>
        <button className="btn" onClick={() => increaseCount()}>
          Increase
        </button>
        <button className="btn" onClick={() => resetValue()}>
          Reset Value
        </button>
      </section>
      <section style={{ margin: "4rem 0" }}>
        <h2>Complex counter</h2>
        <h1>{value}</h1>
        <button className="btn" onClick={() => complexIncrease()}>
          Complex Increase
        </button>
      </section>
    </React.Fragment>
  );
};

export default UseStateCounter;
