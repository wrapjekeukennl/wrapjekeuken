import gemeentes from "../../gemeentes"
export default function helloAPI(req, res) {
  res.status(200).json(gemeentes)
}
