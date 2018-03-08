function age(year, month, day) {
    var d = new Date();
    var age = d.getFullYear() - year;
    if (month < d.getMonth() + 1) {
        return age - 1;
    }
    return age;
}