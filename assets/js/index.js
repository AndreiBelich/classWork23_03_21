const foo = function(){
  console.log(1);
}

const sum = function(val1, val2){
  const result = Number(val1) + Number(val2);
  return result ? result : null;
}

console.log(sum(5,10));
console.log(sum(1));
console.log(sum('test', 5));
console.log(sum("test", "test"));
console.log(sum(5, "25"));