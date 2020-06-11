/*
Creating your own JavaScript Array
*/

/*
simulate array like this:
*/

function array () {
	let arr = Object.create(array.prototype)
	Object.defineProperty(arr, 'length', {
    value: 0,
    enumerable: false,
    writable: true,
  })
	for (key in arguments) {
		arr[key] = arguments[key]
		arr.length += 1
	}
	return arr
}
array.prototype.push = function (elem) {
  this[this.length] = elem
  this.length += 1
  return this.length
}
array.prototype.pop = function () {
  this.length -= 1
  const elemToDelete = this[this.length]
  delete this[this.length]
  return elemToDelete
}
array.prototype.filter = function (func) {
  newArr = array()
  for (let key in this) {
    if (this.hasOwnProperty(key)) {
      if (func(this[key])) {
        newArr.push(this[key])
      }
    }
  }
  return newArr
}

let x = array('aa', 'b', 'cc', 'd')
x.push('ee')
let y = x.filter(s => s.length > 1)
y.pop()
console.log(x)
console.log(y)