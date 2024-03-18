import axios from 'axios'
const baseURL = '/api/users/'

let token = null
const setToken = (newToken) => {
   token = `Bearer ${newToken}`
}

const getSpesificUser = async () => {
  const request =  axios.get(baseURL+token)
  return  (await request).data
}
export default {setToken,getSpesificUser}