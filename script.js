'use strict';

//for
// const interface = 'hello'; //strict mode will catch this error


// hasthis = true; //strict mode will see this as an error because the variable isn't defined


function fruitProcessor() {

}






//the firtName: , lastName: and etc... are also called keys, but htey are also called properties
//properties must be an expression
const Jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    job: 'teacher',
    birthYear: 1991,
    friends: ['Michael', 'Peter', 'Steven'],
    hasDriversLicense: true,
    calAge: function () {
        this.age = 2037 - this.birthYear;
        return this.age;
    },

    getSummary: function () {
        return `${this.firstName} is a ${this.age}-year old teacher, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license`
    }
};


// Jonas has 3 friends, and his best friend is called Michael

//remember the "." is an operator, so we are just getting the property of an object
//length is a property of arrays, this property is a method
// the index of an rray is a bracket notation
console.log();



//I think an object's propeties that are functions, are called "methods"



//Jonas is a 46-year old teacher. and he has a driver's license. 

Jonas.calAge();
// console.log(Jonas);

// console.log(`${Jonas.firstName} is a ${age}-year old teacher, and he has ${hasDriversLicense} driver's license`);
console.log(Jonas.getSummary());





