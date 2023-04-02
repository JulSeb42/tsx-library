/*=============================================== Calendar data ===============================================*/

const allDays: number[] = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
const leapDays: number[] = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

const weekDaysEn = {
    mon: "Monday",
    tue: "Tuesday",
    wed: "Wednesday",
    thu: "Thursday",
    fri: "Friday",
    sat: "Saturday",
    sun: "Sunday",
}

const monthsEn = {
    jan: "January",
    feb: "February",
    mar: "March",
    apr: "April",
    may: "May",
    jun: "June",
    jul: "July",
    aug: "August",
    sep: "September",
    oct: "October",
    nov: "November",
    dec: "December",
}

export { allDays, leapDays, weekDaysEn, monthsEn }
