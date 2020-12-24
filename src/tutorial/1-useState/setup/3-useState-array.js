import React, { useState } from "react";
import { data } from "../../../data";

const UseStateArray = () => {
  const [people, setPeople] = useState(data);
  const removeItem = (id) => {
    let newPeople = people.filter((item) => item.id !== id);
    setPeople(newPeople);
  };
  return (
    <React.Fragment>
      {people.map((item) => {
        const { id, name } = item;
        return (
          <div key={id} className="item">
            <h4>{name}</h4>
            {
              //This button will clear only the indivdual selected item
            }
            <button className="btn" onClick={() => removeItem(id)}>
              Remove
            </button>
          </div>
        );
      })}
      {
        //This button below will clear all the values
      }
      <button
        className="btn"
        onClick={() => {
          setPeople([]);
        }}
      >
        Clear All values!
      </button>
    </React.Fragment>
  );
};

export default UseStateArray;
