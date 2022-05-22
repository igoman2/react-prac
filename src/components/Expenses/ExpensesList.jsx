import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";
const ExpensesList = (props) => {
  let expensesContent = <p>No expenses found.</p>;
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">Found no expenses.</h2>;
  } else {
    return (
      <ul className="expenses-list">
        {props.items.map((expense, index) => (
          <ExpenseItem
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
            key={index}
          />
        ))}
      </ul>
    );
  }
};
export default ExpensesList;
