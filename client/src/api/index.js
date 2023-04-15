import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
});

export const sendMessage = async (message) => {
  const response = await instance.post('/api/chat', { message });
  return response.data;
};
