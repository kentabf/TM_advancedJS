/*
Understanding the this keyword, call, apply, and bind in JavaScript
*/


/*
"implicit binding"
- `this` will be the object left of the dot at call time
*/

var Person = function(name, age) {
	return {
		name: name,
		age: age,
		sayName: function() {
			console.log(this.name);
		},
		mother: {
			name: 'Stacey',
			sayName: function() {
				console.log(this.name);
			}
		}
	};
};
var jim = Person('Jim', 42)
jim.sayName(); // 'Jim'
jim.mother.sayName(); // 'Stacey'


/*
"explicit binding":
- `this` is the argument passed to `.call`, `.apply` (array based parameters), or `.bind` (binds argument to function, and returns new reference to function)
*/

/*
"new binding"
- when function is invoked with `new`, `this` refers to the object being constructed
*/
var Animal = function(color, name, type) {
	this.color = color;
	this.name = name;
	this.type = type;
};
var zebra = new Animal('black and white', 'zorro', 'zebra');

/*
"window binding":
- when it can't find reference to `this`, looks to window object
- can use `'use strict';` which will prevent this
*/