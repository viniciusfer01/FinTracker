import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const dummyArray = [
  {
    expenseId: 'e1',  
    expenseDate: new Date(2021, 5, 22),
    expenseTitle: "Car Insurance",
    expenseAmount: 400,
  },
  {
    expenseId: 'e2',
    expenseDate: new Date(2020, 5, 22),
    expenseTitle: "bus Insurance",
    expenseAmount: 40043,
  },
]

function App() {
  const [expensesArray, setExpensesArray] = useState(dummyArray);

  const extractExpenseHandler = expense => {
    setExpensesArray(prevState => {
        return [expense, ...prevState]
      });
  };

  return (
    <div>
      <NewExpense 
       onCreateExpense={extractExpenseHandler}
      />
      <Expenses Data={expensesArray} />
    </div>
  );
}

export default App;
