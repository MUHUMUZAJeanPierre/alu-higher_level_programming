#!/usr/bin/node

const args = process.aargv[2];
if (isNaN(args)) {
	console.log('Not a number');
} else {
	console.log('My number: ' +args);
}
