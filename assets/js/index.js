
function isNumber(value){
  return Number(value) ? Number(value) : null;
}

/* Task 1 function max*/
function max(num1, num2){
  if(isNumber(num1) && isNumber(num2)){
    console.log("Сравнение чисел function max");
    const tempNum1 = Number(num1);
    const tempNum2 = Number(num2);
    return tempNum1 > tempNum2 ? tempNum1 : tempNum2;
  }
  console.log("Сравнение разных величин function max:");
  return num1 > num2 ? num1 : num2;
}

/* task 2 function min */
function min(num1, num2){
  if(isNumber(num1) && isNumber(num2)){
    console.log("Сравнение чисел function min");
    const tempNum1 = Number(num1);
    const tempNum2 = Number(num2);
    return tempNum1 < tempNum2 ? tempNum1 : tempNum2;
  }
  console.log("Сравнение разных величин function min:");
  return num1 < num2 ? num1 : num2;
}

/* Task 3 */
function isEven(value){
  if(!isNumber(value)){
    console.log("it's not number");
    return null;
  }
  return value % 2 === 0 ? true : false;
}

/* Task 4 */
function solve(a, b, c){
  if(!isNumber(a) || !isNumber(b) || !isNumber(c)){
    console.log("Wrong input");
    return false;
  }
  if(a === 0){
    console.log("A === 0. It's mistake!!!");
    return false;
  }
  const D = discriminant(a, b, c);
  console.log(`discriminant = ${D}`);
  let result = 0;
  if(D < 0){
    result = "Корней нет";
  }
  else if(D === 0){
    result = (-b + Math.sqrt(D)) / (2 * a);
  }
  else{
    const x1 = (-b + Math.sqrt(D)) / (2 * a);
    const x2 = (-b - Math.sqrt(D)) / (2 * a);
    result = [x1, x2];
  }
  return result;
}

function discriminant(a, b, c){
  return b ** 2 - (4 * a * c);
}

/*---------------Tests-------------------------*/
/*Task 1 tests*/
const maxValue1 = prompt("Enter first max value:");
const maxValue2 = prompt("Enter second max value:");

console.log(max(maxValue1, maxValue2));

/*Task 2 tests*/
const minValue1 = prompt("Enter first min value:");
const minValue2 = prompt("Enter second min value:");
console.log(min(minValue1, minValue2));

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