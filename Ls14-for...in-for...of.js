var employees = [
    {name: 'Thanh', age: 28},
    {name: 'Vu', age: 27},
    {name: 'Dung', age: 26}
];

for (var employee of employees) {
    console.log(employee.name, employee.age);
}

console.log('======');

var myDogs = {
    name: 'Đần',
    age: 1,
    weight: 15
}

for (var key in myDogs) {
    console.log(key, myDogs[key]);
}