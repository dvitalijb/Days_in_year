function daysInYear(year) {
    try {
        if (!Number.isInteger(year)) {
            throw new SyntaxError("not a positive integer");
        }

        const isIntercalary = year % 400 === 0
            || (year % 100 !== 0 && year % 4 === 0);

        return isIntercalary ? 366 : 365;
    } catch(e) {
        console.log(e);
    }
}
