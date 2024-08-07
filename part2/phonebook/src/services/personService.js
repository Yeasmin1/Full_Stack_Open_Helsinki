import axios from 'axios'
const baseUrl = 'http://localhost:3001/api/persons'
// Here, We no longer return the promise returned by axios directly. 
//Instead, we assign the promise to the request variable 
//and call its then method:
const getAll = () => {
  const request = axios.get(baseUrl)
  
  return request.then(response => response.data)
}

const create = newObject => {
  const request = axios.post(baseUrl, newObject)
  return request.then(response => response.data)
}

const update = (id, newObject) => {
  const request = axios.put(`${baseUrl}/${id}`, newObject)
  return request.then(response => response.data)  
}

const remove = (id) => {
    const request = axios.delete(`${baseUrl}/${id}`)
return request.then(respone => respone.data) 
}

export default { getAll, create, update, remove}

