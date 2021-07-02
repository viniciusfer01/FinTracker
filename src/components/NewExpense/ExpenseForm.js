import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = props => {
  const [userInput, setUserInput] = useState({
    title: "",
    amount: "",
    date: "",
  });

  const inputTextHandler = (event) => {
    setUserInput((previousState) => {
      return { ...previousState, title: event.target.value };
    });
  };

  const inputAmountHandler = (event) => {
    setUserInput((previousState) => {
      return { ...previousState, amount: event.target.value };
    });
  };

  const inputDateHandler = (event) => {
    setUserInput((previousState) => {
      return { ...previousState, date: event.target.value };
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
        expenseTitle: userInput.title,
        expenseAmount: +userInput.amount,
        expenseDate: new Date(userInput.date),
    }

    setUserInput({
      title: "",
      amount: "",
      date: "",
    });

    props.onSubmitForm(expenseData);
  };

  const cancelFormHandler = () => {
    props.onCancelForm()
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input 
            type="text" 
            onChange={inputTextHandler} 
            value={userInput.title}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={inputAmountHandler}
            value={userInput.amount}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="Date"
            min="2019-01-01"
            max="2022-12-31"
            onChange={inputDateHandler}
            value={userInput.date}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={cancelFormHandler}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
