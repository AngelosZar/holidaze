import { create } from 'zustand';
import { SIGN_IN_URL } from '../components/Constants';

const useAuthStore = create(set => ({
  user: null,
  isAuthenticated: false,
  isLoading: false,
  error: null,

  //   set actions
  // set user
  // log out user
  signin: async (email, password) => {
    set({ isLoading: true });
    // loading spinner
    try {
      const response = await fetch('SIGN_IN_URL', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
      console.log('response', response);
      if (!response.ok) {
        throw new Error('Failed to sign in');
      }

      const data = await response.json();
      set({ user: data.user, isAuthenticated: true, isLoading: false });
      console.log('data', data);
    } catch (error) {
      set({ error: error.message, isLoading: false });
    }
  },

  // register user
  register: async (name, email, password) => {},
  // name is optional

  // log out user\
  logout: async () => {},

  //   init auth proceess check if user is authenticated and logged in
}));

export default useAuthStore;

// {
//     "data": {
//       "name": "my_username",
//       "email": "first.last@stud.noroff.no",
//       "avatar": {
//         "url": "https://img.service.com/avatar.jpg",
//         "alt": "My avatar alt text"
//       },
//       "banner": {
//         "url": "https://img.service.com/banner.jpg",
//         "alt": "My banner alt text"
//       },
//       "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9....",
//       "venueManager": true
//     },
//     "meta": {}
//   }

// Register
// {
//     "name": "my_username", // Required
//     "email": "first.last@stud.noroff.no", // Required
//     "password": "UzI1NiIsInR5cCI", // Required
//     "bio": "This is my profile bio", // Optional
//     "avatar": {
//       "url": "https://img.service.com/avatar.jpg", // Optional
//       "alt": "My avatar alt text" // Optional
//     },
//     "banner": {
//       "url": "https://img.service.com/banner.jpg", // Optional
//       "alt": "My banner alt text" // Optional
//     },
//     "venueManager": true // Optional
//   }
