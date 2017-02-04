const Right = x => ({
  constructor: Either,
  map: f => Right(f(x)),
  chain: f => f(x),
  ap: F => F.map(f =>f(x)),
  alt: E => Right(x),
  reduce: (f, y) => f(y, x),
  foldMap: (Of, Monoid) => Of(x),
  cata: pattern => pattern.Right(x)
})

const Left = x => ({
  constructor: Either,
  map: Left(x),
  chain: f => Left(x),
  ap: F => Left(x),
  alt: E => E,
  reduce: (f, y) => y,
  foldMap: (Of, Monoid) => Monoid,
  cata: pattern => pattern.Right(x)
})

const Either = {of: Right, empty: Left}
export Either
