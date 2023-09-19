import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const setToken = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const delToken = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const signUp = body => {
  return axios.post('/users/signup', body);
};

//   {name: 'Bohdan', email: 'bohdanshveda@gmail.com', password: 'qwerty123'}

export const login = async body => {
  const { data } = await axios.post('/users/login', body);
  setToken(data.token);
  return data;
};

export const logOut = async body => {
  const { data } = await axios.post('/users/logout', body);
  delToken();
  return data;
};

export const getProfile = async () => {
  const { data } = await axios.get('/users/current');
  return data;
};
