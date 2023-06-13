#!/usr/bin/node

const arguments = process.argv.slice(2);
if (arguments.length <= 1) {
  console.log(0);
} else {
  console.log(argunents.sort((a, b) => b - a)[1]);
}
