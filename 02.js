/* 
The Ultimate Guide to Execution Contexts, Hoisting, Scopes, and Closures in JavaScript 
*/


/*

"global execution context":
- the main initial execution context, at the base of execution stack
- always have the `window` and `this` properties:
	- `window` is the global object
	- `this` is the window object

JS is single-threaded, and has two stages: "creation phase" and "execution phase"
- "creation phase": variable declarations are assigned value of undefined ("hoisting"), and function declaration are placed in memory
- "execution phase": value assignments to variables

function call:
- in the execution phase, a function call will create a new execution context for that function, within parent context
- it in turn goes through a cration phase and execution phase
- upon end of function call, context popped from execution stack

scoping:
- scoping goes from inside, to outside (parents and descendents) of execution contexts
- if it doesn't exist in current or any descendent contexts, `UncaughtReferenceError`

"closure scope":
- an outer function can return an inner function, which is stored outside of context of outer function
- then, when the inner function is called (outside), even though the context of the outer function is no longer in the stack, the inner function still has access to the outer function's context

*/

// example of closure:
var count = 0;
function makeAdder(x) {
	return function inner(y) {
		return x + y
	};
}
var add5 = makeAdder(5);
count += add5(2); // count = 7