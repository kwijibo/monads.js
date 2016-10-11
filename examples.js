import {Reader, ask} from './reader.js'
import Identity from './identity.js'
import Task from './task.js'
import R from 'ramda'


//Reader monad is used for dependency injection. Instead of hardcoding the dependencies, or passing them in at the beginning,
//it lets us return an object (ie, a reader monad) to which we can either supply the dependencies and run the program, or
// compose in another function in the sequence. And keep doing so, until we decide to supply the dependencies.

const dbRead = id => ask(({read} ) => read(id))
const dbWrite = record => ask(({write}) => write(record))

dbRead(1)
 .map(R.assoc('password', 'swordfish'))
 .chain(dbWrite)
 .run({ //can replace these functions with ones that make database calls
  read: x => ({id: 1}),
  write: x => (["Saved", x])
}) //=> ["Saved", {"id": 1, "password": "swordfish"}]

