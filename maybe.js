const Just  = x => ({
    isJust: true,
    cata: patterns => patterns.Just(x),
    map: f => Just(f(x)),
    filter: f => f(x)? Just(x) : Nothing(),
    reduce: (reducer, accum) => reducer(accum, x),
    chain: f => f(x),
    alt: A => Just(x),
    ap: F => F.map(f => f(x)),
    getOrElse: fallback => x
})
const Nothing = () => ({
    isJust: false,
    cata: patterns => patterns.Nothing(),
    map: f => Nothing(),
    filter: f => Nothing(),
    reduce: (reducer, accum) => Nothing(),
    chain: f => Nothing(),
    alt: A => A,
    ap: F => Nothing(),
    getOrElse: fallback => fallback
})

const Maybe = { of: Just, empty: Nothing }

export {Just, Nothing}
