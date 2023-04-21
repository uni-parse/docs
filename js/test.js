(async () => {

  const date1 = new Date()
  await sleep(100)
  const date2 = new Date()

  console.log(
    date2 > date1,
    typeof date1
  )

  function sleep(ms) {
    return new Promise(rs => setTimeout(rs, ms))
  }

})();
