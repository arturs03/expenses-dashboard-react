import React from "react";
import ExpenseForm from "./ExpenseForm";

export default function NewExpense(props) {
    function saveExpenseDateHandler(enteredExpenseData) {
        const expenseData = {
            id: Math.random().toString(),
            ...enteredExpenseData,
        };

        props.onSaveExpenseItem(expenseData);
    }

    return (
        <div className="container mx-auto">
            <ExpenseForm onSaveExpenseData={saveExpenseDateHandler} />
        </div>
    );
}
