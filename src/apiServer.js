const API_SERVER =
  process.env.NODE_ENV === 'development'
    ? ''
    : 'https://mystall-backend-7q29l.ondigitalocean.app';
export default API_SERVER;
