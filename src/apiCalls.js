export const getResults = (coords) => {
  return fetch(`https://boneyard-be.herokuapp.com/api/coordinates=${coords.latitude},${coords.longitude}`)
    .then(response => response.json())
    .catch(error => console.error(error))
}

export const getSearch = (searchTerm) => {
  return fetch(`https://boneyard-be.herokuapp.com/api/coordinates=${searchTerm}`)
    .then(response => response.json())
    .catch(error => console.error(error))
}

export const getDirections = (myCoords, parkCoords) => {
  return fetch(`https://boneyard-be.herokuapp.com/api/current=${myCoords.latitude},${myCoords.longitude}/to=${parkCoords.lat},${parkCoords.lng}`)
  .then(res => res.json())
  .catch(err => console.error(err))
}
