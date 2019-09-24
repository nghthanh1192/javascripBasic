// var arrayName = [value, value,...]
//                index 0 index 1
//                element 1  ...

var dog1 = {
    type: 'chó ta'    
};

var dog2 = {
    type: 'lạp xưởng'
};

var dog3 = {
    name: 'Đần',
    type: 'husky'
};

var bunchOfDog = [dog1, dog2, dog3];
console.log(bunchOfDog);
console.log(bunchOfDog[2]);
console.log(bunchOfDog[2].name);

var dog4 = {
    type: 'shiba'
};

bunchOfDog[0] = dog4;
console.log(bunchOfDog);


// save list element (Phone number)

var contacts = [
    {name: 'Thanh', phone: '0998734'},
    {name: 'Dung', phone: '0998734'}
]; 

console.log(contacts);