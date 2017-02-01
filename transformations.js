const maybeToType = T => M => M.map(T.of).getOrElse(T.empty())
//=> maybeToType(Task)(Just(3)) //Task.of(3)
//=> maybeToType(Task)(Nothing) //Task.empty()




export {maybeToType}
