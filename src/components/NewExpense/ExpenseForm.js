import React, { useState } from "react";
import { getDateToDefaultFormat } from "../../utils/helpers";

export default function ExpenseForm(props) {
    const [formState, updateState] = useState(newState());

    function newState() {
        return {
            title: "",
            price: 0,
            date: getDateToDefaultFormat(),
        };
    }

    function updateFormState(newValue) {
        updateState((prevState) => {
            return { ...prevState, ...newValue };
        });
    }

    function submitDate(event) {
        event.preventDefault();

        props.onSaveExpenseData(formState);
        updateState(newState);
    }

    return (
        <form
            className="rounded-xl drop-shadow-lg px-2 py-3 bg-zinc-700 mb-2"
            onSubmit={submitDate}
        >
            <div className="grid grid-cols-2 gap-5 mb-5">
                <div className="flex flex-col">
                    <label className="mb-2">Title</label>
                    <input
                        className="p-2 rounded-xl drop-shadow-md text-black"
                        type="text"
                        name="title"
                        value={formState.title}
                        onChange={(e) =>
                            updateFormState({ title: e.target.value })
                        }
                    />
                </div>
                <div className="flex flex-col">
                    <label className="mb-2">Price</label>
                    <input
                        className="p-2 rounded-xl drop-shadow-md text-black"
                        type="number"
                        min="0.01"
                        step="0.01"
                        value={formState.price}
                        onChange={(e) =>
                            updateFormState({
                                price: parseInt(e.target.value || 0),
                            })
                        }
                    />
                </div>
                <div className="flex flex-col">
                    <label className="mb-2">Date</label>
                    <input
                        className="p-2 rounded-xl drop-shadow-md text-black"
                        type="date"
                        name="date"
                        value={formState.date}
                        onChange={(e) =>
                            updateFormState({
                                date: e.target.value,
                            })
                        }
                    />
                </div>
            </div>
            <div className="">
                <button
                    className="px-4 py-2 bg-violet-700 rounded-xl"
                    type="submit"
                >
                    Add expense
                </button>
            </div>
        </form>
    );
}
