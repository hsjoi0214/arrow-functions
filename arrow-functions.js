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