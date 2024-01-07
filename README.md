# use-custom-dates

[![JavaScript](https://img.shields.io/badge/Language-JavaScript-yellow)](https://developer.mozilla.org/en-US/docs/Web/JavaScript) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](http://makeapullrequest.com) [![Version](https://img.shields.io/badge/Version-1.0.0-blue)](https://github.com/surajaswal29/custom-dates/releases) [![License](https://img.shields.io/badge/License-ISC-green)](https://opensource.org/licenses/ISC) [![Downloads](https://img.shields.io/github/downloads/surajaswal29/custom-dates/latest/total.svg)](https://github.com/surajaswal29/custom-dates/releases) [![Contributors](https://img.shields.io/github/contributors/surajaswal29/custom-dates.svg)](https://github.com/surajaswal29/custom-dates/graphs/contributors) [![GitHub Issues](https://img.shields.io/github/issues/surajaswal29/custom-dates.svg)](https://github.com/surajaswal29/custom-dates/issues)

This npm package, named "use-custom-dates", provides a utility function called `useCustomDates` that generates a customizable date range based on the current date. The function returns an object containing information about the current date, the previous year's date, and an array representing the labels for the last 7 days, including the day of the month and the corresponding month name.

## Key Features

- Dynamic calculation of the current date, including day of the week, month, year, and leap year status.
- Generation of a date range for the last 7 days, with customizable labels based on the day of the month and the corresponding month name.
- Consideration of month lengths and leap years in the date calculations.

## Installation

```
npm install use-custom-dates
```

## Usage

```javascript
const useCustomDates = require("use-custom-dates")

// Get date-related information
const dateInfo = await useCustomDates()

// Access properties from the returned object
console.log(dateInfo)
```

####Output

```javascript
{
  current: {
    todayDate: '07',
    weekDay: 'Sunday',
    month: '01',
    year: 2024,
    date: '07/01/2024',
    monthName: 'January',
    monthLength: 31,
    isLeapYear: true
  },
  previous: { year: 2023, month: 12, monthLength: 31, monthName: 'December' },
  allMonths: [
    { month: 'January', shortName: 'Jan', numOfDays: 31, weeks: 5 },
    { month: 'February', shortName: 'Feb', numOfDays: 29, weeks: 4 },
    { month: 'March', shortName: 'Mar', numOfDays: 31, weeks: 5 },
    { month: 'April', shortName: 'Apr', numOfDays: 30, weeks: 5 },
    { month: 'May', shortName: 'May', numOfDays: 31, weeks: 5 },
    { month: 'June', shortName: 'Jun', numOfDays: 30, weeks: 5 },
    { month: 'July', shortName: 'Jul', numOfDays: 31, weeks: 5 },
    { month: 'August', shortName: 'Aug', numOfDays: 31, weeks: 5 },
    { month: 'September', shortName: 'Sep', numOfDays: 30, weeks: 5 },
    { month: 'October', shortName: 'Oct', numOfDays: 31, weeks: 5 },
    { month: 'November', shortName: 'Nov', numOfDays: 30, weeks: 5 },
    { month: 'December', shortName: 'Dec', numOfDays: 31, weeks: 5 }
  ],
  last7days: {
    from_date: 1,
    to_date: 7,
    L7D: [
        { label: '1 January' },
        { label: '2 January' },
        { label: '3 January' },
        { label: '4 January' },
        { label: '5 January' },
        { label: '6 January' },
        { label: '7 January' }
    ]
  }
}
```

## Returned Object Properties

**current**

- **todayDate:** Day of the month with leading zero.
- **weekDay:** Day of the week (e.g., "Monday").
- **month:** Month with leading zero.
- **year:** Current year.
- **date:** Full date string in UK format.
- **monthName:** Full name of the current month.
- **monthLength:** Number of days in the current month.
- **isLeapYear:** Leap year status for the current year.

**previous**

- **year:** Previous year.
- **month:** Previous month with leading zero.
- **monthLength:** Number of days in the previous month.
- **monthName:** Full name of the previous month.

**allMonths:** Array containing information about all months.

**last7days**

- **from_date:** Start date of the last 7 days' range.
- **to_date:** End date of the last 7 days' range.
- **L7D:** Array of objects representing the last 7 days' date range labels. Each object has a label property containing the day of the month and the corresponding month name.

## Examples

```javascript
// Example 1: Accessing current date information
console.log(dateInfo.current.todayDate)
console.log(dateInfo.current.weekDay)

// Example 2: Accessing last 7 days' date range labels
console.log(dateInfo.last7days.L7D)
```

## License

This project is licensed under the ISC License - see the LICENSE.md file for details.

## Author

[Suraj Aswal](https://github.com/surajaswal29)

## Repository

[GitHub Repository](https://github.com/surajaswal29/custom-dates)
