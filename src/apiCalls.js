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

export const postSaved = (parkToSave, email) => {
  const convertedPark = {
    name: parkToSave.name,
    formatted_address: parkToSave.formatted_address,
    opening_hours: parkToSave.opening_hours.open_now.toString(),
    photo: parkToSave.photo,
    rating: parkToSave.rating.toString(),
    email: email,
    lat: parkToSave.geometry.location.lat,
    lng: parkToSave.geometry.location.lng,
  }
  const init = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(convertedPark)
  };
  return fetch(`https://boneyard-be.herokuapp.com/api/park/create`, init)
    .then(response => response.json())
    .catch(error => console.error(error))
}

export const getSaved = () => {
  // return fetch(SavedParksEndPoint)
    // .then(response => response.json())
    // .catch(error => console.error(error))
}