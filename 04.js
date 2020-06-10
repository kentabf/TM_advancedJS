/*
The Evolution of Async JavaScript: From Callbacks, to Promises, to Async/Await
*/

/*
callbacks:
- name for parameter of type function in higher order function
- in jQuery; delay execution of function until particular time/event
*/

/*
promises, three stages:
- pending; default, the initial state
- fulfilled: when it's ready (as was exepcted at some point)
- rejected: something goes wrong
- promise constructor takes in a callback function
- `.then` and `.catch` for fulfilled and rejected
- `.then` and `.catch` additionally wrap result into a promise itself, which allows chaining
*/
function getPromise () {
	return new Promise((resolve) => {
		setTimeout(resolve, 2000)
	});
}
function logA () {
	console.log('A');
}
function logB () {
	console.log('B');
}
function logCAndThrow () {
	console.log('C');
	throw new Error();
}
function catchError () {
	console.log('Error!');
}
getPromise()
.then(logA) // A
.then(logB) // B
.then(logCAndThrow) // C
.catch(catchError) // Error!

/*
async + await...
*/

