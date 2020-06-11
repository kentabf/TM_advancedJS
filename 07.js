/*
JavaScript Inheritance and the Prototype Chain
*/

/*
In ES5, can simulate 'inheritence' of Dog from Animal by:
- using the Animal class, its `.call` and passing on `this`
- using `Object.create()` to pass on prototype of Animal
*/

function Dog (name, energy, breed) {
	Animal.call(this, name, energy)
	this.breed = breed
}
Dog.prototype = Object.create(Animal.prototype)
Dog.prototype.bark = function() {
	console.log('woof woof')
	this.energy -= .1
}
Dog.prototype.constructor = Dog

/*
In ES6, much like Java/Scala/Python/etc.:
*/
class Dog extends Animal {
	constructor(name, energy, breed) {
		super(name, energy)
		this.breed = breed
	}
	bark () {
		console.log('woof woof')
		this.energy -= .1
	}
}