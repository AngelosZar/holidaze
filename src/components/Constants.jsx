export const BASE_URL = 'https://v2.api.noroff.dev/';
export const SIGN_IN_URL = `${BASE_URL}auth/login`;
export const REGISTER_URL = `${BASE_URL}auth/register`;
export const GET_USER_URL = `${BASE_URL}holidaze/profiles/`;
export const PUT_USER_URL = `${BASE_URL}holidaze/profiles/`;

export const MEDIA_ENDPOINT = `/media`;
export const VENUES_ENDPOINT = `/venues`;
export const BOOKINGS_ENDPOINT = `bookings`;

export const VENUES_URL = `${BASE_URL}holidaze/venues`;
export const BOOKINGS_URL = `${BASE_URL}holidaze/bookings`;

export const AUTH_GET_API_KEY_URL = `${BASE_URL}auth/create-api-key`;

export const API_KEY = import.meta.env.VITE_API_KEY;
