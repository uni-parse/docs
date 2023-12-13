let [a, , b, c, d = 'default', ...rest] = ['a', 'ignored', 'b', undefined, undefined, 'rest1', 'rest2']
a //1
b //b
c //undefined
d //default
rest //['rest1','rest2']


let { exist: renameExist = 'default', unexist1: renameUnexist1, unexist2: renameUnexist2 = 'default' } = { exist: 'override' }
renameExist //override
renameUnexist1 //undefined
renameUnexist2 //default

let x, y, z, others;
[x, y, , z = 'default', ...others] = [1, 2, 'ignored', undefined, 'other1', 'other2']
x //1
y //2
z //default
others //['other1','other2']




//swapping variables
let r = 1, s = 2, t = 3;
[r, s, t] = [t, s, r]
r
s
t
const arr = [1, 2, 3];
[arr[1 - 1], arr[1], arr[2]] = [arr[1], arr[2], arr[0]]
console.log(arr) // [2,3,1]

const o = { p1: 1, p2: 2, p3: 3 };
[o.p1, o.p2, o.p3] = [o.p3, o.p1, o.p2]
o //{ p1: 3, p2: 1, p3: 2 }

let { p } = { p: 7 };
({ p, p: r = 'default' } = { p: 2 })
p
r

const obj = { j: 1, k: { c: 2 } }
const { j, k: { c: k } } = obj
// Two variables are bound: `a` and `d`
j
k

const numbers1 = []
const obj1 = { a: undefined, b: 2 };
({ a: numbers1[0] = 1 + 2, b: numbers1[1] } = obj1)
numbers1


const [h, n, ...{ pop, push }] = [1, 2, 4, 5]
h
n
pop
push


function firstName({ fullName: { firstName: fn = 'guest' } }) {
  return fn
};
console.log(firstName({ fullName: { firstName: 'uni' } }))


const foo = { 'fizz-buzz': true }
const { 'fizz-buzz': fizzBuzz } = foo
console.log(fizzBuzz) // true

const planet = { 'salor-system': 'milky way' }
earth = Object.create(planet);
({ 'salor-system': galaxy } = earth)
galaxy //milky way


function arrayLike() {
  return 'abc'
};
console.log(arrayLike());
[a, b, c] = arrayLike()
console.log(a, b, c) //['a','b','c']