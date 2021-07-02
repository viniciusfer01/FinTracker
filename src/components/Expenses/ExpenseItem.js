import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

function ExpenseItem(props) {
  return (
    <li>
    <Card className="expense-item">
      <ExpenseDate Date={props.Date}/>
      <div className="expense-item__description">
        <h2>{props.Title}</h2>
        <div className="expense-item__price">${props.Amount}</div>
      </div>
    </Card>
    </li>
  );
}

export default ExpenseItem;
