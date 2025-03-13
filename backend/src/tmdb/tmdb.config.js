const baseUrl = process.env.TMDB_BASE_URL;
const key = process.env.TMDB_KEY;

const getUrl = (endpoint, params) => {
  const qs = new URLSearchParams({ ...params, language: 'pt-BR' });

  return `${baseUrl}${endpoint}?api_key=${key}&${qs}`;
};

export default { getUrl };