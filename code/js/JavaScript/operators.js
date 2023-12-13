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