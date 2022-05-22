import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import { useState } from "react";
const INITIAL_EXPENSES = [
  {
    title: "Car Insurance",
    amount: 295.42,
    date: new Date(2022, 2, 28),
  },
  {
    title: "Brush",
    amount: 123.2,
    date: new Date(2022, 5, 20),
  },
];
const App = () => {
  const [expenses, setExpenses] = useState(INITIAL_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
