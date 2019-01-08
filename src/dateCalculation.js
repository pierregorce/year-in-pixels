export const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
export const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
export const year = new Date().getFullYear();

export function daysQuantityInMonth(month, year) {
    return new Date(year, month, 0).getDate();
}

export function getDays() {
    let days = [];

    for (var i = 0; i < months.length; i++) {
        let dayQuantity = daysQuantityInMonth(i, year);
        for (var j = 0; j < dayQuantity; j++) {
            days.push({
                date: new Date(year, i, j + 1).getTime(),
                message: '',
                selected: false,
                settingApplied: {}
            })
        }
    }

    return days;
}