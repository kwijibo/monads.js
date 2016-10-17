const IO = xf => ({
  map: f => IO(_ => f(xf())),
  chain: f => IO(_=>f(IO(xf).run()))
})
IO.of = IO
export default IO
