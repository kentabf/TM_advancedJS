/*
The JavaScript Event Loop: A Simple Guide
*/

/*

three components:
- call stack
- task queue
- web APIs (or in Node, C++ APIs)


event loop:
- checks if call stack is empty; if not, continue going through it
- once call stack is empty, it pops the top element of task queue onto call stack

In the example below:
- first `log` executes, then popped off call stack
- `setTimeout` is next up in call stack. inner anonymous function added to Web APIs, then popped off call stack
- third `log` executes then popped off call stack
- after 1000miliseconds, Web APIs pushes the anonymous function to the task queue
- event loop sees call stack is empty, so it checks task queue and pushes the anonymous function onto call stack, and executes third `log`

*/

console.log('First');
setTimeout(function() {
	console.log('Second');
}, 1000);
console.log('Third');

// 'First', 'Third', then 'Second'