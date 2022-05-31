import { useState } from "react";

const Input = (props) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const nameInputHandler = (event) => {
    setName(event.target.value);
  };
  const ageInputHandler = (event) => {
    setAge(+event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    props.onSubmit(name, +age);
    setName("");
    setAge("");
  };
  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="">name</label>
      <input type="text" value={name} onChange={nameInputHandler} />
      <label htmlFor="">age</label>
      <input type="number" value={age} onChange={ageInputHandler} />
      <button type="submit">submit</button>
    </form>
  );
};

export default Input;
