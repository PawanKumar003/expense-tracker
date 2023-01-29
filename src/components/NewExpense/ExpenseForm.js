import React, { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enterdTitle, setEnterdTitle] = useState("");
  const [enterdAmount, setEnterdAmount] = useState("");
  const [enterdDate, setEnterdDate] = useState("");
  //const [saveData, setSaveData] = useState();

  const titleChangrHandler = (e) => {
    setEnterdTitle(e.target.value);
  };
  const amountChangrHandler = (e) => {
    setEnterdAmount(e.target.value);
  };
  const dateChangrHandler = (e) => {
    setEnterdDate(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const expenseData = {
      title: enterdTitle,
      price: enterdAmount,
      stock: enterdDate,
    };

    //setSaveData(expenseData);

    props.onSaveExpenseData(expenseData);

    setEnterdTitle("");
    setEnterdAmount("");
    setEnterdDate("");
  };

  // useEffect(() => {
  //   localStorage.setItem("expanesData", JSON.stringify(saveData));
  // }, [saveData]);

  // let getDataFromLoaclstorage = localStorage.getItem("expanesData");
  // props.onSaveExpenseData(getDataFromLoaclstorage);
  //console.log(getDataFromLoaclstorage);

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense_controls ">
        <div className="new-expense_control">
          <label>Title</label>
          <input
            type="text"
            value={enterdTitle}
            onChange={titleChangrHandler}
          />
        </div>
        <div className="new-expense_control">
          <label>Amount</label>
          <input
            type="number"
            min="o.01"
            step="0.01"
            onChange={amountChangrHandler}
            value={enterdAmount}
          />
        </div>
        <div className="new-expense_control">
          <label>How Much Stoks</label>
          <input
            type="number"
            onChange={dateChangrHandler}
            value={enterdDate}
          />
        </div>
      </div>
      <div className="new-expense_actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
