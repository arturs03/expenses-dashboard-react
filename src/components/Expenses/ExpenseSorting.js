import { useState } from "react";
import { SORTING_OPTIONS } from "../../utils/constansts";
export default function ExpenseSorting(props) {
    const [activeSortingOption, setActiveSortingOption] = useState("");

    function changeActiveSortingOption(e) {
        const newVal = e.target.value;

        setActiveSortingOption(newVal);
        props.onSortingOptionChange(newVal);
    }

    return (
        <div className="container mx-auto mb-2">
            <div className="py-3 px-2 text-black text-right">
                <select
                    name={activeSortingOption}
                    onChange={changeActiveSortingOption}
                    className="rounded-xl p-2"
                >
                    {SORTING_OPTIONS.map(({ name, value }) => (
                        <option value={value} key={value}>
                            {name}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
}
