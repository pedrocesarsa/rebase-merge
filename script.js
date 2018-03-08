function age(year, month, day) {
    var d = new Date();
    var age = d.getFullYear() - year;
    if (month < d.getMonth() + 1) {
        return age - 1;
    } else if (month == d.getMonth + 1 && day < d.getDate()) {
        return age - 1;
    }
    return age;
}

function handleDate(date) {
    var year, month, day;
    var patternBr = /[0-9]{2}\/[0-9]{2}\/[0-9]{4}/;
    if (patternBr.test(date)) {
        year = date.substring(6, 9);
        month = date.substring(3, 4);
        day = date.substring(0, 1);
    }
    var patternUs = /[0-9]{4}\/[0-9]{2}\/[0-9]{2}/;
    if (patternUs.test(date)) {
        year = date.substring(0, 3);
        month = date.substring(5, 6);
        day = date.substring(8, 9);
    }
    alert(age(year, month, day));
}