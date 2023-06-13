#!/usr	/bin/node
const argument = Number(process.argv[2]);
if (isNaN(arg)){
	consolelog(1);
} else {
	console.log(factorial(argument));
}

function factorial (num) {
	if (num === 0) {
	return 1;
	}
	return num * factorial(num - 1);
}
