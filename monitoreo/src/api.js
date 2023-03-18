import axios from 'axios';

const API_URL = "http://localhost:3000";

export function getData() {
  return axios
    .get(`${API_URL}/monitoreo`)
    .then((response) => response.data)
    .catch((error) => console.log(error));
}

