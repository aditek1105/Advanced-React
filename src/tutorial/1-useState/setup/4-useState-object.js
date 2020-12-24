import React, { useState } from "react";

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: "Peter",
    age: 24,
    message: "Hey there!",
  });
  const changeMessage = () => {
    // setPerson("New!");
    // setPerson({message:"New!"})

    if (person.message === "Hey there!") {
      setPerson({ ...person, message: "Hello Peter!" });
    } else {
      setPerson({ ...person, message: "Hey there!" });
    }

    {
      // by setting the setPerson("New!") you are essentially just wiping out the entire object,
      // a better fix would be to do this setPerson({message: "New!"}), but this would also essentially just change the message
      // and the old values such as the name and the age will be wiped off, to keep them we use the spread operator
      // like this setPerson({...person, message:"new!"}), this will essentially keep the old values and then change the message of the object
    }
  };
  return (
    <React.Fragment>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h3>{person.message}</h3>
      <button className="btn" onClick={() => changeMessage()}>
        Change message
      </button>
    </React.Fragment>
  );
};

export default UseStateObject;
