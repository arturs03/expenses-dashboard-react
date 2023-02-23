export function getDateToDefaultFormat(date) {
    const dateObj = date ? new Date(date) : new Date();
    return dateObj?.toISOString().split("T")[0];
}
