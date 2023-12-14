import fetch from "node-fetch";

export default async function helloAPI(req, res) {
  let data = [];
  let error = "";
  try {
    const res = await fetch(
      `https://www.instagram.com/wrapjekeuken.nl/?__a=1`
    ).then((response) => {
      console.log(response);
    });

    data = await res.json();
  } catch (e) {
    error = e.toString();
  }
  console.log(data);
  res.send(data);
}
