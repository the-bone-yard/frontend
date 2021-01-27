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
    photo: parkToSave.photos[0].photo_reference || 'no-photo',
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

  return fetch(`https://boneyard-rails.herokuapp.com/api/v1/park/`, init)
    .then(response => response.json())
    .catch(error => console.error(error))
}

export const getSaved = (email) => {
  return fetch('https://boneyard-rails.herokuapp.com/api/v1/park/all/')
    .then(response => response.json())
    .then(data => {
      const userFetchedParks = data.data.filter(park => {
       return park.attributes.email === email
      })
      const convertedParks = userFetchedParks.map(park => {
        return {
          formatted_address: park.attributes.formatted_address,
          geometry: {
            location: {
              lat: park.attributes.lat,
              lng: park.attributes.lng
            }
          },
          name: park.attributes.name,
          opening_hours: {
            open_now: (park.attributes.opening_hours === 'true')
          },
          photos: [{ photo_reference: park.attributes.photo }],
          rating: parseInt(park.attributes.rating)
        }
      })
      return convertedParks
  })
  .catch(error => console.error(error))
}

export const getDirections = (myCoords, parkCoords) => {
  return fetch(`https://boneyard-rails.herokuapp.com/api/v2/directions/?current=${myCoords.coords.latitude},${myCoords.coords.longitude}&to=${parkCoords.lat},${parkCoords.lng}&api_key=${process.env.VUE_APP_DIRECTIONS_API_KEY}`)
  .then(res => res.json())
  .catch(err => console.error(err))
}
