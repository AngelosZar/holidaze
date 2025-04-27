import returnToken from './returnToken';
import { AUTH_GET_API_KEY_URL } from '../Constants';

export async function getApiKey(userCredentials) {
  try {
    const accessToken = returnToken();
    const res = await fetch(AUTH_GET_API_KEY_URL, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify({ userCredentials }),
    });
    const data = await res.json();
    console.log('data', data);
    // set on local storage or session storage or .env file
    if (!res.ok) {
      if (data.errors && Array.isArray(data.errors)) {
        const error = data.errors[0];
        throw new Error(error.message);
      }
      throw new Error('Failed to fetch API key');
    }
  } catch (error) {
    console.error('Error fetching API key:', error);
    throw error;
  }
}
