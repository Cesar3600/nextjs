import { ServerResponse } from 'http'
import { NextApiRequest } from 'next'

import DB from '@database'

const anAvo = async (request: NextApiRequest, response: ServerResponse) => {
  const db = new DB()
  const id = request.query.id
  const entry = await db.getById(id as string)
  response.statusCode = 200
  response.setHeader('Content-type', 'application/json')
  response.end(
    JSON.stringify({
      data: entry,
    })
  )
}

export default anAvo
