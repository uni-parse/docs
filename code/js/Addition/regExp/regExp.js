


console.log(
  new RegExp('pattern', 'gmi'),
  /pattern/gmi,
);

//flags: 6
// i case-insensitive, a == A
// g group of matches (array), else only first match
// m multiLine ??
// s dotall,  . == \n
// u unicode processing (incloding surrogate pairs as 💡)
// y sticky, position ??

(() => {
  const str = 'We will, we will rock you'

  const result1 = str.match(/we/ig)
  const result2 = str.match(/we/i)
  const result3 = str.match(/xxx/)
  console.log(
    result1, // ['We', 'we']

    result2, // ['We', index: 0, input: str1, groups: undefined]
    //result2.length, // 1
    //result2.index, // 0
    //result2.input, // We will, we will rock you

    result3, // null
  )
})();

(() => {
  const str = 'He can, he will'

  const result = str.replace(/he/ig, "$& and I")
  console.log(result)



  console.log(
    /love/i.test('we Love javascript')
  )

  console.log(
    'we know html 5'.match(/\w\w\w\w\s\d/)[0]
  )

  console.log(
    'es6'.match(/\w\w\S/)?.join('')
  )

  const telStr = '+7(903)-123-45-67'
  console.log(
    +telStr.match(/\d/g).join(''),
    +telStr.replace(/\D/g, ''),
  )

  // . == any charactor class ≠ \n, the flag s allow \n
  console.log(
    'hello\nworld'.match(/hello.world/),//null
    'hello\nworld'.match(/hello.world/s)[0], //'hello\nworld'
  )

})();


