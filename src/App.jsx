import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
const App = () => {
  const expenses = [
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
  const addExpenseHandler = (expense) => {
    console.log("App.js");
    console.log(expense);
  };

  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
