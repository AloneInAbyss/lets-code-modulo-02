async function getData(link) {
  const data = await fetch(link)
  const response = await data.json()
  console.log(response)
}

getData('https://private-3923c4-santandercoders809.apiary-mock.com/stations')
