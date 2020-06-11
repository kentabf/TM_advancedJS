/*
JavaScript Private and Public Class Fields
*/

/*
ES6 classes with methods are syntatic sugar for using the `prototype`:
*/
class Animal {
	eat() {}
	sleep = () => {}
}
// is sugar of
function Animal() {
	this.sleep = function() {}
}
Animal.prototype.eat = function() {}

/*
in the above example, every instance of Animal will share method `eat`.

however, `sleep` is a class field, a member of every Animal instances.
*/

/*
*/