const add = function(a,b) {
	return a+b;
};

const subtract = function(a,b) {
	if (a > b) { 
    return a - b;
  } else {
    let temp = a;
    a = b;
    b = temp;
    return a - b
  }
};

const sum = function(arr) {
  let count = 0;
  for (let i=0; i < arr.length; i++) {
    count += arr[i];
  }
  return count;
  
};

const multiply = function(arr) {
  let count = 1;
  for (let i=0; i < arr.length; i++) {
    count *= arr[i];
  }
  return count;
};

const power = function(a,b) {
	return a ** b;
};

const factorial = function(a) {
	if (a == 0) {
    return 1
  } 
  let product = 1;
  for (let i=a; i>0;i--){
    product *= i;
  
}
return product;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
