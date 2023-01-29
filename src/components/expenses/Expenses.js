import React from "react";
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";

const Expenses = (props) => {
  return (
    <Card className="expenses">
      {props.item.map((item) => {
        // if (item.amount < 300) {
        //   return null;
        // }
        //console.log(item, "asd,fjhks");
        return (
          <ExpenseItem
            stock={item.stock}
            title={item.title}
            amount={item.price}
            key={item.id}
          />
        );
      })}
    </Card>
  );
};

export default Expenses;
