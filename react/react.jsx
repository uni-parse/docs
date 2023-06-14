import { useState, useContext, createContext } from 'react'
;(() => {
  /** useState ...................................
   * its component memory, survive rerenders.
   * state must be immutable: pass new copy to setState()
   */
  function Component() {
    const [color, setColor] = useState('initial')

    return (
      <div style={{ backgroundColor: color }}>
        <input
          type='color'
          onchange={e => setColor(e.target.value)}
        />
      </div>
    )
  }
})()

;(() => {
  /** useContext ................................
   * 1st create context (*)
   * 2nd provide context (**)
   * 3rd use context in dom subTree (***)
   */
  const colorCtx = createContext('initial') // (*)

  function Component() {
    const [color, setColor] = useState('initial')

    return (
      <div style={{ backgroundColor: color }}>
        <input
          type='color'
          onchange={e => setColor(e.target.value)}
        />

        <br />

        <Ctx color={color}>
          <Log />
        </Ctx>
      </div>
    )
  }

  function Ctx({ color, children }) { // (**)
    return (
      <colorCtx.Provider value={color}>
        {children}
      </colorCtx.Provider>
    )
  }

  function Log() {
    const color = useContext(colorCtx) // (***)
    return <output>we used the color: {color}</output>
  }
})()
