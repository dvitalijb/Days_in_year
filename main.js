function daysInYear(year) {
    try {
        if (!Number.isInteger(year)) {
            throw 'not valid';
        }

        let sum = 0;

        for (let x = 0; x < 12; x++) {
            sum += new Date(year, x, 0).getDate();
        }
        return sum;
    } catch(e) {
        console.log(e);
    }
}
