function addDays(date, days) {
    date = new Date()
    let daysOfDate = date.getDate()
    days = Number(days)
    let future = daysOfDate + days
    date.setDate(future)

return date

}
console.log(addDays('сегодня', 5))