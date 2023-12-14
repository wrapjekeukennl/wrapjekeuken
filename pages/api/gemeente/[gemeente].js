import gemeentes from "../../../gemeentes"
export default function helloAPI(req, res) {
  const {
    query: { gemeente }
  } = req

  console.log(req.query.gemeente)

  res.status(200).json([req.query.gemeente.toLowerCase()])
}
