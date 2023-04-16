import axios from 'axios';

const instance = axios.create({
  baseURL: '',
});

export const sendMessage = async (message) => {
  const response = await instance.post('/api/chat', { message });
  return response.data;
};
