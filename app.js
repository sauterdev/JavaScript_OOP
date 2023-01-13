console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

class Person {
  constructor(name, pets, residence, hobbies) {
    this.name = name;
    this.pets = pets;
    this.residence = residence;
    this.hobbies = hobbies;
  }

  addHobby(newHobby) {
    return this.hobbies.push(newHobby);
  }

  removeHobby(oldHobby) {
    this.hobbies = this.hobbies.filter((ele) => ele !== oldHobby);
    return this.hobbies;
  }

  greeting() {
    console.log(`Good day, ${this.name}. I also enjoy ${this.hobbies[0]}. `);
  }
}

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

class Coder extends Person {
  constructor(name, pets, residence, hobbies, occupation) {
    super(name, pets, residence, hobbies);
    this.occupation = occupation;
  }

  greeting() {
    console.log(
      `Hey ${this.name}! I am a ${this.occupation} too and I also have ${this.pets} pets.`
    );
  }
}

// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");

const personOne = new Person(`Chris`, 2, `house`, [
  `magnets`,
  `milksteak`,
  `ghouls`,
]);

personOne.addHobby(`coding`);
personOne.removeHobby(`ghouls`);
personOne.greeting();
console.log(personOne);

const coderOne = new Coder(
  `Adam`,
  1,
  `tent`,
  [`camping`, `fire`, `hard drugs`],
  `junior developer`
);
coderOne.addHobby(`coding`);
coderOne.removeHobby(`fire`);
coderOne.greeting();
console.log(coderOne);

// Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");

class Calculator {
  constructor() {
    this.result = 0;
  }

// dammit!!   checkParams(paramA, paramB) {
//     if (paramB == undefined) {
//       paramB = paramA;
//       paramA = this.result;
//     }
//     return [paramA, paramB];
//   }

  add(a, b) {
    if (b == undefined) {
        b = a;
        a = this.result
    }
    this.result = a + b;
    return this.result;
  }

  subtract(a, b) {
    if (b == undefined) {
        b = a;
        a = this.result
    }
    this.result = a - b;
    return this.result;
  }

  multiply(a, b) {
    if (b == undefined) {
        b = a;
        a = this.result
    }
    this.result = a * b;
    return this.result;
  }

  divide(a, b) {
    if (b == undefined) {
        b = a;
        a = this.result
    }
    this.result = a / b;
    return this.result;
  }
}

let newObj = new Calculator();
console.log(newObj.add(2, 5));
console.log(newObj.subtract(2, 5));
console.log(newObj.multiply(2, 5));
console.log(newObj.divide(2, 5));
console.log(newObj.add(5));
