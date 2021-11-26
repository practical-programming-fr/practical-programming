import connectToDatabase from '../../../lib/mongodb'

const UserService = async (req,res) => {
  console.log(req.params)
  let user
  if (req.method === 'GET' && req.query.auth_id) {
    const {auth_id} = req.query
    user = await getUser(auth_id)
    console.log(user)
  }
  if (req.method === 'PATCH' && req.query.auth_id) {
    const {auth_id} = req.query
    const userData = req.body
    user = await updateUser({auth_id},userData)
    console.log(user)
  }
  res.json(user)
  
}

const getUser = async (auth_id) => {
  const client = await connectToDatabase()
  const db = client.db
  const developers = db.collection("developers");
  return developers.find({auth_id}).toArray()
}

const updateUser = async (auth_id, userData) =>  {
  const client = await connectToDatabase()
  const db = client.db
  const developers = db.collection("developers");
  const updatedUser = await developers.findOneAndUpdate(auth_id,{$set:userData})
  return updatedUser
}

export default UserService

