const Just  = x => ({
    map: f => Just(f(x)),
    chain: f => f(x),
    getOrElse: fallback => x
})
const Nothing = () => ({
    map: f => Nothing(),
    chain: f => Nothing(),
    getOrElse: fallback => fallback
})

const Maybe = { of: Just, empty: Nothing }

export {Just, Nothing}
