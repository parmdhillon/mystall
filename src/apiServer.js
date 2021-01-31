const API_SERVER =
  process.env.NODE_ENV === 'development'
    ? ''
    : 'https://mystall.herokuapp.com';
export default API_SERVER;
