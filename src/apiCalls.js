export const getResults = (coords) => {
  return fetch('https://fe-cors-proxy.herokuapp.com', {
  headers: {
    "Target-URL": `https://boneyard-be.herokuapp.com/api/coordinates=${coords.latitude},${coords.longitude}`
  }
})
  .then(response => response.json())
  .catch(error => console.error(error))
}