#!/usr/bin/node

const argument = Number(process.argv[2]);
if (isNaN(arg)) {
  console.log('Missing size');
}
for (let i = 0; i < argument; i++) {
  console.log('X'.repeat(argument));
}
