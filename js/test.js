(async () => {

  function tag(strArr, ...interpolation) {
    return `strArr = [${strArr}]\n ...$\{ip}: [${interpolation}]`
  }

  console.log(
    tag`txt1 ${'ip1'} txt2 ${'ip2'}`
  )

  console.log(
    tag`txt`
  )

  console.log(
    tag`${'ip'}`
  )

  console.log`hello` // [ 'hello' ]


})();
