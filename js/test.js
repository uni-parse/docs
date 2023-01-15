"use strict";

/*
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
  let num = 18
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


  function a() { return `1` }
  console.log(a() == 1)
  console.log(a() === 1)

  console.log(undefined == null)
  //uniparse1 = 1
  //uniparse1


})();

(() => {
  let a = null, b, c = 3;
  console.log(c ?? 'fallback');
  let i = 0
  //while (++i < 5) alert(i);
  //1 1
  //2 2
  //3 3
  //4 4
  //4 stop
  //while (i++ < 5) alert(i);
  //0 1
  //1 2
  //2 3
  //3 4
  //4 5
  //5 stop
  for (let i = 2; i < 10; i++) {
    //if (i % 2 == 0) alert(i); //evens
  }
  i = 0
  //while (i < 3) alert(i++)
})();

(() => {
  function a(parameter = 'defualt value') {
    return parameter
  }
  console.log(a(undefined))


  function min(a, b) {
    return a > b ? b : a
  }
  console.log(min(4, 9))


  function pow(x, n) {
    return x ** n
  }
  console.log(pow(3, 3))

  let powRename = pow
  console.log(powRename(3, 3))
})();

(() => {
  const arr1 = ['one', 'two'], arr2 = arr1;
  arr1[0] = 1;
  arr2; //[1,'two']


  let user = {
    name: "John",
    go: function () {
      console.log(this.name)
      return this.name
    }
  };
  console.log((user.go)())


  function f() {
    console.log(this)
  }
  f()





  let calc = {
    assign(o1, o2) {
      this.operend1 = o1
      this.operend2 = o2
    },
    read() { //required browser
      this.operend1 = +prompt('operend1')
      this.operend2 = +prompt('operend2')
    },
    sum() { return this.operend1 + this.operend2 },
    mul() { return this.operend1 * this.operend2 }
  }

  calc.assign(2, 3)
  console.log(calc.sum())
  console.log(calc.mul())




  let ladder = {
    step: 0,
    up() { this.step++; return this },
    down() { this.step--; return this },
    show() { console.log(this.step); return this }
  };
  //ladder.up()
  // ladder.up()
  // ladder.down()
  // ladder.show()
  ladder.up().up().down().show()


  let a = (() => 5)();
  console.log(typeof a, a)
  console.log(+'a')

})();


(() => {
  function UserConstructor(name, admin) {
    this.name = name
    this.admin = !!admin
  }

  const reader = new UserConstructor('uniparse', 1)
  console.log(reader.name, '; admin: ' + reader.admin)


})();

//obj conversion
(() => {
  let user = {
    name: "John",
    money: 1000,

    [Symbol.toPrimitive](hint) {
      console.log(`hint: ${hint}`);
      return hint == "string" ? this.name : this.money;
    }
  };


  const anotherObj = {}
  anotherObj.John = 'my name are Jhon'
  // conversions demo:
  console.log(anotherObj[user]); // hint: string -> 'my name are Jhon'
  console.log(+user); // hint: number -> 1000
  console.log(user + 500); // hint: default -> 1500
})();

(() => { //array
  const arr = ['a', 2]
  console.log(arr.push('three', 'four'), arr)
  console.log(arr.pop(), arr)
  console.log(arr.at(0))
  console.log(arr.shift(), arr)
  console.log(arr.unshift(0, 1), arr)

  const styles = ['Jazz', 'Blues']
  styles.push('Rock-n-Roll')
  styles[Math.floor(styles.length / 2)] = 'Classics'
  console.log(styles.shift())
  styles.unshift('Rap', 'Reggae')



  console.log(sumInput(1, 2))


  function sumInput() {
    const arr = []

    while (true) {
      let item = prompt("A number please?", 0)
      if (item === "" || item === null || !isFinite(item)) break
      arr.push(+item)
    }

    let sum = 0
    arr.forEach(item => sum += item)

    return sum
  }

  function prompt() {
  }

})();

(() => { //array.methods tasks
  //task 1 transform property name from css to javascript
  function camelize(str) {
    const rawWords = str.split('-'),

      capitalWords = rawWords.map((word, i) => !i ? word : word[0].toUpperCase() + word.slice(1)),

      newStr = capitalWords.join('')
    return newStr
  }
  console.log(camelize('-webkit-backgrund-clip'));

  //task 2 filter range
  function filterRange(arr, min, max) {
    return arr.filter(item => item <= max && item >= min)
  }
  console.log(filterRange([1, -3, 101, 99, 40], 0, 100))

  //task 2.5 filter range "in place" (without return)
  function filterRangeInPlace(arr, min, max) {
    arr.forEach((item, index) => {
      if (item > max || item < min) arr.splice(index, 1)
    })
  }
  const task2Arr = [1, 101, 99]
  filterRangeInPlace(task2Arr, 0, 100)
  console.log(task2Arr)


  //task 3 sort in decreasing order
  const arr = [5, 2, 1, -10, 8]
  arr.sort((a, b) => b - a)
  console.log(arr)

  //task 4 copy and sort array
  function copySorted(arr) {
    return arr.slice().sort() //slice() return copy
  }
  const orgArr = ['HTML', 'JavaScript', 'CSS']
  console.log(copySorted(orgArr));
  console.log(orgArr)

  //task 5 create an extendable calculator
  function Calculator1() {
    this.calculate = str => {
      const arr = str.split(' '),
        num1 = +arr[0],
        operator = arr[1],
        num2 = +arr[2]
      switch (operator) {
        case '+': return num1 + num2; break
        case '-': return num1 - num2; break
        default: return `unrecognized operator (${operator})`
      }
    }
  }

  const calc1 = new Calculator1()
  console.log(calc1.calculate('3 - 7'))
  console.log(calc1.calculate('3 + 7'))
  console.log(calc1.calculate('3 * 7'))


  function Calculator2() {
    this.methods = {
      '+': (a, b) => a + b,
      '-': (a, b) => a - b
    }
    this.addMethod = (name, func) => this.methods[name] = func
    this.calculate = str => {
      const arr = str.split(' '),
        num1 = +arr[0],
        operator = arr[1],
        num2 = +arr[2]

      if (operator in this.methods)
        return this.methods[operator](num1, num2)
      else return `unrecognized operator (${operator})`
    }
  }

  const calc2 = new Calculator2()
  calc2.addMethod('*', (a, b) => a * b)
  console.log(calc2.calculate('3 + 7'))
  console.log(calc2.calculate('3 - 7'))
  console.log(calc2.calculate('3 * 7'))
  console.log(calc2.calculate('3 / 7'))

  //task 6 map to names
  const john = { name: "John", age: 25 },
    pete = { name: "Pete", age: 30 },
    mary = { name: "Mary", age: 28 },
    users = [john, pete, mary],
    names = users.map(user => user.name)
  console.log(names);

  //task 7 map to objects
  const john1 = { name: "John", surname: "Smith", id: 1 },
    pete1 = { name: "Pete", surname: "Hunt", id: 2 },
    mary1 = { name: "Mary", surname: "Key", id: 3 },
    users1 = [john1, pete1, mary1],
    usersMapped = users1.map(user => ({
      fullName: `${user.name} ${user.surname}`,
      id: user.id
    }))
  console.log(usersMapped[0].id)
  console.log(usersMapped[0].fullName)

  //task 8 sort users by age
  function sortByAge(users) {
    users.sort((a, b) => a.age - b.age)
  }
  const john2 = { name: "John", age: 25 },
    pete2 = { name: "Pete", age: 30 },
    mary2 = { name: "Mary", age: 28 },
    users2 = [john2, pete2, mary2]
  sortByAge(users2)
  console.log(users2.map(u => u.age))

  //task 9 shuffle an array (sort with evenly random order)
  function shuffle_bad(arr) { //less critical & overheat cpu
    arr.sort(() => Math.random() - .5)
  }
  const arr1 = [1, 2, 3]
  shuffle_bad(arr1)
  console.log(arr1)
  shuffle_bad(arr1)
  console.log(arr1)
  shuffle_bad(arr1)
  console.log(arr1)

  //the func name: Fisher-Yates shuffle
  function shuffle_good(arr) { //critical & no overheat cpu
    for (let i = arr.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1))
      [arr[i], arr[j]] = [arr[j], arr[i]]
    }
  }
  const arr2 = [1, 2, 3]
  shuffle_bad(arr2)
  console.log(arr2)
  shuffle_bad(arr2)
  console.log(arr2)
  shuffle_bad(arr2)
  console.log(arr2)

  //task 10 get average age
  function getAverageAge(users) {
    return users.reduce((prevSum, user) => prevSum + user.age, 0) / users.length
  }

  const john3 = { name: "John", age: 25 },
    pete3 = { name: "Pete", age: 30 },
    mary3 = { name: "Mary", age: 29 },
    users3 = [john3, pete3, mary3]
  console.log(getAverageAge(users3))

  //task 11 filter unique array members
  function unique(arr) {
    return arr.filter((el, i) => arr.indexOf(el) === i)
  }// compare first index arr.indexOf(el), with currend index

  const arr11 = [1, 2, 2, 'a', 'b', 'b']
  console.log(unique(arr11))

  function oldUnique(arr) {
    const uniqueArr = []
    arr.forEach(item => {
      if (!uniqueArr.includes(item)) uniqueArr.push(item)
    })
    return uniqueArr
  }

  //task 12 create keyed object from array
  function groupById(arr) {
    return arr.reduce((sum, obj) => (sum[obj.id] = obj, sum), {})
  }

  const users12 = [
    { id: 'john', name: "John Smith", age: 20 },
    { id: 'ann', name: "Ann Smith", age: 24 },
    { id: 'pete', name: "Pete Peterson", age: 31 },
  ], usersById = groupById(users12)
  console.log(usersById)

  function oldGroupbyId(arr) {
    const groupByIdObj = {}
    arr.forEach(obj => groupByIdObj[obj.id] = obj)
    return groupByIdObj
  }

  //task 13


})();
(() => { //map & set
  //task 1 filter unique array members
  function unique(arr) {
    return Array.from(new Set(arr))
  }
  const doublications = [1, 1, 2, 2, 'a', 'a', 'b']
  console.log(unique(doublications))

  //task 2 filter anagrams
  function aclean(arr) {
    const
      entries = arr.map(word => [word.toLowerCase().split('').sort().join(''), word]),
      map = new Map(entries)//keys are unique, override value
    return Array.from(map.values())
  }
  const anagrams = ['pan', 'NAP', 'cheaters', 'teachers']
  console.log(aclean(anagrams))

  //task 3 iterable keys
  const map3 = new Map()
  map3.set('name', 'John')
  const keys3 = map3.keys(),
    keysArr3 = Array.from(keys3)
  keysArr3.push('more')
  console.log(keysArr3)




})();
(() => { //weakmap & weakset tasks
  const messages = [
    { text: "Hello", from: "John" },
    { text: "How goes?", from: "John" },
    { text: "See you soon", from: "Alice" }
  ]

  //task 1 store 'unread' flags
  const hasBeenRead = new WeakSet()
  hasBeenRead.add(messages[0])
  hasBeenRead.add(messages[1])
  hasBeenRead.add(messages[1])//readed one more time

  //task 2 store read dates
  const lastReadingDate = new WeakMap()
  lastReadingDate.set(messages[0], new Date(2022, 12, 8))
  lastReadingDate.set(messages[1], new Date(2022, 12, 9))
  lastReadingDate.set(messages[1], new Date(2022, 12, 12))
})();
(() => { //object tasks
  //task 1 sum the properties
  function sumSalaries(salaries) {
    return Object.values(salaries).reduce((sum, current) => sum += current || 0, 0)
  }

  const salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
  }
  console.log(sumSalaries(salaries))

  //task 2 count properties
  function count(obj) {
    return Object.keys(obj).length
  }
  console.log(count(salaries));

})();
(() => { //destructuring assignment tasks
  //task 1 dustructuring assignment
  const user = {
    name: 'John',
    years: 30
  }
  const { name, years: age, isAdmin = false } = user
  console.log(name, age, isAdmin)

  //task 2 the maximal salary
  function topSalary(salaries = {}) {
    let [topName, topSalary] = [null, 0]
    for (const [name, salary] of Object.entries(salaries)) {
      if (topSalary < salary) [topName, topSalary] = [name, salary]
    }
    return topName

    //or optimized & readable
    return Array.from(Object.entries(salaries))
      .reduce(([topName, topSalary], [name, salary]) =>
        salary > topSalary ? [name, salary] : [topName, topSalary], [null, 0])[0]

    //or best optimization
    return Array.from(Object.entries(salaries))
      .reduce((topEntry, CurrentEntry) =>
        CurrentEntry[1] > topEntry[1] ? CurrentEntry : topEntry, [null, 0])[0]
  }

  const salaries = {
    'John': 100,
    'Pete': 300,
    'Mary': 250
  }
  console.log(topSalary())
  console.log(topSalary(salaries))
})();
(() => { //Date and time tasks
  const now = new Date(),
    nowTimeStamp = now.getTime(),
    Jan01_1970 = new Date(0),
    Jan31_1969 = new Date(-24 * 3600 * 1000)
  console.log(now, nowTimeStamp, Jan01_1970, Jan31_1969)

  console.log(nowTimeStamp == new Date(nowTimeStamp).getTime())
  console.log(new Date(0).getTime())

  console.log(now)
  console.log(new Date(nowTimeStamp))



})();
(() => { //function recursion tasks
  //task 1 sum all numbers till the given one
  //return 1+2+3+...+n
  function sumTo(n) {
    return [0, 1].includes(n) ? n : n + sumTo(n - 1)
  };
  console.log(
    sumTo(0),
    sumTo(1),
    sumTo(2)
  )

  function sumToWithForLoop(n) {
    if ([0, 1].includes(n)) return n

    let sum = 0
    for (let i = 1; i <= n; i++) sum += i
    return sum
  }
  console.log(
    sumToWithForLoop(0),
    sumToWithForLoop(1),
    sumToWithForLoop(2),
    sumToWithForLoop(100)
  )

  //task 2 calculate factorial
  //n! = n * n-1 * n-2 * ... * 1
  function factorial(n) {
    return [0, 1].includes(n) ? n : n * factorial(n - 1)
  }
  console.log(factorial(5))

  //task 3 fibonacci numbers (fibona_Tshi)
  //F(n) = F(n-1) + F(n-2)
  function fib(n) {
    return [0, 1].includes(n) ? n
      : fib(n - 1) + fib(n - 2)
  }
  console.log(
    //fib(0),
    //fib(1),
    //fib(2),
    //fib(3),
    //fib(7),
    //fib(77) //take hours 5527939700884757
  )

  function fib2(n) {
    let a = 1,
      b = 1
    for (let i = 3; i <= n; i++) {
      let c = a + b;
      a = b;
      b = c;
    }
    return b;
  }
  console.log(
    fib2(0),
    fib2(1),
    fib2(2),
    fib2(3),
    fib2(7),
    fib2(77) // fast
  )

  //task 3 output at single-linked list


})();
(() => { //function rest parameters and spread syntax
  function func() {
    console.log(
      "length: " + arguments.length + ",",
      arguments[0],
      arguments[1],
      Array.isArray(arguments),//false, is just iterater
      Array.from(arguments).reduce((sum, arg) => sum + arg, 0)
    )
  }
  func(2, 3)
})();
*/
/*
(() => { //functino closure tasks
  //task 6 sum with closures
  function sum(a) { return b => a + b }
  console.log(sum(5)(-1))

  //task 8 filter through function
  function isBetween(min, max) {
    return item => item <= max && item >= min
  }
  function inArray(arr) {
    return item => arr.includes(item)
  }
  const arr = [1, 10, 11, 33, 50, 100]
  console.log(
    arr.filter(isBetween(20, 70)),
    arr.filter(inArray([11, 22, 33, 44]))
  )

  //task 9 sort by field
  function byField(property) {
    return (a, b) => a[property] > b[property] ? 1 : -1
  }
  let users = [
    { name: "John", age: 20, surname: "Johnson" },
    { name: "Pete", age: 18, surname: "Peterson" },
    { name: "Ann", age: 19, surname: "Hathaway" }
  ];

  console.log(
    users.sort(byField('age')).map(el => el.age),
    users.sort(byField('name')).map(el => el.name),
    users.sort(byField('surname')).map(el => el.surname)
  )

  //task 10 army of functions

})();


(() => {
  function func(a, b, ...rest) {
    console.log(func.length)
  }
  func()

  let val = []
  function multi(...handlers) {
    handlers.forEach(h => h.length ? h(val) : h())
  }
  multi(
    () => val.push("no param"),
    arr => arr.push("param"),
    (...a) => val.push("rest = no param")
  )
  console.log(val)

  //task 2 sum wth an arbtrary amount of brackets
  function sum(a) {
    let currentSum = a
    function f(b) {
      currentSum += b
      return f
    }
    f.toString = () => currentSum
    return f
  }
  console.log(+sum(1), +sum(3)(-1), +sum(1))
})();
*/
/*
(() => { //scheduling setTimeout && setInterval
  const delay = 2000 //ms
  function sayHi(who) { console.log(`hi ${who}`) }

  //setTimeout(sayHi, delay, 'UniParse1')
  //setInterval(sayHi, delay, 'UniParse1')

  //better alternative to setInterval by EFN && recursion
  let timerId = setTimeout(function greeting() {
    //console.log(`hi, after ${delay}`)
    timerId = setTimeout(greeting, delay)
  }, delay);

  setTimeout(() => clearTimeout(timerId), delay * 2.1)

  setTimeout(() => console.log('hello'))
  console.log('1')
  console.log('2')

  //task 1 output every second
  function pringNumbers1(from, to) {
    const timerId = setInterval(() => {
      console.log(from++)
      if (from > to) clearInterval(timerId)
    }, 1000)
  }
  function pringNumbers2(from, to) {
    setTimeout(function run() {
      console.log(from++)
      if (from <= to) setTimeout(run, 1000)
    }, 1000)
  }
  //pringNumbers1(10, 13)
  //pringNumbers2(10, 13)

  //task 2 what will setTimeout show?
  //any setTimeout will run only after current script finished
  let i = 0;
  setTimeout(() => console.log(i), 1); // 100000000
  const start = Date.now()
  //for (let j = 0; j < 100000000; j++) i++
  console.log(Date.now() - start + ' ms')//3000ms+


})();

(() => { //date tasks

  //task 1 create a date
  let date1 = new Date('2012-02-19T03:12'),
    date2 = new Date(2012, 1, 19, 3, 12)

  console.log(+date1 == +date2)

  //task 2 show a weekday
  function getWeekDay(date) {
    const days = ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA']
    return days[date.getDay()]
  }
  console.log(getWeekDay(date1))

  //task 3 European weekday
  //  days     .getDay()   goal      change
  // .......................................
  // sunday        0        7        change 
  // monday        1        1         same 
  // tuesday       2        2         same 
  // wednessday    3        3         same 
  // thirsday      4        4         same 
  // friday        5        5         same 
  // saturday      6        6         same
  function getLocalDay(date) { return date.getDay() || 7 }
  console.log(getLocalDay(date1))

  //task 4 which day of month was many days ago?
  function getDateAge(date, days) {
    const localDate = new Date(date.getTime())
    localDate.setDate(date.getDate() - days)
    return localDate.getDate()
  }
  console.log(getDateAge(date1, 365));

  //task 5 last day of month?
  function getLastDayOfMonth(year, month) {
    return new Date(year, month + 1, 0).getDate()
  }
  console.log(
    getLastDayOfMonth(2000, 1),
    getLastDayOfMonth(2001, 1),
    getLastDayOfMonth(2002, 1),
    getLastDayOfMonth(2003, 1),
    getLastDayOfMonth(2004, 1),
    getLastDayOfMonth(2005, 1),
    getLastDayOfMonth(2006, 1),
    getLastDayOfMonth(2007, 1),
    getLastDayOfMonth(2008, 1),
    getLastDayOfMonth(2009, 1),
    getLastDayOfMonth(2010, 1),
    getLastDayOfMonth(2011, 1),
    getLastDayOfMonth(2012, 1),
    getLastDayOfMonth(2013, 1),
    getLastDayOfMonth(2014, 1),
    getLastDayOfMonth(2015, 1),
    getLastDayOfMonth(2016, 1),
    getLastDayOfMonth(2017, 1),
    getLastDayOfMonth(2018, 1),
    getLastDayOfMonth(2019, 1),
    getLastDayOfMonth(2020, 1),
    getLastDayOfMonth(2021, 1),
    getLastDayOfMonth(2022, 1),
    getLastDayOfMonth(2023, 1),
    getLastDayOfMonth(2024, 1),
    getLastDayOfMonth(2026, 1)
  )

  //task 6 how many seconds have passed today?
  function getSecondsToday() {
    const dayStart = new Date()
    dayStart.setHours(0, 0, 0, 0)
    return Math.floor((Date.now() - dayStart) / 1000)
  }
  function getSecondsToday2() {
    const d = new Date()
    return d.getHours() * 3600
      + d.getMinutes() * 60
      + d.getSeconds()
  }
  console.log(
    getSecondsToday(),
    getSecondsToday2()
  )

  //task 7 how many seconds till tomorrow
  function getsecondsToTomorrow() {
    const now = new Date()
    return 24 * 3600
      - now.getHours() * 3600
      - now.getMinutes() * 60
      - now.getSeconds()
      - 1
  }
  //many contries have dst(dayLight saving Time) 23h 25h
  function getsecondsToTomorrow2() {
    const now = new Date(),
      tomorrow = new Date(
        now.getFullYear(),
        now.getMonth(),
        now.getDate() + 1
      )
    return Math.floor((tomorrow - now) / 1000)
  }
  console.log(
    getsecondsToTomorrow(),
    getsecondsToTomorrow2()
  )

  //task 8 format the relative date
  function formatDate(d) {
    const now = new Date()
    if (now.getFullYear() > d.getFullYear()
      || now.getMonth() > d.getMonth()
      || now.getDate() > d.getDate()
      || now.getHours() > d.getHours()
    ) return toTwoDigits(d.getDate()) + '.'
      + toTwoDigits((d.getMonth() + 1)) + '.'
      + toTwoDigits((d.getFullYear() - 2000)) + ' '
      + toTwoDigits(d.getHours()) + ':'
      + toTwoDigits(d.getMinutes())
    else if (now.getMinutes() > d.getMinutes())
      return (now.getMinutes() - d.getMinutes()) + ' min. ago'
    else if (now.getSeconds() > d.getSeconds())
      return (now.getSeconds() - d.getSeconds()) + ' sec. ago'
    else return 'right now'
    function toTwoDigits(t) { return t >= 10 ? t : `0${t}` }
  }
  console.log(formatDate(new Date(new Date - 1)))
  console.log(formatDate(new Date(new Date - 30 * 1000)))
  console.log(formatDate(new Date(new Date - 5 * 60 * 1000)))
  console.log(formatDate(new Date(new Date - 86400 * 1000)))
})();
(() => { //json tasks
  const obj1 = { p1: 'v1' }
  console.log(JSON.stringify(obj1))
  obj1.method = () => { } //ignored
  obj1.p0 = undefined //ignored
  obj1[Symbol('ignored')] = 'val' //ignored
  console.log(JSON.stringify(obj1))

  const obj2 = { p2: 'v2' }
  obj1.ref1 = obj2
  console.log(JSON.stringify(obj1))
  obj2.ref2 = obj2
  //console.log(JSON.stringify(obj1))//error circular referance
  console.log(JSON.stringify(
    obj1,
    ['p1', 'ref1', obj.p2]//exlude ref2
  ))
  console.log(JSON.stringify(
    obj1,
    (k, v) => k == 'ref2' ? undefined : v //exlude ref2
  ))

  //task 1 turn the object into JSON and back

  const fromServer = {
    name: 'UniParse',
    age: 23
  }
  const userStr = JSON.stringify(fromServer)
  const toClient = JSON.parse(userStr)
  console.log(toClient.name)

  //task 2 exclude backreferences
  const room = { number: 23 },
    meetup = {
      title: "Conference",
      occupiedBy: [{ name: "John" }, { name: "Alice" }],
      place: room
    }
  // circular references
  room.occupiedBy = meetup;
  meetup.self = meetup;
  console.log(JSON.stringify(meetup, function replacer(k, v) {
    return v == meetup && k != '' ? undefined : v
  }, 2))

})();

(() => { //decorators & forwarding, call/apply
   //simple: 1 arg, unbind this, ignore custom properties
  function cachingDecorator0(func) {
    const cache = new Map()
    return x => { //wrapper
      if (cache.has(x)) return cache.get(x)
      const result = func(x)
      cache.set(x, result)
      return result
    }
  }
  //smart: bind args & this, but ignore custom properties
  function cachingDecorator1(func) {
    const cache = new Map()

    return function wrapper() { //()=>{} don't have arguments
      const hash = [].join.call(arguments) //barrow arr method
      if (cache.has(hash)) return cache.get(hash)
      else return cache
        .set(hash, func.apply(this, arguments))
        .get(hash)
    }
  }
  //advanced: bind args & this & custom properties
  function cachingDecorator(func) {
    const cache = new Map()

    function wrapper() {
      const hash = [...arguments].join()
      if (cache.has(hash)) return cache.get(hash)
      else return cache
        .set(hash, func.apply(this, arguments))
        .get(hash)
    }

    //bind custom properties to wrapper
    Object.entries(func).forEach(([k, v]) => wrapper[k] = v)

    return wrapper
  }

  function getDelay(func, ...args) {
    const start = Date.now()
    func(...args)
    return Date.now() - start
  }
  function fib(n) { //fibonacci slow calculation && havey cpu
    return [0, 1].includes(n) ? n : fib(n - 1) + fib(n - 2)
  }
  fib.theory = 'fibonacci'//function custom property

  console.log(
    fib.theory,
    getDelay(fib, 30),
    getDelay(fib, 30),
    getDelay(fib, 30),
  )

  const cachedFib = cachingDecorator(fib)
  console.log(
    cachedFib.theory,
    getDelay(cachedFib, 30),
    getDelay(cachedFib, 30),
    getDelay(cachedFib, 30),
    getDelay(cachedFib, 31),
    getDelay(cachedFib, 31),
  )

  fib = cachingDecorator(fib) //js engine add optimization
  console.log(
    fib.theory,
    getDelay(fib, 990),
    getDelay(fib, 991),
    getDelay(fib, 992),
  )

  //task 1 spy decorator
  function spy(func) {
    function wrapper() {
      wrapper.calls.add([...arguments].join())
      return func.apply(this, arguments)
    }
    wrapper.calls = new Set()
    return wrapper
  }
  function sum() {
    return [...arguments].reduce((sum, n) => sum += n, 0)
  }
  sum = spy(sum)
  console.log(
    sum(),
    sum(1, 2),
    sum(4, 5),
    sum.calls
  )

  //task 2 delaying decorator
  function delay(func, delay) {
    return function wrapper() {
      setTimeout(() => func.apply(this, arguments), delay)
    }
  }
  function sayHi(name) { console.log(`hello ${name}`) }
  sayHi = delay(sayHi, 1000)
  sayHi('UniParse')
  sayHi('Jack')

  //task 3 debounce decorator 
  function debounce0(func, delay) {
    function wrapper() {
      const counter = ++wrapper.counter
      setTimeout(() => {
        if (wrapper.counter == counter)
          func.apply(this, arguments)
      }, delay)
    }
    wrapper.counter = 0
    return wrapper
  }
  function debounce(func, delay) {
    let timerId
    return function wrapper() {
      clearTimeout(timerId)
      timerId = setTimeout(() => func.apply(this, arguments), delay)
    }
  }
  function hi(name) { console.log(`hello ${name}`) }
  hi = debounce(hi, 1000)
  hi('a')                     //ignored
  setTimeout(hi, 500, 'b')    //ignored
  setTimeout(hi, 1500, 'c')   //loged
  setTimeout(hi, 2550, 'd')   //loged
 
  //task 4 throttle decorator
  function throttle(func, delay) {
    let lastArgs, pause = 0
    return function wrapper() {
      if (!pause) {
        pause = 1
        func.apply(this, arguments)       //first call
        setTimeout(() => {
          pause = 0
          if (lastArgs) {
            func.apply(...lastArgs)       //last call
            lastArgs = null
          }
        }, delay)
      } else lastArgs = [this, arguments]
    }
  }
  function f(str) { console.log(str) }
  f = throttle(f, 1000)
  f(1)
  f(2)
  f(3)
  setTimeout(f, 1000, 4)



})();

*/
/*
{ //function binding
  //task 1 bound function as a method
  function f1() { console.log(this) }
  const user1 = { f: f1.bind(null) }
  user1.f()//return null on strict mode, else globalThis

  //task 2 second bind
  function f2() { console.log(this.name) }
  f2 = f2
    .bind({ name: 'name1' })
    .bind({ name: 'name2' }) //do nothing, cannot be re-bound
  f2() //name1

  //task 3 function property after bind (lost, undefind)
  function sayHi() {
    console.log(this.name)
    sayHi.p1 = 'v1'
  }
  sayHi.p2 = 'v2'

  sayHi = sayHi.bind({ name: 'UniParse' })
  console.log(sayHi.p1, sayHi.p2)//undefined

  //task 4 fix a function that loses "this" 
  function askPermission(access, ok, fail) {
    return access == 'Admin' ? ok() : fail()
  }
  const user4 = {
    name: 'UniParse',
    access: 'Admin',
    loginOk() { console.log(`${this.name} logged in`) },
    loginFail() { console.log(`${this.name} failed to logIn`) }
  }
  askPermission(
    user4.access,
    user4.loginOk.bind(user4),
    user4.loginFail.bind(user4)
  )

  //task 5 partial application for login
  const user5 = {
    name: 'momen',
    access: 'Manager',//not Admin
    login(access) {
      console.log(
        this.name
        + (access ? ' logged in' : ' failed to log in')
      )
    }
  }
  askPermission(
    user5.access,
    user5.login.bind(user5, true),
    user5.login.bind(user5, false)
  )

}*/
/*
{ //iterable
  //summay:
  //  iterators are objects that implement [Symbol.iterater]()
  //  array-likes are objects that have indexes & .length
  //  ex: (objects can be iterable or array-like or both)
  //    iterable & array-like: 'strings'
  //    only array-like:   { 0:'v1', 1:'v2', length:2 }
  //    only iterable: range object bellow

  const range = {
    from: 10,
    to: 15,
    [Symbol.iterator]() {
      return { //return iterator object have .next() method
        current: this.from,
        last: this.to,
        next() { // called on each iterator of for..of loop
          return this.current <= this.last
            ? { done: false, value: this.current++ }
            : { done: true }
        }
      }
    }
  }

  let arr = []
  for (let n of range) arr.push(n)
  //for each iterator of loop:
  //  if ( obj[Symbol.iterator]().next().done ) break
  //  else n = range[Symbol.iterator]().next().value
  console.log(arr)
  console.log([...range])




  //we can use same object as iterator
  //limitation: we can't use it on multi async for..of loops
  const simpleRange = {
    from: 1,
    to: 5,
    [Symbol.iterator]() {
      this.current = this.from
      return this
    },
    next() {
      return this.current <= this.to
        ? { done: false, value: this.current++ }
        : { done: true }
    }
  }
  arr = []
  for (let n of simpleRange) arr.push(n)
  console.log(arr)
  console.log([...simpleRange])



  //strings are iterators!!
  arr = []
  for (let char of 'hello') arr.push(char)
  console.log(arr)
  console.log(Array.from('hello'))
  //str {iterator} are the same as 'hello' string
  const str = {
    str: 'hello',
    [Symbol.iterator]() {
      return {
        str: this.str,
        index: 0,
        next() {
          return this.index < this.str.length
            ? { done: false, value: this.str[this.index++] }
            : { done: true }
        }
      }
    }
  }
  arr = []
  for (let char of str) arr.push(char)
  console.log(arr)
  console.log([...str])
  //same as:
  arr = []
  const strIterator = 'hello'[Symbol.iterator]()
  while (true) {
    const result = strIterator.next()
    if (result.done) break
    else arr.push(result.value)
  }
  console.log(arr)

}*/
/*
{ //property flags & descriptors
  const obj = { p: 'v' }
  Object.defineProperty(obj, 'p', { writable: false })
  //obj.p = 'upadte'//error: read only property
  console.log(
    Object.getOwnPropertyDescriptor(obj, 'p')
  )
  delete obj.p //we still can delete read-Only properties
  console.log(obj.p)

  //declare from defineProperty() set all descriptors to false
  Object.defineProperty(obj, 'p2', {
    value: 'v2',
    configurable: true
    //writable: false,     //by default false
    //enumerable: false    //by default false
  })
  console.log(
    Object.getOwnPropertyDescriptor(obj, 'p2')
  )


  let user = {
    name: 'uniParse',
    toString() { return this.name }
  }
  let arr = []
  for (const k in user) arr.push(k)
  console.log(arr)
  console.log(Object.keys(user))

  Object.defineProperty(user, 'toString', {
    enumerable: false
  })
  arr = []
  for (const k in user) arr.push(k)
  console.log(arr)
  console.log(Object.keys(user))


  console.log(JSON.stringify(
    Object.getOwnPropertyDescriptor(Math, 'PI'),
    null, 2
  ))
  //error: cannot modify or delete unconfigurable property
  //  Object.defineProperty(Math, 'PI', { writable: true })
  //  Math.PI = 3
  //  delete Math.PI

  const uni = { name: 'uniparse' }
  Object.defineProperty(uni, 'name', { configurable: false })
  //we still can change .value & .writable:false
  // while we can't delete or change .enumeruble .writable:true
  uni.name = 'change1'
  console.log(uni.name)
  Object.defineProperty(uni, 'name', { writable: false })
  //uni.name = 'change2' //error read only
  //error non-configurable
  //  Object.defineProperty(uni, 'name', { 
  //    configurable: true,
  //    enumerable: false,
  //    writable: true  //con only change to false not to true
  //  }




  //Object.defineProperties(uni, { p1:{descriptors}, p2... })
  Object.defineProperties(uni, {
    label: {
      value: 'Admin',
      configurable: true,
      enumerable: true,
      writable: true
    },
    birthDate: {
      value: '2000-01-15',
      configurable: false,
      enumerable: true,
      writable: false
    },
    [Symbol('hidden')]: {
      value: 'sym',
      configurable: true,
      enumerable: false,
      writable: true
    }
  })
  console.log(
    Object.getOwnPropertyDescriptors(uni)
  )


  const hardClone = Object.defineProperties({},
    Object.getOwnPropertyDescriptors(uni))
  console.log(
    Object.getOwnPropertyDescriptors(hardClone)
  )

  const softClone = { ...uni } //all flags=true, no symbols
  console.log(
    Object.getOwnPropertyDescriptors(softClone)
  )


}*/
/*
{ //propotype inheritance
  //task 2 searching algorithm
  const
    head = { glasses: 1 },
    table = { pen: 3, __proto__: head },
    bed = { sheet: 1, pillow: 2, __proto__: table },
    pockets = { money: 2000, __proto__: bed }
  console.log(pockets.pen, bed.glasses)

  //task 3 where does it write?
  const
    animal = { eat() { this.full = true } },
    rabbit = { __proto__: animal }
  rabbit.eat()
  console.log(rabbit.hasOwnProperty('full'))//true

  //task 5 why are both hamsters full
  const
    hamster = {
      stomach: [],
      eat(food) {//this.stomach.push(food)
        if (this.hasOwnProperty('stomach'))
          this.stomach.push(food)
        else this.stomach = [food]
      }
    },
    speedy = { __proto__: hamster },
    lazy = { __proto__: hamster }
  speedy.eat('apple')
  speedy.eat('orange')
  console.log(hamster.stomach)
  console.log(speedy.stomach)
  console.log(lazy.stomach)
  console.log(
    speedy.hasOwnProperty('stomach'),
    lazy.hasOwnProperty('stomach')
  )
}*/
/*
{ //constructor prototype
  const animal = { eat: true }
  function Rabbit(name) { this.name = name }
  Rabbit.prototype = animal
  const rabbit = new Rabbit('white rabbit')
  //rabbit.__proto__=animal
  console.log(rabbit.eat)

  //by defualt:
  function F() { this.pro = 'v' }
  //  F.prototype = { constractor: F }
  const obj = new F()
  //  obj.__proto__ = F.prototype = { constractor: F }
  console.log( //true
    F.prototype.constructor == F,
    obj.__proto__ == F.prototype,
    obj.constructor == F
  )

  const obj2 = new obj.constructor() //as new F()
  console.log(//true
    obj2.__proto__ == obj.__proto__,
    obj2.constructor == obj.constructor,
    obj2.constructor == F
  )

  //task 1 changing "prototype"
  {//1
    function Rabbit() { }
    Rabbit.prototype = { eats: true }//old prototype
    const rabbit = new Rabbit
    console.log(rabbit.eats)

    Rabbit.prototype = {} //overriding, affects just new objs
    console.log(rabbit.eats) //old prototypes preserved: true
  } {//2
    function Rabbit() { }
    Rabbit.prototype = { eats: true }
    const rabbit = new Rabbit

    Rabbit.prototype.eats = false //update by reference
    console.log(rabbit.eats) //all objs effected: false
  } {//3
    function Rabbit() { }
    Rabbit.prototype = { eats: true }
    const rabbit = new Rabbit

    console.log(//true true
      delete rabbit.eats,//effects only this obj, not prototype
      rabbit.eats //preserved from prototype
    )
  } {//4
    function Rabbit() { }
    Rabbit.prototype = { eats: true }
    const rabbit = new Rabbit

    console.log(
      delete Rabbit.prototype.eats,
      rabbit.eats //undefined in this obj & this.__proto__
    )
  }

  //task 2 create obj with same constructor
  function User(name) { this.name = name }
  const newPrototype = { extra: 'val', extra2: 'val2' }

  //User.prototype = newPrototype;   //override constructor
  Object.assign(                     //preserve constructor
    User.prototype, newPrototype)
  const
    user = new User('John'),
    user2 = new user.constructor('Pete')
  console.log(user2.name)

}*/
/*
{ //native prototype
  //primitives data-types don't have .__proto__ as objects
  //  number, bigInt, boolean, string, symbol, undefined, null
  //  but each time we access primitive.__proto__.member
  //    1.we actualy creating new obj from Constructor(v)
  //      const obj= new Number|BigInt|Boolean|String|Symbol(v)
  //      except null & undefined who don't have obj wrapper
  //    2.then accessing __proto__.member on that obj
  //      obj.toString()
  //    3.then deleting the temparory obj: delete obj

  const n = 15 //we didn't call new Number(15)
  //Number.prototype = {
  //  constructor: Number,
  //  toString: function,
  //  ...
  //  __proto__: Object.prototype
  //}
  //Objcet.prototype = {
  //  constructor: Object,
  //  toString: function,
  //  ...
  //  __proto__: null
  //}
  console.log(//f true... false
    n.toString(16), // as new Number(n).toString(16)
    n.__proto__ === Number.prototype,
    n.__proto__.__proto__ === Object.prototype,
    n.__proto__.__proto__.__proto__ === null,

    //closest property in prototype chain used
    n.toString === n.__proto__.toString, //Number.prototype
    n.toString === n.__proto__.__proto__.toString //false
  )



  //task 1 add method "f.defer(ms)" to functions
  Function.prototype.defer = function () {
  setTimeout(this, ...arguments)
}
function sayHi(greeting) { console.log(greeting) }
sayHi.defer(1000, 'hi')

//task 2 add the decorating "defer()" to functions
//task 2 add the decorating "defer()" to functions
Function.prototype.defer = function (delay) {
  return (...args) => setTimeout(this, delay, ...args)
}
function showSum(a, b) { console.log(a + b) }
showSum.defer(1000)(1, 5) //after 1000ms show 6

} */
/*
{ //class basic syntax
  class Name {
    constructor() {
      //individually stored in this objects
      //override any field membor
      this.p = 'initial'
      this.method = () => { }
    }

    //fields assignment, individually stored in this objects
    fieldProperty = 'field'
    fieldMethod = () => { } //fix "loosing this" without bind

    //shared in Name.prototype
    protoMethod() { }
    get p() { return this._p }
    set p(v) { return this._p = v }
  }


  const uni = new Name
  uni.p

  console.log(
    uni.hasOwnProperty('fieldMethod'),    //true
    Object.getPrototypeOf(uni)
      .hasOwnProperty('protoMethod'), //true

    uni.hasOwnProperty('_p'),       //true
    Object.getPrototypeOf(uni)
      .hasOwnProperty('p'),         //true
  )


  //task Rewrite the class
  class Clock {
    constructor({ template }) {
      this.render = () => {
        const date = new Date()
        console.log(template
          .replace('h', zeroLead(date.getHours()))
          .replace('m', zeroLead(date.getMinutes()))
          .replace('s', zeroLead(date.getSeconds()))
        )
        function zeroLead(t) { return t < 10 ? '0' + t : t }
      }
    }

    start = () => {
      this.render()
      this.timerId = setInterval(this.render, 1000)
    }
    stop = () => clearInterval(this.timerId)//fix "loose this"
  }
  const clock = new Clock({ template: 'h:m:s' })
  //clock.start()
  setTimeout(clock.stop, 2023)
}*/

{ //

}
{ }
{ }
{ }
{ }
{ }
{ }
{ }
{ }
{ }
{ }
{ }