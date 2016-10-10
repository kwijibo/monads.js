const Identity = x => ({
  map: f => Identity(f(x)),
  ap: A => A.map(x),
  chain: f => f(x)
})
Identity.of = Identity
export default Identity
