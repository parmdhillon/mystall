const API_SERVER =
  process.env.NODE_ENV === 'development'
    ? ''
    : 'https://discovered-amenable-island.glitch.me';
export default API_SERVER;
