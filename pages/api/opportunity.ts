import axios from 'axios'
import rateLimit from '../../lib/rate-limit'

const limiter = rateLimit({
  interval: 60 * 1000, // 60 seconds
  uniqueTokenPerInterval: 500, // Max 500 users per second
})

export default async function handler(req, res) {
  const { email, firstName, lastName, linkedin, phone, opportunity } = req.body
  const contact = {
    contact: {
      email,
      firstName,
      lastName,
      phone: phone,
      fieldValues: [
        {
          field: '9',
          value: linkedin,
        },
        {
          field: '10',
          value: 'Curieux',
        },
      ],
    },
  }
  try {
    await limiter.check(res, 10, 'CACHE_TOKEN')
    const request = await axios.post('https://rbbm.api-us1.com/api/3/contact/sync', contact, {
      headers: { 'Api-Token': process.env.AC_KEY },
    })
    const { id } = request.data.contact
    Promise.all([
      addActiveCampaignPagesTagToUserId(id),
      addNoteToUser(id, opportunity),
    ]).catch((err) => console.log(err))
  } catch (err) {
    console.log(err)
    res.status(429).json({ error: 'Rate Limit exceeded' })
  }
  res.status(200).send('ok')
}

const addActiveCampaignPagesTagToUserId = async (id) => {
  return axios.post(
    'https://rbbm.api-us1.com/api/3/contactTags',
    {
      contactTag: {
        contact: `${id}`,
        tag: '2',
      },
    },
    {
      headers: { 'Api-Token': process.env.AC_KEY },
    }
  )
}

const addNoteToUser = async (id, note) => {
  return axios.post(
    'https://rbbm.api-us1.com/api/3/notes/',
    {
      note: {
        relid: `${id}`,
        reltype: 'Subscriber',
        note: `A manifesté son intérêt pour ${note}`,
      },
    },
    {
      headers: { 'Api-Token': process.env.AC_KEY },
    }
  )
}
