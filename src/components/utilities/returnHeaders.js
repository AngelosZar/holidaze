import { API_KEY } from '../Constants';
// const options = {
//   headers: {
//     Authorization: `Bearer ${accessToken}`,
//     'X-Noroff-API-Key': apiKey.data.key,
//   },
// };
const returnHeaders = function () {
  //
  // local storage or session storage
  const accessToken =
    localStorage.getItem('accessToken') ||
    sessionStorage.getItem('accessToken');
  if (!accessToken) {
    throw new Error('No access token found');
  }
  // api key from .env file
  return {
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'X-Noroff-API-Key': API_KEY,
    },
  };
};
export default returnHeaders;
// {
//     "data": {
//       "name": "My API Key name", // Or "API Key" if no name was provided
//       "status": "ACTIVE",
//       "key": "be4ab55c-d5b0-44c3-8a11-67a7dafddd10" // The API Key
//     },
//     "meta": {}
// //   }
