
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


(() => { //dom classes hierarchy & inheritance
  log( //true
    document.body instanceof HTMLBodyElement
    && document.body instanceof HTMLElement
    && document.body instanceof Element
    && document.body instanceof Node
    && document.body instanceof EventTarget //true in browser
    && document.body instanceof Object
  )


  log(getClassesNames(document))
  // HTMLDocument
  // Document
  // Node EventTarget Object

  log(getClassesNames(document.createAttribute('class')))
  // Attr
  // Node EventTarget Object

  log(
    getClassesNames(document.createTextNode('hello')),
    getClassesNames(document.createComment('notes'))
  )
  // Text | Comment
  // CharacterData
  // Node EventTarget Object

  log(getClassesNames(//⚠️dont have their own classes
    document.createElement('header'),
    document.createElement('footer'),
    document.createElement('main'),
    document.createElement('aside'),
    document.createElement('section'),
    document.createElement('article'),
    document.createElement('nav'),
    document.createElement('address'),

    document.createElement('b'),
    document.createElement('em'),
    document.createElement('i'),
    document.createElement('strong'),
  ))
  // HTMLElement Element Node EventTarget Object

  log(getClassesNames( //have thier own classes
    document.documentElement, // html
    document.head,
    document.body,
    document.createElement('div'),
    document.createElement('span'),
    document.createElement('input'),
    document.createElement('a'),
    document.createElement('ul'),
    document.createElement('ol'),
    document.createElement('li'),
    document.createElement('script'),
    document.createElement('img'),
    document.createElement('picture'),
    document.createElement('object'),
    document.createElement('source'),
    document.createElement('br'),
    document.createElement('hr'),
  ))
  // HTMLHtmlElement | Head Body Div Span Input Anchor Ulist ...
  // HTMLElement Element Node EventTarget Object

  log(getClassesNames(
    document.createElement('video'),
    document.createElement('audio'),
  ))
  // HtmlVideoElement | HtmlAudioElement
  // HTMLMediaElement
  // HTMLElement Element Node EventTarget Object

  log(getClassesNames(document.createElement('svg')))
  // HTMLUnknownElement
  // HTMLElement Element Node EventTarget Object

  try {//works in browser, no err
    log(getClassesNames(document.createEvent('AnimationEvent')))
    //AnimationEvent Event Object
  } catch (err) { console.log(err) }

  //console.dir(document.createElement('div'))

  log( //true   //old way to know node type
    document.createElement('div').nodeType === 1
    && document.createAttribute('class').nodeType === 2
    && document.createTextNode('').nodeType === 3
    //CDATA_SECTION_NODE = 4
    //ENTITY_REFERENCE_NODE = 5       // legacy
    //ENTITY_NODE = 6                 // legacy
    //PROCESSING_INSTRUCTION_NODE = 7
    && document.createComment('').nodeType === 8
    && document.nodeType === 9
    //DOCUMENT_TYPE_NODE = 10
    //DOCUMENT_FRAGMENT_NODE = 11
    //NOTATION_NODE = 12              // legacy
  )




  console.log(
    Element.prototype.hasOwnProperty('tagName')   // Getter
    && Node.prototype.hasOwnProperty('nodeName'), // Getter

    document.createElement('a').tagName === // A from Element
    document.createElement('a').nodeName,   // A from Node

    document.createAttribute('class').nodeName, // class
    document.createTextNode('hello').nodeName,  // #text
    document.createComment('note').nodeName,    // #comment
    document.nodeName,                          // #document
  )


  log(
    getSourceClass( // Node
      'hasChildNodes',
      'parentNode',
      'childNodes',
      'firstChild',
      'lastChild',
      'previousSibling',
      'nextSibling'
    ),

    getSourceClass(
      'parentElement',           // Node
      'children',                // Element
      'firstElementChild',       // Element
      'lastElementChild',        // Element
      'previousElementSibling',  // Element
      'nextElementSibling',      // Element
    ),
    getSourceClass(
      'getElementById',         // Document
      'querySelector',          // Element
      'querySelectorAll',       // Element
      'matches',                // Element
      'closest',                // Element

      'getElementsByTagName',   // Element
      'getElementsByClassName', // Element
      'getElementsByName',      // Document
    ),

    getSourceClass( // Element
      'innerHTML',
      'outerHTML',
    ),

    getSourceClass(
      'nodeValue',     //Node
      'data',          //CharacterData
    ),

    getSourceClass(
      'textContent',   //Node
      'innerText',     //HTMLElement
      'outerText',     //HTMLElement
    ),

    getSourceClass('id'),     //Element

    getSourceClass(
      'hidden', //HTMLElement
      'style',  //HTMLElement
    ),

    getSourceClass(
      'name',   //Attr
      'class', //⚠️unKnown
    )
  )


});

