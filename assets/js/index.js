/**
 * 
 * @param {number} value
 * @returns {boolean} - return true if value is a number or false
 */
function isNumber(value){
  return !isNaN(value);
}

/**
 * 
 * @param {number} var1 
 * @param {number} var2 
 * @param {function} callback - function min or max
 * @returns {undefined} - function show result for callback function
 */
function showResult(var1, var2, callback){
  if(isNumber(var1) && isNumber(var2)){
    console.log("Compare numbers")
    console.log(callback(parseInt(var1), parseInt(var2)));
  }
  else if(var1 === null || var2 === null){
    console.log("Один из аргументов равен null, сравнение невозможно!");
  }
  else{
    console.log("Compare strings");
    console.log(callback(var1, var2));
  }
}

/* Task 1 function max*/
/**
 * 
 * @param {number} num1 
 * @param {number} num2 
 * @returns {number} return maximum of two numbers
 */
function max(num1, num2){
  return num1 > num2 ? num1 : num2;
}

/* task 2 function min */
/**
 * 
 * @param {number} num1 
 * @param {number} num2 
 * @returns {number} return minimum of two numbers
 */
function min(num1, num2){
  return num1 < num2 ? num1 : num2;
}

/* Task 3 */
/**
 * 
 * @param {number} value 
 * @returns {null | boolean} - return true if value is even number, return null if value not a number
 */
function isEven(value){
  if(!isNumber(value)){
    console.log("it's not a number");
    return null;
  }
  return value % 2 === 0;
}

/* Task 4 */
/**
 * 
 * @param {number} a - first number
 * @param {number} b - second number
 * @param {number} c - third number
 * @returns {false | null | [number, number]} solve a quadric equation
 */
function solve(a, b, c){
  if(isNaN(a - b - c)){
    console.log("Wrong input");
    return false;
  }
  if(a === 0){
    console.log("A === 0. It's mistake!!!");
    return null;
  }
  const D = discriminant(a, b, c);
  console.log(`discriminant = ${D}`);
  if(D < 0){
    console.log("Корней нет")
    return null;
  }
  if(D === 0){
    const x = -b  / (2 * a);
    return [x, x];
  }
  const x1 = (-b + Math.sqrt(D)) / (2 * a);
  const x2 = (-b - Math.sqrt(D)) / (2 * a);
  return [x1, x2];
}

/**
 * 
 * @param {number} a 
 * @param {number} b 
 * @param {number} c 
 * @returns {number} - return discriminant for quadric equation
 */
function discriminant(a, b, c){
  return b ** 2 - (4 * a * c);
}

/*---------------Tests-------------------------*/
/*Task 1 tests*/
const maxValue1 = prompt("Enter first max value:");
const maxValue2 = prompt("Enter second max value:");
showResult(maxValue1, maxValue2, max);


/*Task 2 tests*/
const minValue1 = prompt("Enter first min value:");
const minValue2 = prompt("Enter second min value:");
showResult(minValue1, minValue2, min);

/*Task 3 tests*/
console.log(isEven(12));
console.log(isEven(17));
console.log(isEven("hello"));
console.log(isEven(""));

/*Task 4 tests*/
const a = +prompt("Enter a");
const b = +prompt("Enter b");
const c = +prompt("Enter c");

console.log(solve(a, b, c));