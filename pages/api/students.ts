export default function handler(req, res) {
  if (req.method === 'POST') {
    res.end()
  } else {
    res.status(200).end()
  }
}
