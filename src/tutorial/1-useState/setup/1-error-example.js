import React from "react";

const ErrorExample = () => {
  let title = "This is a title";
  return (
    <React.Fragment>
      <h2>{title}</h2>
      <button
        type="button"
        className="btn"
        onClick={() => {
          return console.log("Hello");
        }}
      >
        Button
      </button>
    </React.Fragment>
  );
};

export default ErrorExample;
