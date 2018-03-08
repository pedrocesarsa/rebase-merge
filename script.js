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
    var pattern = /[0-9]{2}\/[0-9]{2}\/[0-9]{4}/;
    if (pattern.test(date)) {
        var year = date.substring(6, 9);
        var month = date.substring(3, 4);
        var day = date.substring(0, 1);
        alert(age(year, month, day));
    }
}