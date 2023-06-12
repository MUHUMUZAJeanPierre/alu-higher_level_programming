#!/usr/bin/node

const argument = Number(process.argv[2]);
if (!argument) {
  console.log('Missing number of occurrences');
}
for (let i = 0; i < argument; i++) {
  console.log('C is fun');
}
