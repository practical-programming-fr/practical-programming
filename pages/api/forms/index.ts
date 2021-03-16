import axios from 'axios'

export default async function handler(req, res) {
  const userId = req.body.id
  const userEmail = req.body.email
  if (req.method === 'POST') {
    const userIsVerified = await verifyUser(userId, userEmail)
    if (!userIsVerified) {
      res.status(400).end()
    }
    await applyTags(req.body.id, req.body.tags)
    res.status(200).end()
  } else {
    res.status(400).end()
  }
}

const verifyUser = async (id, email) => {
  try {
    const contact = await axios.get(`https://rbbm.api-us1.com/api/3/contacts/${id}`, {
      headers: { 'Api-Token': process.env.AC_KEY },
    })
    return contact.data.contact.email === email
  } catch (err) {
    return false
  }
}

const applyTags = async (id, tags) => {
  const requests = tags.map((tag) =>
    axios.post(
      'https://rbbm.api-us1.com/api/3/contactTags/',
      {
        contactTag: {
          contact: id,
          tag,
        },
      },
      {
        headers: { 'Api-Token': process.env.AC_KEY },
      }
    )
  )
  await Promise.allSettled(requests)
  return
}
