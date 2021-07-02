import { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesChart from "./ExpensesChart";
import Card from "../UI/Card";
import "./Expenses.css";

function Expenses(props) {
  const [filterValue, setFilterValue] = useState("2020");

  const filterSetHandler = (selectedYear) => {
    setFilterValue(selectedYear);
  };

  const filteredArray = props.Data.filter(
    (expense) => expense.expenseDate.getFullYear().toString() === filterValue
  );

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter onFilter={filterSetHandler} yearState={filterValue} />
        <ExpensesChart expenses={filteredArray} />
        <ExpensesList 
          items={filteredArray}
        />
      </Card>
    </div>
  );
}

export default Expenses;
