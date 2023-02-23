import ExpenseItem from "./ExpenseItem";
import NewExpense from "../NewExpense/NewExpense";
import React, { useState } from "react";
import ExpenseSorting from "./ExpenseSorting";
import {
    SORTING_OPTIONS_EXPENSIVE,
    SORTING_OPTIONS_CHEAPEST,
} from "../../utils/constansts";

export default function Expenses() {
    const [expensesState, updateExpensesState] = useState([
        {
            id: 1,
            title: "Car insurance",
            price: 55,
            date: new Date(),
        },
    ]);

    function addExpenseItem(newExpenseItem) {
        updateExpensesState((prevState) => {
            newExpenseItem.date = new Date(newExpenseItem.date);
            return [...prevState, newExpenseItem];
        });
    }

    function removeExpenseItem(expenseItemId) {
        const expenses = expensesState.filter(({ id }) => id !== expenseItemId);
        updateExpensesState(expenses);
    }

    function sortExpenseItems(sortBy) {
        const items = [...expensesState];

        if (sortBy === SORTING_OPTIONS_CHEAPEST) {
            items.sort((a, b) => a.price - b.price);
        } else if (sortBy === SORTING_OPTIONS_EXPENSIVE) {
            items.sort((a, b) => b.price - a.price);
        }

        updateExpensesState(items);
    }

    const expenseContent = expensesState.length ? (
        expensesState.map((expense) => (
            <ExpenseItem
                key={expense.id}
                id={expense.id}
                title={expense.title}
                price={expense.price}
                date={expense.date}
                onRemmoveExpenseItem={removeExpenseItem}
            />
        ))
    ) : (
        <p className="text-center">No items added</p>
    );

    return (
        <div>
            <div>
                <NewExpense onSaveExpenseItem={addExpenseItem} />
            </div>
            <ExpenseSorting onSortingOptionChange={sortExpenseItems} />
            <div className="container mx-auto">{expenseContent}</div>
        </div>
    );
}
