import { IncomingMessage, ServerResponse } from 'http'

import DB from '@database'

const allAvo = async (request: IncomingMessage, resolve: ServerResponse) => {
  const db = new DB()
  const allEntries = await db.getAll()
  const quantity = allEntries.length
  resolve.statusCode = 200
  resolve.setHeader('Content-type', 'application/json')
  resolve.end(JSON.stringify({ quantity, msg: allEntries }))
}

export default allAvo
