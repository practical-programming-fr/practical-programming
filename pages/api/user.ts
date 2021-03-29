import axios from 'axios'

export const verifyUser = async (id, email) => {
  try {
    const contact = await axios.get(`https://rbbm.api-us1.com/api/3/contacts/${id}`, {
      headers: { 'Api-Token': process.env.AC_KEY },
    })
    return contact.data.contact.email === email
  } catch (err) {
    return false
  }
}
