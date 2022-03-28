import connectToDatabase from "../../../lib/mongodb"

const findTeam = async (query:string, skip:number = 0) => {
  const {db} = await connectToDatabase()
  const teams = db.collection("teams");
  return teams.aggregate([
    {
      $search:{
        autocomplete: {
          path: "company.name",
          query
        }
      }
    }
  ]).skip(skip).limit(10).toArray()
}

export default findTeam