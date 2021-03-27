const baseUrl = 'http://localhost:3001/api';

export const getFilms = async (endpoint) => {
  const resp = await fetch(`${baseUrl}/${endpoint}`);
  return await resp.json();
};
