
//destructuring opirator
(() => {
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
})();

//assignment operators
(() => {
  //assignment chaining
  let a = 1, b = 2, c = 3, d = 4
  a = b = c = 4
  console.log(a, b, c, d);//4 4 4 4

  a = 1; b = 2; c = 3; d = 4
  a += b *= c += d = 5
  console.log(a, b, c, d);

  a = 1; b = 2; c = 3; d = 4
  let bool = true
  console.log(-Infinity);

  a = 2, b = 1, c = 4, d = 5
  console.log(a % b % c % d)
  console.log(a % (true % (c % d)))
  console.log(((a % b) % c) % d)

  console.log(-2 % Infinity)
  console.log('false' == true)
})();


//comparison operators
(() => {
  const bool = new Boolean(false)
  const obj = { p: 1 }

  console.log([1, 2, 3] == true);
  console.log([1, 2, 3].toString() == true);


  console.log(Boolean([2].toString()))
  console.log(Boolean([true] == true))
  console.log(Boolean(Boolean()));
  console.log(Boolean(new Boolean(false)));
  console.log(Boolean(true && !false && [] && {} && new Boolean(false) && 'false' && new Boolean(false) == false && [1] == true));
  console.log(Boolean(false || !true || '' || undefined || null || NaN || [] == true || {} == true));
  console.log(Boolean(2), !!2, (new Boolean(2)).valueOf());

})();

const glob = undefined;
(() => {
  let num = 1
  num = null
  console.log(Number.isNaN(num))
  console.log(typeof num);
  console.log(globalThis.undefined);
  console.log(num in global);

  console.log(NaN == NaN);
  console.log(typeof NaN);
  console.log(typeof 2n)

  function func() {
    const v = 1
    // console.log(v in this);
  }
  func()
  const o = {
    p: 1
  }
})();

//number object
(() => {
  "use strict";
  console.log(Number('44'))
  const null_obj = Object.create(null)
  console.log(null_obj.__proto__);
  const o = Object.create(Object);
  console.log(o.__proto__.__proto__)
  const obj = {}
  console.log(obj.__proto__.__proto__)
  const object = new Object()
  console.log(object.__proto__.__proto__)
  console.log(typeof (1 + ''));
  console.log(9007199254740991)
  console.log(-1.7 * 10 ** 308)
  console.log(-1.8 * 10 ** 308)
  console.log(-1234567890123456789012345678901234567891n);
  console.log(1.7e308);
  console.log(1.8e308);
  console.log('   -9   ' + 5)
  console.log(' -9 ' + 5)
  console.log('   9   ' + 5)
  console.log('     -9  ' - 5)
  console.log('' * 1)
  console.log(+undefined)
  console


    .

    log(2.)
  const one = { 1: 1 }
  console.log(one[1])

  let v = 1
  console.log(v);
  console.log(v++);
  console.log(++v)

  let x = 0
  x = (x++, console.log(x), x) //1
  x

  for (let i = 0, j = 5; i <= 5; i++, j--) {
    console.log(`i=${i}, j=${j}`);
  }
  console.log(' 3' > '1')


  function a(){return `1`}
  console.log(a() == 1)
  console.log(a() === 1)

  console.log(undefined == null)
  //uniparse1 = 1
  //uniparse1


})()







