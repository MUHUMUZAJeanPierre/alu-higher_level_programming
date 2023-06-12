#!/usr/bin/node

const msg = process.argv.slice(2);

if (msg.length === 0) {
  console.log('No argument');
} else if (msg.length === 1) {
  console.log('Argument found');
} else {
  console.log('Arguments found');
}
