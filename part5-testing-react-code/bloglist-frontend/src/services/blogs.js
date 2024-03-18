import axios from 'axios'
const baseUrl = '/api/blogs/'

const getAll = async () => {
  const request = axios.get(baseUrl)
  return (await request).data
}

let token = null;

const setToken = newToken => {
  token = 'Bearer ' + newToken
}

const create = async newObject => {
  const config = {
    headers: { Authorization: token },
  }
  const response = await axios.post(baseUrl, newObject, config)
  return response.data
}
export default { getAll, setToken, create}