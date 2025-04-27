import { API_KEY } from '../Constants';

const returnHeaders = function () {
  const accessToken =
    localStorage.getItem('accessToken') ||
    sessionStorage.getItem('accessToken');
  if (!accessToken) {
    throw new Error('No access token found');
  }
  return {
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'X-Noroff-API-Key': API_KEY,
    },
  };
};
export default returnHeaders;
