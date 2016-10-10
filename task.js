export const Task = fork => ({
   map: f => Task((reject, resolve)=>{ fork(reject, x => { resolve(f(x)) })  }),
   chain: f => Task((reject, resolve)=>{ fork(reject, x => { f(x).fork(reject, resolve) })  }),
   join: () => Task(fork).chain(i=>i),
   ap: A => A.map(a => Task(fork).map(f => f(a))).join(),
   fork
})
Task.of = x => Task((_,resolve)=>{ resolve(x)})
