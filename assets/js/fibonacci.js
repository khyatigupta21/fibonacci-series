/**
 * Print fibonacci series until input number
 */

const getFibonacci = (num) => {
  if (num === null) return false;
  else {
    let temp;
    let num1 = 0;
    let num2 = 1;
    for (let i = 0; i < num; i++) {
      console.log(num1);
      temp = num1 + num2;
      num1 = num2;
      num2 = temp;
    }
  }
};

console.log(getFibonacci(30));
