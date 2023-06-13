#!/usr/bin/node
const argument = Number(process.argv[2]);
if (isNaN(argument)) {
  console.log(1);
} else {
  console.log(factorial(arg));
}

function factorial (num) {
  if (num === 0) {
    return 1;
  }
  return num * factorial(num - 1);
}
