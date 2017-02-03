const Task = fork => ({
   map: f => Task((reject, resolve)=>{ fork(reject, x => { resolve(f(x)) })  }),
   chain: f => Task((reject, resolve)=>{ fork(reject, x => { f(x).fork(reject, resolve) })  }),
   join: () => Task(fork).chain(i=>i),
   ap: A => A.map(a => Task(fork).map(f => f(a))).join(),
   concat: B => resolveFirst(Task(fork), B),
   fork
})

const resolveFirst = (A, B) => Task((reject, resolve) => {
   var done = false
   const guard = f => x => {
     if(!done){
       done = true
       f(x)
     }
   }
   A.fork(guard(reject), guard(resolve))
   B.fork(guard(reject), guard(resolve))
})
Task.of = x => Task((_,resolve)=>{ resolve(x)})
Task.empty = () => Task(()=>{})
export default Task
