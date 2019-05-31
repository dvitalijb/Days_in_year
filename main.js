function daysInYear(year) {
    try {
        if (!Number.isInteger(year)) {
            throw new SyntaxError("not valid");
        }

        let days = 366;
        const yearStart = new Date(year, 0, 0).getTime();
        const yearEnd = new Date(year + 1, 0, 0).getTime();
        const milliSeconds = yearEnd - yearStart;

        if (milliSeconds % 365 === 0) {
            days = 365;
        }

        return days;
    } catch(e) {
        console.log(e);
    }
}
