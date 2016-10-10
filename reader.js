export const Reader = run => ({
    map: f => Reader(env => f(run(env))),
    chain: f => Reader(env => f(Reader(run).run(env)).run(env)),
    ap: A => Reader(run).chain(f => A.map(f)),
    run
})
Reader.of = i => Reader(_=>i)
export const ask = Reader(i=>i).map
