const useCustomDates = async () => {
  const date = new Date()
  const year = date.getFullYear()

  const weeks = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

  const padZero = (number) => {
    return number > 9 ? number : `0${number}`
  }

  const l7d = {
    fromDate: date.getDate() - 6,
    toDate: date.getDate(),
  }

  // month and their lenght and number of weeks
  const allMonths = [
    { month: "January", shortName: "Jan", numOfDays: 31, weeks: 5 },
    { month: "February", shortName: "Feb", numOfDays: (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0 ? 29 : 28, weeks: 4 },
    { month: "March", shortName: "Mar", numOfDays: 31, weeks: 5 },
    { month: "April", shortName: "Apr", numOfDays: 30, weeks: 5 },
    { month: "May", shortName: "May", numOfDays: 31, weeks: 5 },
    { month: "June", shortName: "Jun", numOfDays: 30, weeks: 5 },
    { month: "July", shortName: "Jul", numOfDays: 31, weeks: 5 },
    { month: "August", shortName: "Aug", numOfDays: 31, weeks: 5 },
    { month: "September", shortName: "Sep", numOfDays: 30, weeks: 5 },
    { month: "October", shortName: "Oct", numOfDays: 31, weeks: 5 },
    { month: "November", shortName: "Nov", numOfDays: 30, weeks: 5 },
    { month: "December", shortName: "Dec", numOfDays: 31, weeks: 5 },
  ]

  const labels = []

  const date_data = {
    current: {
      todayDate: padZero(date.getDate()),
      weekDay: weeks[date.getDay()],
      month: padZero(date.getMonth() + 1),
      year,
      date: date.toLocaleDateString(["en-UK"]),
      monthName: allMonths[date.getMonth()].month,
      monthLength: allMonths[date.getMonth()].numOfDays,
      isLeapYear: (date.getFullYear() % 4 === 0 && date.getFullYear() % 100 !== 0) || date.getFullYear() % 400 === 0,
    },
    previous: {
      year: date.getFullYear() - 1,
      month: padZero(date.getMonth() === 0 ? 12 : date.getMonth()),
      monthLength: allMonths[date.getMonth() === 0 ? 11 : date.getMonth() - 1].numOfDays,
      monthName: allMonths[date.getMonth() === 0 ? 11 : date.getMonth() - 1].month,
    },
    allMonths,
  }

  if (l7d.fromDate <= 0) {
    const fromDate = date_data.previous.monthLength + l7d.fromDate
    //console.log(fromDate);
    //console.log(dateRange);

    for (let j = fromDate; j <= date_data.previous.monthLength; j++) {
      labels.push({
        label: `${j} ${date_data.previous.monthName}`,
      })
    }

    for (let i = 1; i <= l7d.toDate; i++) {
      labels.push({
        label: `${i} ${date_data.current.monthName}`,
      })
    }
  } else {
    for (let i = l7d.fromDate; i <= l7d.toDate; i++) {
      labels.push({
        label: `${i} ${date_data.current.monthName}`,
      })
    }
  }

  //returning date data object
  return {
    ...date_data,
    last7days: {
      from_date: l7d.fromDate,
      to_date: l7d.toDate,
      L7D: [...labels],
    },
  }
}

export default useCustomDates
