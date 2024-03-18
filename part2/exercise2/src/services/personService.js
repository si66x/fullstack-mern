import axios from "axios";
const baseUrl = "http://localhost:3001/api/persons";

const getAllData = () => {
  const request = axios.get(baseUrl);
  return request;
};

const createData = (newObj) => {
  const request = axios.post(baseUrl, newObj);
  return request;
};

const updateData = (id, newObj) => {
  const request = axios.put(`${baseUrl}/${id}`, newObj);
  return request;
};

const deleteData = (id) => {
  const request = axios.delete(`${baseUrl}/${id}`);
  return request;
};
const dataService = {
  getAllData,
  createData,
  updateData,
  deleteData,
};
export default dataService;
