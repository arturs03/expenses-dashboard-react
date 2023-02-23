import CardWrapper from "../UI/CardWrapper";
import ExpenseIitemDate from "./ExpenseItemDate";

export default function ExpenseItem({
    id,
    title,
    price,
    date,
    onRemmoveExpenseItem,
}) {
    function remmoveItem() {
        onRemmoveExpenseItem(id);
    }

    return (
        <CardWrapper className="flex px-2 py-3 bg-zinc-700 items-center mb-2">
            <ExpenseIitemDate className="mr-4" date={date} />
            <h2 className="mr-auto text-xl">{title}</h2>
            <CardWrapper className="bg-fuchsia-900 rounded-xl px-4 py-2">
                {price}
            </CardWrapper>
            <button
                className="self-start px-2 hover:text-violet-600"
                onClick={remmoveItem}
            >
                x
            </button>
        </CardWrapper>
    );
}
