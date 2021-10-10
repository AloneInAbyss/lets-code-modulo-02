async function parseSubwayInfo(link) {
  const response = await fetchSubwayInfo(link);
  const stations = response.estacoes.estacao;
  const lines = getStationsLines(stations);
  const parsedStations = parseStations(stations, lines);
  return parsedStations;
}

async function fetchSubwayInfo(link) {
  const data = await fetch(link);
  const response = await data.json();
  return response;
}

function getStationsLines(stations) {
  const lines = stations.reduce((acc, cur) => {
    const lineName = checkLineName(cur);
    return acc.add(lineName);
  }, new Set([]));
  return lines;
}

function checkLineName(station) {
  const lineNameArray = station["_linha"].split("-");
  const lineNumber = lineNameArray[0];
  if (lineNameArray.length > 1) {
    let lineName = lineNameArray[1].split(" ");
    lineName = lineName[0].split("-");
    return `${lineNumber}-${lineName[0]}`;
  }
  return lineNumber;
}

function parseStations(stations, lines) {
  const response = Object.assign(
    ...Array.from(lines, (value) => ({ [value]: [] }))
  );
  return stations.reduce((acc, cur) => {
    const lineName = checkLineName(cur);
    response[lineName].push(cur);
    return response;
  }, response);
}

parseSubwayInfo(
  "https://private-3923c4-santandercoders809.apiary-mock.com/stations"
).then((response) => console.log(response));
