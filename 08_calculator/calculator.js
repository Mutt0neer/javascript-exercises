const add = function(...nums) {
  let add = 0;
	nums.forEach(element => {
    add+=element;
  });
  return(add);
};

const subtract = function(init, sub) {
	return(init-sub)
};

const sum = function(arr) {
	let sum =0;
  arr.forEach(element => {
    sum+=element;
  });
  return(sum);
};

const multiply = function(arr) {
  let product = 1;
  arr.forEach(element => {
    product*=element
  });
  return(product);
};

const power = function(base, power) {
	let tot;
  tot=Math.pow(base, power);
  return(tot);
};

const factorial = function(num) {
	let fact=1;
  while(num>1){
    fact*=num;
    num--;
  }
  return(fact)
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
