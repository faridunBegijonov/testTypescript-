var num = 1000;
var bonus = 500;
var res = num + bonus;
console.log(res);
var user = {
    name: 'Faridun',
    age: 16
};
var sayHello = function (entety) {
    return "".concat(entety.age, " hello ");
};
var users = [{ name: 'Faridun', age: 16 }, { name: 'Farukh', age: 26 }];
var car = ['Hello', 10];
car.push(20);
console.log(car);
var names = ['Faridun', 'Farukh'];
// names[0] = 'Shoh';
// const tuples: [number, string, ...boolean[]] = [1, 'Faridun', true, false];
var StatusCode;
(function (StatusCode) {
    StatusCode["MESSAGE"] = "Welcome";
    StatusCode["STATUS"] = "404";
})(StatusCode || (StatusCode = {}));
console.log(StatusCode.STATUS);
