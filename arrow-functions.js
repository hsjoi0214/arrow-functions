//vanilla 01
function addTwoNumbers(a,b) {
    return a+b;
};

//arrow function 01
const addTwoNumbers = (a,b) => {
    return a+b;
}


//vanilla 02
function sayHello() {
    console.log("Hello!");
  }
  
//arrow function 02
const sayHello = () => {
    console.log("Hello!");
}


//vanilla 03
function square(x) {
    return x * x;
  }
  
//arrow function 03 (explicit return)
const square = (x) => {
    return x*x;
}

//arrow function 03 (implicit return)
const square = (x) => x*x;


//vanilla 04
function greet(name) {
    let message = "Hello, " + name + "!";
    console.log(message);
  }
  
//arrow function 04
const greet = (name) => {
    let message = "Hello, " + name + "!";
    console.log(message);
}

//vanilla 05
function getPerson(name, age) {
    return {
      name: name,
      age: age,
    };
  }

//arrow function 05
const getPerson = (name, age) => ({name,age});


//vanilla 06
function sayHello(name = "World") {
  console.log(`Hello, ${name}!`);
}

//arrow function 06 (explicit return the value)
const sayHello = (name="World") => {
  console.log(`Hello,${name}!`);
  return `Hello,${name}!`;
}

//arrow function 06 (implicit return the value)
const sayHello = (name="World") => console.log(`Hello,${name}!`);
  

//vanilla 07
function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

//arrow function 07
const sum = (...numbers) => numbers.reduce((total, num) => total + num, 0);


//vanilla function 08
function counter() {
  let count = 0;
  function increment() {
    count++;
    console.log(count);
  }

  return increment;
}

const myCounter = counter();
myCounter(); // Output: 1
myCounter(); // Output: 2


//arrow function 08
const counter = () => {
  let count = 0;
  const increment = () => {
    count++;
    console.log(count);
  };
  return increment
}
