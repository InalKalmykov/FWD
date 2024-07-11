// pages/api/xkcd.js

export default async function handler(req, res) {
  const response = await fetch('https://xkcd.com/info.0.json');
  const data = await response.json();

  res.status(200).json(data);
}
