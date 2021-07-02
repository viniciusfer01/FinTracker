import { useState } from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = props => {
    const SubmitFormHandler = enteredExpenseData => {
        const expenseData = {
            ...enteredExpenseData,
            expenseId: Math.random().toString(),
        }
        props.onCreateExpense(expenseData);
        wasClickedHandler();
    };

    const [wasClicked, setWasClicked] = useState(false);

    const wasClickedHandler = () => {
        setWasClicked(!wasClicked);
    }

    if (wasClicked) {
        return (
            <div className="new-expense">
                <ExpenseForm 
                onSubmitForm={SubmitFormHandler}
                onCancelForm={wasClickedHandler}
                />
            </div>
        )
    }

    return (
        <div className="new-expense">
            <button onClick={wasClickedHandler}>Add New Expense</button>
        </div>
    )
};

export default NewExpense;