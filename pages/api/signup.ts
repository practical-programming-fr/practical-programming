import axios from 'axios'

export default async function handler(req, res) {
  const { email, firstName, tagId } = req.body
  const contact = {
    contact: {
      email,
      firstName,
    },
  }
  try {
    const request = await axios.post('https://rbbm.api-us1.com/api/3/contact/sync', contact, {
      headers: { 'Api-Token': process.env.AC_KEY },
    })
    const { id } = request.data.contact
    Promise.all([addActiveCampaignPagesTagToUser(id), addCustomTagToUser(id, tagId)]).catch((err) =>
      console.log(err)
    )
  } catch (err) {
    console.log(err)
  }
  res.status(200).send('ok')
}

const addActiveCampaignPagesTagToUser = async (id) => {
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

const addCustomTagToUser = async (id, tagId) => {
  return axios.post(
    'https://rbbm.api-us1.com/api/3/contactTags',
    {
      contactTag: {
        contact: `${id}`,
        tag: `${tagId}`,
      },
    },
    {
      headers: { 'Api-Token': process.env.AC_KEY },
    }
  )
}
