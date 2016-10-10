import {Reader, ask} from './reader.js'
import Identity from './identity.js'
import Task from './task.js'

const dbRead = id => ask(({read} ) => read(id))
const dbWrite = record => ask(({write}) => write(record))

dbRead(1)
 .map(R.assoc('password', 'swordfish'))
 .chain(dbWrite)
 .run({
  read: x => ({id: 1}),
  write: x => (["Saved", x])
}) //=> ["Saved", {"id": 1, "password": "swordfish"}]

