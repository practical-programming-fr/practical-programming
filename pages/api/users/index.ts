import connectToDatabase from '../../../lib/mongodb'

const UsersService = async (req,res) => {
  console.log(req)
  let users
  console.log(req.method)
  if (req.method === 'GET') {
    console.log(req.params)
    users = await getUsers()
    console.log(users)
  }
  if (req.method === 'PATCH') {
    console.log(req.params)
    users = await getUsers()
    console.log(users)
  }
  res.json(users)
  
}

const getUsers = async () => {
  const client = await connectToDatabase()
  const db = client.db
  const developers = db.collection("developers");
  return developers.find().toArray()
}

export default UsersService

