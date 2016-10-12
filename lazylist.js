import {Just, Nothing} from './maybe.js'
const Map = 'Map'
const Filter = 'Filter'
const LazyList = (xs, instructions=[]) => ({
  map: f => LazyList(xs, [[Map, f], ...instructions]),
  run: () => xs.reduce((listResult, item)=> 
    applyToValue(instructions, Just(item)).cata({
      Just: x => [...listResult, x],
      Nothing: () => listResult
    })
   )
})

const instructionHandlers = {
  [Map]: (m, f) => m.map(f),
  [Filter]: (m, f) => m.chain(x => f(x)? Just(x) : Nothing())
}

function applyToValue([instruction, ...rest], M){
 const [instructionType, f] = instruction
 const result = instructionHandlers[instructionType](M, f)
 return (rest.length==0)? result : applyToValue(rest, result)
}
