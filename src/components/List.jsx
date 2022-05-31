import React from "react";

const List = (props) => {
  return (
    <ul>
      {props.list.map((list, i) => (
        <div key={i}>
          {list.name} {list.age}
        </div>
      ))}
    </ul>
  );
};

export default List;
