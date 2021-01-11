export const getResults = (coords) => {
  return fetch(`https://boneyard-be.herokuapp.com/api/coordinates=${coords.latitude},${coords.longitude}`)
    .then(response => response.json())
    .catch(error => console.error(error))
}

export const getPhoto = (reference) => {
  return fetch(`https://maps.googleapis.com/maps/api/place/photo?photoreference=${reference}&key=${process.env.VUE_APP_GOOGLE_MAPS_API_KEY}`)
  .then(res => res.json())
  .catch(err => console.error(err))
}