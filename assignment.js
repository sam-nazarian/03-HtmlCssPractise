'use strict';


function describeFunction(country, population, capitalCity) {
    const countryInformation = `${country} has ${population} million people its capital city is ${capitalCity}`;

    return countryInformation;
}

const countryOne = describeFunction('Finland', 6, 'Helsinki')
const countryTwo = describeFunction('Iran', 88, 'Tehran')
const countryThree = describeFunction('Canada', 36, 'Ottawa')

//this will cause a space and then a new line after then space
//after every "," js will add a space
console.log(countryOne, '\n' + countryTwo, '\n' + countryThree);

//parameter => return value;
const calculateAge = brithYear => 2021 - brithYear;
console.log(calculateAge(2001));











/**
 * Returns the percentage the world based on the population (in millions)
 * @param {*} population 
 * @returns 
 */
function percentageOfWorld1(population) {
    return (population / 7900) * 100;//8000 million is the same as 8 billion (i think)
}

const iran1 = percentageOfWorld1(88);
const canada1 = percentageOfWorld1(35);
const hungary1 = percentageOfWorld1(12);

console.log(iran1, canada1, hungary1);

//this function doesn't have a name, and is an expression, so that's why it can be stored in a variable
const percentageOfWorld2 = function (population) {
    return (population / 7900) * 100;//8000 million is the same as 8 billion (i think)
}
const iran2 = percentageOfWorld2(88);
const canada2 = percentageOfWorld2(35);
const hungary2 = percentageOfWorld2(12);
console.log(iran2, canada2, hungary2);


const percentageOfWorld3 = population => (population / 7900) * 100;
const iran3 = percentageOfWorld3(88);
const canada3 = percentageOfWorld3(35);
const hungary3 = percentageOfWorld3(12);
console.log(iran3, canada3, hungary3);




const name = _parameter => 'Return Value';


const describePopulation = function (country, population) {
    console.log
        (
            `${country} has ${population} million people, which is about ${percentageOfWorld1(population)} % of the world.`
        )
}

describePopulation(`Iran`, 84);
describePopulation(`China`, 1441);
describePopulation(`Hungary`, 10);


const population = [84, 1441, 10, 380];
//or, another way to create array:
const population2 = new Array(84, 1441, 10, 380);

if (population.length === 4) {
    console.log('Yes, the array has 4 elements! :) ');
}
else {
    console.log(`No, the array doesn't have 4 elements :(`);
}

//the if could also be done like this: (Ternary Operator)
const bs = population2.length === 4 ? 'Yes, the array has 4 elements! :)' : `No, the array doesn't have 4 elements :(`;

console.log(bs);

const percentages = [percentageOfWorld1(population[0]), percentageOfWorld1(population[1]), percentageOfWorld1(population[2]), percentageOfWorld1(population[population2.length - 1])];

console.log(population);
console.log(population2);
console.log(percentages);





// const calcAverage = function (score1, score2, score3) {
//     return (score1 + score2 + score3) / 3;
// }
/*
const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

const avgDolphins = calcAverage(85, 54, 41);
const avgKoalas = calcAverage(23, 34, 27);


console.log(avgDolphins, avgKoalas);


const checkWinner = function (avgDolphins, avgKoalas) {
    if (avgDolphins >= avgKoalas * 2) {
        console.log(`Dolphins win ${avgDolphins} vs. ${avgKoalas}`);
    } else if (avgDolphins * 2 <= avgKoalas) {
        console.log(`Koalas win ${avgKoalas} vs. ${avgDolphins}`);
    }
    else {
        console.log('No One Won!');
    }
}


checkWinner(avgDolphins, avgKoalas);
*/






const neighbours = new Array('USA', 'Canada', 'Turkey', 'Japan');
console.log(neighbours);

neighbours.push('Utopia');
console.log(neighbours);

neighbours.pop();
console.log(neighbours);

if (!neighbours.includes('germany')) { //capital sensitive
    console.log('Probably not a central European country :D');
}

neighbours[neighbours.indexOf('Canada')] = 'Mexico';
console.log(neighbours);



// CHALLENGE #2

