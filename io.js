const IO = xf => ({
  map: f => IO(_ => f(xf())),
  chain: f => IO(_=>f(IO(xf).run())),
  ap: A => A.chain(f => IO(xf).map(f)),
  run: xf()
})
IO.of = x => IO(_=>x)
export default IO