(() => {
  const commants = `... <!-- My -- comment
 test --> ..  <!----> ..
`
  console.log(commants.match(/<!--.*?-->/gs))

  const tags = '<> <a href="/"> <input type="radio" checked> <b>'
  console.log(
    tags
      .match(/<[^<>]+>/ig)
  )


  const regexp = /(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/g

  const dates = "2019-10-30, 2020-01-01";

  console.log(
    dates.replace(regexp, '$<day>.$<month>.$<year>')
  ) // 30.10.2019, 01.01.2020

})();

(() => {

  let str = "Gogogo John!";

  // ?: excludes 'go' from capturing
  let regexp = /(?:go)+ (\w+)/i;

  let result = str.match(regexp);

  console.log(result[0]); // Gogogo John (full match)
  console.log(result[1]); // John
  console.log(result.length); // 2 (no more items in the array)
})();

(() => {
  const re1 = /[\da-f]{2}(:[\da-f]{2}){5}/i

  console.log(
    re1.test('01:32:54:67:89:AB'), // true
    re1.test('0132546789AB'), // false, no colons
    re1.test('01:32:54:67:89'), // false, must be 6 not 5 num
    re1.test('01:32:54:67:89:ZZ'), // false, ZZ at the end
  )

  const str2 = "color: #3f3; background-color: #AA00ef; and: #abcd"
  console.log(
    str2.match(/#([\da-z]{3}){1,2}\b/gi)
  )

  console.log(
    "-1.5 0 2 -123.4.".match(/-?\d+(\.\d+)?/g)
  ) // -1.5, 0, 2, -123.4

  function parse(expression) {//return [operan1{±n.f}, operator{+ - * /}, operan2]
    const regexp = /(?<operan1>-?\d+(?:\.\d+)?)\s+(?<operator>[-\+\*\/])\s+(?<operan2>-?\d+(?:\.\d+)?)/
    const { operan1, operator, operan2 } = expression.match(regexp).groups
    return [operan1, operator, operan2]
  }
  console.log(
    parse("-1.2 * 3.4"),
    parse("-1.2 / -3.4"),
    parse("  -1.2  -  \n -3.4  "),
    parse("-1.2 + 3.4"),
  )

  console.log(
    `no quotes,
    "double quotes",
    'single quotes',
    \`backtick
    quotes\`
    `.match(/(?<qoute>['"`]).*\k<qoute>/gs)
  )

  //time
  console.log(
    '12:00 23:59 23:60 24:00 112:001 25:99'
      .match(/\b(?<hours>[01]\d|2[0-3]):(?<minutes>[0-5]\d)\b/g)
  )

  //find programming languages
  console.log(
    'Java JavaScript PHP C++ C'
      .match(/Java(?:Script)?|C(?:\+\+)?|PHP/g)
  )

  //find bbtag pairs
  console.log(
    `...
    [url]
      [b]
        http://google.com
      [/b]
    [/url]
    ...
    [qoute]if you don't know where you are going, any way toke you there[/qoute]
    ...`
      .match(/\[(?<tag>b|url|qoute)\].*?\[\/\k<tag>\]/isg)
  )

  //find quoted strings
  console.log(
    `
    `
  )

  //find the full tag
  console.log(
    `<style> <styler> <style attr1="..." attr2="..." attr3>`
      .match(/<style(?:>|.*?>)/g)
  )


  //find non-negative integers
  console.log(
    '0 12 -5 123 -18'.match(/\b(?<!-)\d+/g)
  )

  //insert after head
  console.log(
    `
<html>
  <body style="height: 200px">
  ...
  </body>
</html>
`.replace(/(?<=<body(>|.*>))/, '<h1>hello</h1>')
    //.replace(/<body.*?>/, '$&<h1>hello</h1>')
  )
})();

(() => {
  let regexp = /^(\d+)*$/;

  let str = "012345678901234567890123456789z";

  // will take a very long time (careful!)
  //console.log(regexp.test(str));
})();

(() => { // str.match(regexp)
  // return one of three:
  //  ▪ null, if no match
  //  ▪ array of matches, if g flag in regexp
  //  ▪ array of single match & groups, and extra properties

  const str = 'text match text'

  const regexp = /(?<g1>mat)(?<g2>ch)/
  const result_singleMatch = str.match(regexp)
  console.log(
    result_singleMatch[0],     // match
    result_singleMatch.index,  // 5
    result_singleMatch[1],     // mat
    result_singleMatch[2],     // ch
    result_singleMatch.groups, // { g1: 'mat', g2: 'ch' }
    result_singleMatch.input,  // text match text
  )

  console.log( // ['text', 'text']
    str.match(/(?<g1>te)(?<g2>xt)/g)
    // no extra properties
  )

  console.log( // null
    str.match(/nomatch/)
  )
})();

(() => { //str.matchAll(regexp)  old browsers need polyfill !
  // return iterable object (⚠️not array-like)
  //  ▪ required g flag
  //  ▪ every match stored as array with extra properties
  //  ▪ return empty iterable object if no match.
  const str = 'text match1 text match2'

  try { // ⚠️ without g flag, throw err!
    str.matchAll(/match/)
  } catch (err) {
    console.log(err)
  }

  const regexp = /(?<g1>mat)(?<g2>ch\d)/g
  const result = str.matchAll(regexp)
  const resultArr = Array.from(result)
  const result1 = resultArr[0]
  const result2 = resultArr[1]
  console.log(

    result1[0],     // match1
    result1.index,  // 5
    result1[1],     // mat
    result1[2],     // ch1
    result1.groups, // { g1: 'mat', g2: 'ch1' }
    result1.input,  // text match1 text match2

    result2[0],     // match2
    result2.index,  // 17
    result2[1],     // mat
    result2[2],     // ch2
    result2.groups, // { g1: 'mat', g2: 'ch2' }
    result2.input,  // text match1 text match2

  )

  console.log( // Iterator: {}
    str.matchAll(/nomatch/g)
  )
})();

(() => { //str.split(subStr|regexp, limit)
  const storage = `guns:4, ammo:200,     scops:1,
   shilds:2,backpak`
  const items = storage.split(/:\d+,\s*/)
  console.log(items)
})();

(() => { //str.search(regexp) return -1|index
  // limitation it find only 1st match, use matchAll() instead
  const str = 'text match1 text match2'
  console.log(
    str.search(/match/), // 5
    str.search(/nomatch/), // -1
  )
})();

(() => { //str.replace(subStr|regexp, replacementStr|func)

  //💡 str.replaceAll() works the same way as .replace()
  //  ⚠️ regexp without g flag throw err


  const storage = `guns:4, ammo:200,     scops:1,
   shilds:2,backpak`
  const regexp = /:\d+,\s*/g
  const replacement = ' '
  const itemsStr = storage.replace(regexp, replacement)
  console.log(
    itemsStr
  )

  // we can add special characters in replacementStr
  //  $&      insurt the whole match
  //  $`      insurt pre match subStr
  //  $'      insurt post match subStr
  //  $n      insurt content of the captured group (...) nth n
  //  $<name> insurt content of the captured group (?<name>...)
  //  $$      insurt character $

  console.log(
    'abc'.replace(/b/, '(x)'),                     // a(x)c
    'abc'.replace(/b/, '($&x)'),                   // a(bx)c
    'abc'.replace(/b/, '($`x)'),                   // a(ax)c
    'abc'.replace(/b/, "($'x)"),                   // a(cx)c
    'abc'.replace(/(b)/, '($1x)'),                 // a(bx)c
    'abc'.replace(/(?<middle>b)/, '($<middle>x)'), // a(bx)c
    'abc'.replace(/b/, '($$x)'),                   // a($x)c
  )


  // we can use function as replacement:
  //  (match, capturedGroup1, ..., offset, input, groups) => ''

  console.log( //HTML and CSS
    'html and Css'.replace(
      /html|css/ig,
      match => match.toLocaleUpperCase() //called forEach match
    )
  )

  console.log(  // 0-3-6
    "Ho-Ho-ho".replace(
      /ho/gi,
      (match, offset) => offset
    )
  )

  console.log(  // parse uni
    "uni parse".replace(
      /(?<name>\w+) (?<surname>\w+)/g,
      //(match, name, surname) => `${surname} ${name}`
      //(...match) => `${match[2]} ${match[1]}`
      (...match) => {
        const groups = match.at(-1) // always last array item
        return `${groups.surname} ${groups.name}`
      }
    )
  )
})();

(() => { //regexp.exec(str)
  // 💡 without g flag, behave like str.match(), ignore regexp.lastIndex

  // but with g flag, it have differ behaviour:

  //  call1: return first match & save position in regexp.lastIndex
  //  call2: start searching from regexp.lastIndex, and save position in regexp.lastIndex.
  //  and so on
  //  if there no matche, return null, & reset regexp.lastIndex to 0


  const str = 'text match1 text match2'
  const regexp = /match\d/g
  let result
  while (result = regexp.exec(str))
    console.log(`${result[0]} at ${result.index}`)
  // search1: (regexp.lastIndex = 0) find 'match1' at 5
  //   set regexp.lastIndex = 5
  //   return ['match1', ...]
  // search2: (regexp.lastIndex = 5) find 'match2' at 17
  //   set regexp.lastIndex = 17
  //   return ['match2', ...]
  // search3: (regexp.lastIndex = 17) find nothing
  //   set regexp.lastIndex = 0
  //   return null



  // manually start from postion 6
  regexp.lastIndex = 6
  console.log( // match2
    regexp.exec(str)[0]
  )

  const re = /match\d/y

  re.lastIndex = 17
  console.log( // match2
    re.exec(str)[0]
  )

  re.lastIndex = 16
  console.log( // null
    re.exec(str)
  )
})();

(() => { //regexp.test(str)
  const str = 'text match text'
  const regexp = /match/g

  console.log(

    regexp.lastIndex, // 0
    regexp.test(str), // true
    
    
    regexp.lastIndex, // 10
    regexp.test(str), // false
  )


})();

(() => { })();
(() => { })();
(() => { })();
(() => { })();