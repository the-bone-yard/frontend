export const getResults = () => {
  return fetch('https://fe-cors-proxy.herokuapp.com', {
  headers: {
    "Target-URL": "https://boneyard-be.herokuapp.com/api/coordinates=40.560845,-105.094427/"
  }
})
  .then(response => response.json())
  .catch(error => console.error(error))
}

