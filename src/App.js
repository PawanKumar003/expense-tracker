import React, { useEffect } from "react";
import Expenses from "./components/expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import { useState } from "react";

const App = () => {
  const [expenses, setExpense] = useState([]);
  const apiData = async () => {
    const apData = await fetch("https://dummyjson.com/products");
    const data = await apData.json();
    const getDataNow = data.products;
    setExpense(getDataNow);
  };

  useEffect(() => {
    apiData();
  }, []);

  // fetch("https://dummyjson.com/products", {
  //   method: "POST",
  //   headers: { "Content-Type": "application/json" },
  //   body: JSON.stringify(expenses),
  // }).then((expense) => {
  //   apiData();
  // });

  const addExpenseHandler = (expense) => {
    const updateExpense = [expense, ...expenses];
    setExpense(updateExpense);
  };

  const expenses1 = expenses.filter((expense) => expense.price > 500);
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses item={expenses1} />
    </div>
  );
};

export default App;
