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

export const postSaved = (parkToSave) => {
  const convertedPark = {
    name: parkToSave.name,
    formatted_address: parkToSave.formatted_address,
    opening_hours: parkToSave.opening_hours,
    photo: parkToSave.photo,
    rating: parkToSave.rating
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