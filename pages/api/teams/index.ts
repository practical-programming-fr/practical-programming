import {connectToDatabase} from '../../../lib/mongodb'

const TeamsService = async (req,res) => {
  let teams

  const offset = req.query.page ? Number(req.query?.page*10) : 0
  const search = req.query.q
  console.log(req.query)
  if (req.method === 'GET' && search) {
    console.log("in search")
    teams = await findTeam(search, offset)
  } else if (req.method === 'GET') {
    teams = await getEntreprises(offset)
  }
  res.json(teams)
}

const getEntreprises = async (skip:number = 0) => {
  const {db} = await connectToDatabase()
  const teams = db.collection("teams");
  return teams.find().skip(skip).limit(10).toArray()
}

const findTeam = async (query: string | undefined ,skip:number = 0) => {
  console.log(query)
  const {db} = await connectToDatabase()
  const teams = db.collection("teams");
  const result = await teams.aggregate([
    {
      $search:{
        autocomplete: {
          path: "company.name",
          query
        }
      }
    }
  ]).skip(skip).limit(10).toArray()
  console.log(result)
  return result
}

export default TeamsService