/*
const calcTip = function (value) {
    const tipPercentage = value >= 50 && value <= 300 ? 0.15 : 0.20; //ternary operator
    const tipAmount = value * tipPercentage;

    return tipAmount;
}

//if I wanted to put it into an arrow function, that would have one return I would do:
// const calcTip2 = value => value >= 50 && value <= 300 ? 0.15 * tipPercentage : 0.20 * tipPercentage

console.log('Tip for 100:', calcTip(100));

const bills = new Array(125, 555, 44);
console.log('Bills:', bills);


const tips = new Array(
    calcTip(bills[0]), //calculate the tip, based on the bill
    calcTip(bills[1]),
    calcTip(bills[bills.length - 1]),
)
console.log('Tips:', tips);

const total = [
    bills[0] + tips[0],
    bills[1] + tips[1],
    bills[bills.length - 1] + tips[tips.length - 1],
]
console.log('Total:', total);
*/




const myCountry = {
    country: 'Iran',
    capital: 'Tehran',
    language: 'Persian',
    population: 84,
    neighbours: ['turkey', 'canada', 'mexico', 'usa'],
    describe: function () {
        return `${this.country} has ${this.population} million ${this.language}-speaking people, ${this['neighbours']['length']} neighbouring countries and a capital called ${this.capital}.`; //anything that ends with a ";" is ussually a statement
    },
    checkIsland: function () {
        this.isIsland = this.neighbours.length <= 0 ? true : false;
        return this.isIsland;
    }

};

console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry['neighbours']['length']} neighbouring countries and a capital called ${myCountry.capital}.`);

myCountry.population += 2;
myCountry['population'] -= 2;


console.log(myCountry.describe());


console.log(myCountry.checkIsland());



const mark = {
    fullName: 'Mark Miller',
    mass: '78',
    height: 1.69,

    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
};

const john = {
    fullName: 'John Smith',
    mass: '92',
    height: 1.95,

    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi
    }
};

if (john.calcBMI() > mark.calcBMI()) {
    console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s (${mark.bmi})`);
} else if (john.bmi < mark.bmi) {
    console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s (${john.bmi})`);
}




// for (let i = 0; i < 50; i++) {
//     console.log(`Voter number ${i + 1} is currently voting`);
// }

const populations = [84, 1441, 10, 380];
const percentages2 = [];

for (let i = 0; i < populations.length; i++) {
    percentages2.push(percentageOfWorld1(populations[i]));
}

console.log(percentages2);



const listOfNeighbours = [//row (3 rows)
    // [0][0]   [0][1]
    ['Canada', 'Mexico'], //2 columnss
    // [1][0]
    ['Spain'],//1 column
    // [2][0]    [2][1]    [2][2]
    ['Norway', 'Sweden', 'Russia']//3 columns
];//row (3 rows)



for (let i = 0; i < listOfNeighbours.length; i++) { //row

    for (let j = 0; j < listOfNeighbours[i].length; j++) { //column
        console.log(`Neibour: ${listOfNeighbours[i][j]}`)//[row][column]
    }
}




/**
 * Calculating and returning the tip amount
 * @param {*} value 
 * @returns the tip amount
 */
const calcTip = function (value) {
    const tipPercentage = value >= 50 && value <= 300 ? 0.15 : 0.20; //ternary operator
    const tipAmount = value * tipPercentage;

    return tipAmount;
}

//if I wanted to put it into an arrow function, that would have one return I would do:
// const calcTip2 = value => value >= 50 && value <= 300 ? 0.15 * tipPercentage : 0.20 * tipPercentage

// console.log('Tip for 100:', calcTip(100));

const bills = new Array(22, 295, 176, 440, 37, 105, 10, 1100, 86, 52);
// console.log('Bills:', bills);

const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++) {
    // const tip = calcTip(bills[i] could do this and put it below instead
    tips.push(calcTip(bills[i]));
    totals.push(tips[i] + bills[i]);
}

console.log('Total Value', totals);

const calcAverage = function (arr) {

    let sum = 0; //undefined variable

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }

    const average = sum / arr.length;
    return average;
}

console.log(calcAverage(totals));
console.log(calcAverage(tips));





// const tips = new Array(
//     calcTip(bills[0]), //calculate the tip, based on the bill
//     calcTip(bills[1]),
//     calcTip(bills[bills.length - 1]),
// )
// console.log('Tips:', tips);

// const total = [
//     bills[0] + tips[0],
//     bills[1] + tips[1],
//     bills[bills.length - 1] + tips[tips.length - 1],
// ]
// console.log('Total:', total);