(() => { //tasks
  //task 1 count descendants
  const ul = document.createElement('ul')
  ul.innerHTML = `
    <li>Animals
      <ul>
        <li>Mammals
          <ul>
            <li>Cows</li>
            <li>Donkeys</li>
            <li>Dogs</li>
            <li>Tigers</li>
          </ul>
        </li>
        <li>Other
          <ul>
            <li>Snakes</li>
            <li>Birds</li>
            <li>Lizards</li>
          </ul>
        </li>
      </ul>
    </li>
    <li>Fishes
      <ul>
        <li>Aquarium
          <ul>
            <li>Guppy</li>
            <li>Angelfish</li>
          </ul>
        </li>
        <li>Sea
          <ul><li>Sea trout</li></ul>
        </li>
      </ul>
    </li>`
  document.body.appendChild(ul)
  //1: show what's the text inside Li's (without the subtree)
  for (li of ul.children)
    console.log(li.firstChild.data.split('\n')[0])
  //2: nth of all descendants Li's
  console.log(
    'nth of all nested descendants <li>: '
    + ul.querySelectorAll('li').length
  )


  //task 4 where's the "document" in the hierarchy
  console.log(
    'document instance of: '
    + getClassesNames(document).join(' ')
    //HTMLDocument Document Node EventTarget Object
  )
  console.log(
    document instanceof Node,//true
    document instanceof Element,//false
    document instanceof HTMLElement,//false
  )


});

(() => { //attributes & dom propertys

console.log(


)
})();


(() => { //styling & classes
  const div = document.createElement('div')
  div.className = 'a b c'

  console.log(
    div.classList.contains('a'), // true
    div.classList.contains('b'), // true
    div.classList.contains('c'), // true
    div.classList.contains('d'), // false
    ...div.classList             // a b c
  )

  div.classList.add('extra')
  div.classList.remove('a')
  div.classList.toggle('b')
  console.log(
    div.classList.contains('extra'), //true
    div.classList.contains('a'),     //false
    div.classList.contains('b'),     //false
  )

  div.classList.toggle('a')
  div.classList.toggle('b')
  console.log( // true
    div.classList.contains('a'),
    div.classList.contains('b'),
  )

})();
(() => { })();
(() => { })();
(() => { })();








function getClassesNames() {
  const allClassesNames = []

  for (obj of arguments) {
    const classesNames = []
    let proto = obj

    while (proto = Object.getPrototypeOf(proto))
      classesNames.push(proto.constructor.name)

    if (arguments.length == 1) return classesNames

    allClassesNames.push(classesNames)
  }

  return allClassesNames
}

function getSourceClass() {
  const classes = [
    HTMLElement,
    Element,
    Node,
    Attr,
    Text,
    Comment,
    CharacterData,
    Document,
    HTMLDocument,
    EventTarget,
    Object,
  ]

  const sources = {}
  for (const p of arguments) sources[p] = // src ?? ⚠️unKnown
    classes.find(c => c.prototype.hasOwnProperty(p))?.name
    ?? '⚠️unKnown'

  return JSON.stringify(sources, null, 2).replaceAll('"', '')
}

function log() {
  for (const exp of arguments) console.log(exp)
}