export default function ExpenseIitemDate({ date, className }) {
    const fullMonth = date?.toLocaleString("en-US", { month: "long" }),
        classes = `bg-fuchsia-900 p-2 rounded-xl flex items-center flex-col ${className}`;

    return (
        <div className={classes}>
            <p className="mb-1 text-xl">{date.getDay()}</p>
            <p className="mb-1">{fullMonth}</p>
            <p>{date.getFullYear()}</p>
        </div>
    );
}
