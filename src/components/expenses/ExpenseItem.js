import "./ExpenseItem.css";
import React from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
  // const [title, setTitle] = useState(props.title);
  // const [chageTitle, setChangeTitle] = useState("");

  // const clickhandler = () => {
  //   setTitle(chageTitle);
  // };
  // const changehandler = (e) => {
  //   setChangeTitle(e.target.value);
  // };

  return (
    <Card className="expense-item">
      <ExpenseDate stocks={props.stock} />
      <div className="expense-item__description">
        <h2 className="expense-item h2">{props.title}</h2>
        <div className="expense-item_price">${props.amount}</div>
      </div>
      {/* <input type="text" onChange={changehandler} />
      <button onClick={clickhandler}>Change title</button> */}
    </Card>
  );
};

export default ExpenseItem;
