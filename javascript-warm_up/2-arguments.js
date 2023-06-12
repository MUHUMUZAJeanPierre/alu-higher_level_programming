#!/usr/bin/node
const msg = process.msg.slice(2);
if (msg.length === 0){
	console.log('No argument');
} if (msg.length === 1) {
	console.log('Argumet found');
} else {
	console.log('Argument found');
}
