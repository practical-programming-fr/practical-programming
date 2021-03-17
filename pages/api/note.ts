import axios from 'axios'
import { verifyUser } from './user'

export default async function handler(req, res) {
  const { id, email, message, prefix } = req.body
  console.log(id, email, message)
  if (req.method === 'POST') {
    const userIsVerified = await verifyUser(id, email)
    if (!userIsVerified) {
      res.status(400).end()
    }
    await addNoteToSubscriber(id, message, prefix)
    res.status(200).end()
  } else {
    res.status(400).end()
  }
}

const addNoteToSubscriber = async (id, note, prefix) => {
  let prefixedNote
  if (prefix) {
    prefixedNote = `
      ${prefix}:
      ${note}    
      `
  }
  try {
    await axios.post(
      'https://rbbm.api-us1.com/api/3/notes/',
      {
        note: {
          relid: id,
          reltype: 'Subscriber',
          note: prefixedNote,
        },
      },
      {
        headers: { 'Api-Token': process.env.AC_KEY },
      }
    )
  } catch (err) {
    console.log(err)
  }

  return
}
