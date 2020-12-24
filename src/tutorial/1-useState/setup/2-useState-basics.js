import React, { useState } from "react";
//this useState hook is used to control the state of a component/container,
//the first parameter is the value that is controlled by the second function,
//if you need to change the first value, you can do it using the state's function

//Some common rules for using any form of hooks:
// 1) The component's name must be in upper case, having a hook in the component
// that is lower case will not work
// 2) The hook must be within a function/component body
// 3) cannot call conditionally (meaning using the hooks within a condition)

const UseStateBasics = () => {
  // const value = useState(100)[0];
  // const handler = useState(100)[1];
  // console.log(value, handler);
  const [text, setText] = useState("Hello World");
  return (
    <React.Fragment>
      <h1>{text}</h1>
      <button
        className="btn"
        onClick={() => {
          if (text === "Hello World") {
            return setText("New Title");
          } else {
            return setText("Hello World");
          }
        }}
      >
        Change Title
      </button>
    </React.Fragment>
  );
};

export default UseStateBasics;
