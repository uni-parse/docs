
const main = document.createElement('main')
const ul = document.createElement('ul')

ul.textContent = 'txt';
['one', 'two', 'three'].forEach(txt => {
  const li = document.createElement('li')
  li.textContent = txt
  ul.appendChild(li)
});

main.appendChild(ul)
document.body.appendChild(main);

(() => {//node navigation
  const [txt, li1, li2, li3] = ul.childNodes
  log(// all true
    ul.hasChildNodes(),
    ul.firstChild == ul.childNodes[0]
    && ul.firstChild == txt,
    ul.lastChild == ul.childNodes[ul.childNodes.length - 1]
    && ul.lastChild == li3,
    document.documentElement.parentNode === document,
    li2.parentNode == ul,
    li2.previousSibling == li1,
    li2.nextSibling == li3,
  )

  let node = txt
  while (node = node.parentNode) log(node)
  //ul, main, body, html, document
});

(() => {//elements_only navigation
  const [li1, li2, li3] = ul.children
  log(//all true
    ul.firstElementChild == li1,
    ul.lastElementChild == li3,
    document.documentElement.parentElement !== document,
    document.documentElement.parentElement === null,
    li2.parentElement == ul,
    li2.nextElementSibling == li3,
    li2.previousElementSibling == li1,
  )

  let el = li1
  while (el = el.parentElement) log(el) //ul, main, body, html
});

(() => {//table_only navigation
  const
    table = document.createElement('table'),
    caption = document.createElement('caption'),
    thead = document.createElement('thead'),
    tbody1 = document.createElement('tbody'),
    tbody2 = document.createElement('tbody'),
    tfoot = document.createElement('tfoot')

  caption.textContent = 'tabel'
  table.appendChild(caption)

  for (ctx of [thead, tbody1, tbody2, tfoot]) {
    for (let i = 1; i <= 3; i++) {
      const tr = document.createElement('tr'),
        th = document.createElement('th')

      th.textContent = `head${i}`
      tr.appendChild(th)

      for (let j = 1; j <= 3; j++) {
        const td = document.createElement('td')
        td.textContent = `data${j}`
        tr.appendChild(td)
      }

      ctx.appendChild(tr)
    }

    table.appendChild(ctx)
  }

  main.appendChild(table)


  const
    [tr1, tr2, tr3] = table.tBodies[0].rows,
    [th, td1, td2, td3] = tr2.children

  log(
    table.caption, //caption
    table.tHead,
    table.tFoot,
    table.tBodies, //collaction tbody1 tbody2
    table.rows,    //collaction of all <tr> in table

    thead.rows,
    tbody1.rows,
    tbody2.rows,
    tfoot.rows,

    tr2.cells, //th td td td
    tr2.rowIndex, //4  (relative to the entire table)
    tr2.sectionRowIndex, //1 (relative to current ctx: tbody1)


    th.cellIndex,  //0 (relative to current ctx: tr2)
    td1.cellIndex, //1
  )


});


(() => {//searching elements
  const
    div1 = document.createElement('div'),
    div2 = document.createElement('div')
    div1.setAttribute('name', 'name1')
    div1.setAttribute('class', 'class1')
    div1.id = 'id1'
    div2.id = 'id-2'//hyphen: valid id, but invalid variable name
  main.appendChild(div1)
  main.appendChild(div2)

  try {//works fine in browser, no ReferenceError !!
    log(//all true
      id1 == document.getElementById('id1'),
      globalThis['id-2'] == document.getElementById('id-2'),
    )
  } catch (err) { console.log(err) }

  log(//all true
    main.querySelector('div') == main.querySelectorAll('div')[0],
    div1.matches('div#id1'),
    div1.closest('main') == main,
    //historical methods replaced by el.querySelectorAll()
    main.getElementsByTagName('div')[0] == div1,
    main.getElementsByClassName('class1')[0] == div1,
    document.getElementsByName('name1')[0] == div1,
  )

});

(() => { })();
(() => { })();
(() => { })();
(() => { })();
(() => { })();
(() => { })();










function log() {
  for (const exp of arguments) console.log(exp)
}

