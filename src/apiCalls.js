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
    opening_hours: parkToSave.opening_hours.open_now ? parkToSave.opening_hours.open_now.toString() : 'false',
    photo: parkToSave.photos[0].photo_reference,
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
  return fetch(`https://boneyard-be.herokuapp.com/api/park/create/`, init)
    .then(response => response.json())
    .catch(error => console.error(error))
}

export const getSaved = (email) => {
  return fetch('https://boneyard-be.herokuapp.com/api/park/all/')
    .then(response => response.json())
    .then(data => {
      const userFetchedParks = data.filter(park => {
       return park.email === email
      })
      const convertedParks = userFetchedParks.map(park => {
        return {
          formatted_address: park.address,
          geometry: {
            location: {
              lat: park.lat,
              lng: park.lng
            }
          },
          name: park.name,
          opening_hours: {
            open_now: (park.opening_hours === 'true')
          },
          photos: [{ photo_reference: park.photo }],
          rating: park.rating
        }
      })
      return convertedParks
  })
  .catch(error => console.error(error))
}