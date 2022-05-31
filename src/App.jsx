import { useState } from "react";
import List from "./components/List";
import Modal from "./components/Modal";
import AddUser from "./components/Users/AddUser";

const App = () => {
  const [list, setList] = useState([]);
  const [flag, setFlag] = useState("");
  const submitHandler = (name, age) => {
    console.log(age);
    if (name.trim().length === 0 || age.toString().trim().length === 0) {
      setFlag("input");
      return;
    }
    if (age < 0) {
      setFlag("minus");
      return;
    }
    setList([...list, { name: name, age: age }]);
  };

  // 1. 입력 미완성
  // 2. 나이가 음수

  return (
    <div className="App">
      <AddUser list={list} onSubmit={submitHandler} />
      <List list={list} />
      <Modal flag={flag} />
    </div>
  );
};

export default App;
