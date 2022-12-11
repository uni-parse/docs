
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
  //task1 transform property name from css to javascript
  function camelize(str) {
    const rawWords = str.split('-'),

      capitalWords = rawWords.map((word, i) => !i ? word : word[0].toUpperCase() + word.slice(1)),

      newStr = capitalWords.join('')
    return newStr
  }
  console.log(camelize('-webkit-backgrund-clip'));

  //task2 filter range
  function filterRange(arr, min, max) {
    return arr.filter(item => item <= max && item >= min)
  }
  console.log(filterRange([1, -3, 101, 99, 40], 0, 100))

  //task2.5 filter range "in place" (without return)
  function filterRangeInPlace(arr, min, max) {
    arr.forEach((item, index) => {
      if (item > max || item < min) arr.splice(index, 1)
    })
  }
  const task2Arr = [1, 101, 99]
  filterRangeInPlace(task2Arr, 0, 100)
  console.log(task2Arr)


  //task3 sort in decreasing order
  const arr = [5, 2, 1, -10, 8]
  arr.sort((a, b) => b - a)
  console.log(arr)

  //task4 copy and sort array
  function copySorted(arr) {
    return arr.slice().sort() //slice() return copy
  }
  const orgArr = ['HTML', 'JavaScript', 'CSS']
  console.log(copySorted(orgArr));
  console.log(orgArr)

  //task5 create an extendable calculator
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

  //task6 map to names
  const john = { name: "John", age: 25 },
    pete = { name: "Pete", age: 30 },
    mary = { name: "Mary", age: 28 },
    users = [john, pete, mary],
    names = users.map(user => user.name)
  console.log(names);

  //task7 map to objects
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

  //task8 sort users by age
  function sortByAge(users) {
    users.sort((a, b) => a.age - b.age)
  }
  const john2 = { name: "John", age: 25 },
    pete2 = { name: "Pete", age: 30 },
    mary2 = { name: "Mary", age: 28 },
    users2 = [john2, pete2, mary2]
  sortByAge(users2)
  console.log(users2.map(u => u.age))

  //task9 shuffle an array (sort with evenly random order)
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

  //task10 get average age
  function getAverageAge(users) {
    return users.reduce((prevSum, user) => prevSum + user.age, 0) / users.length
  }

  const john3 = { name: "John", age: 25 },
    pete3 = { name: "Pete", age: 30 },
    mary3 = { name: "Mary", age: 29 },
    users3 = [john3, pete3, mary3]
  console.log(getAverageAge(users3))

  //task11 filter unique array members
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

  //task12 create keyed object from array
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

  //task13


})();
(() => { //iteration

})();
(() => { })();
(() => { })();
(() => { })();
(() => { })();
(() => { })();
(() => { })();
(() => { })();
(() => { })();
(() => { })();
(() => { })();
(() => { })();
(() => { })();
(() => { })();
(() => { })();
(() => { })();
(() => { })();