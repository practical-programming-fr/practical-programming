import {connectToDatabase} from '../../../lib/mongodb'

const UsersService = async (req,res) => {
  let users
  console.log(req.query)
  const offset = req.query.page ? Number(req.query?.page*10) : 0
  console.log(offset)
  if (req.method === 'GET') {
    users = await getEntreprises(offset)

  }
  res.json(users)
}

const getEntreprises = async (skip:number = 0) => {
  const {db} = await connectToDatabase()
  const companies = db.collection("companies");
  return companies.find().skip(skip).limit(10).toArray()
}

export default UsersService