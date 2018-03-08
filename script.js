function age(year, month, day) {
    var d = new Date();
    var age = d.getFullYear() - year;
    return age;
}