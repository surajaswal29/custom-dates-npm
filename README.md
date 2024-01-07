# use-custom-dates

This npm package, named "use-custom-dates", provides a utility function called `useCustomDates` that generates a customizable date range based on the current date. The function returns an object containing information about the current date, the previous year's date, and an array representing the labels for the last 7 days, including the day of the month and the corresponding month name.

## Key Features

- Dynamic calculation of the current date, including day of the week, month, year, and leap year status.
- Generation of a date range for the last 7 days, with customizable labels based on the day of the month and the corresponding month name.
- Consideration of month lengths and leap years in the date calculations.

## Installation

````bash
npm install use-custom-dates

## Usage
```javascript
    Copy code
    const useCustomDates = require('use-custom-dates');

    // Get date-related information
    const dateInfo = await useCustomDates();

    // Access properties from the returned object
    console.log(dateInfo.current.todayDate);
    console.log(dateInfo.last7days.L7D);
````

## Returned Object Properties

current

- todayDate: Day of the month with leading zero.
- weekDay: Day of the week (e.g., "Monday").
- month: Month with leading zero.
- year: Current year.
- date: Full date string in UK format.
- monthName: Full name of the current month.
- monthLength: Number of days in the current month.
- isLeapYear: Leap year status for the current year. previous

- year: Previous year.
- month: Previous month with leading zero.
- monthLength: Number of days in the previous month.
- monthName: Full name of the previous month.
- allMonths: Array containing information about all months.

last7days

- from_date: Start date of the last 7 days' range.
- to_date: End date of the last 7 days' range.
- L7D: Array of objects representing the last 7 days' date range labels. Each object has a label property containing the day of the month and the corresponding month name.

## Examples

```javascript
Copy code
// Example 1: Accessing current date information
console.log(dateInfo.current.todayDate);
console.log(dateInfo.current.weekDay);

// Example 2: Accessing last 7 days' date range labels
console.log(dateInfo.last7days.L7D);
```

## License

This project is licensed under the ISC License - see the LICENSE.md file for details.

## Author

Suraj Aswal

## Repository

[GitHub Repository](https://github.com/surajaswal29/custom-dates)
