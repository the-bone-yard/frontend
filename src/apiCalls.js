export const getResults = (coords) => {
  return fetch(`https://boneyard-be.herokuapp.com/api/coordinates=${coords.latitude},${coords.longitude}`)
    .then(response => response.json())
    .catch(error => console.error(error))
}

//If we need a proxy, here is the function we should use: 

// export const getPhoto = (reference) => {
//   return fetch('https://fe-cors-proxy.herokuapp.com', {
//     headers: {
//       "Target-URL": `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${reference}&key=${process.env.VUE_APP_GOOGLE_MAPS_API_KEY}`
//     }
//   })
//   .catch(err => console.error(err))
// }

export const getSearch = (searchTerm) => {
  return fetch(`https://boneyard-be.herokuapp.com/api/coordinates=${searchTerm}`)
    .then(response => response.json())
    .catch(error => console.error(error))
}

export const getPhoto = (reference) => {
  return fetch(`https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${reference}&key=${process.env.VUE_APP_GOOGLE_MAPS_API_KEY}`)
  .catch(err => console.error(err))
}
