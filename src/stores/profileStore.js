import { create } from 'zustand';
//
import { GET_USER_URL } from '../components/Constants';
// import PUT_USER_URL from '../components/Constants';
//
// import returnToken from '../components/utilities/returnToken';
// import returnUser from '../components/utilities/returnUser';
import returnHeaders from '../components/utilities/returnHeaders';
// holidaze-profiles
// Holidaze profiles related endpoints

// GET
// /api/v1/holidaze/profiles

// GET
// /api/v1/holidaze/profiles/{name}

// PUT
// /api/v1/holidaze/profiles/{name}

// PUT
// /api/v1/holidaze/profiles/{name}/media

// GET
// /api/v1/holidaze/profiles/{name}/venues

// GET
// /api/v1/holidaze/profiles/{name}/bookings
const useProfileStore = create(set => ({
  accessToken: '',
  user: '',
  userName: '',
  users: [],
  isLoading: false,
  error: null,
  //

  // maybe use for all and single user

  getUserName: userData => {
    return userData?.name || '';
  },

  getUser: async (name = '') => {
    // profileStore.js:63 Uncaught (in promise) Error: No API key header was found
    // at getUser (profileStore.js:63:17)
    set({ isLoading: true, error: null });
    // loading spinner
    const headers = returnHeaders();
    try {
      const res = await fetch(`${GET_USER_URL}${name}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          ...headers.headers,
        },
      });
      const data = await res.json();
      console.log('data', data);
      //
      if (!res.ok) {
        if (data.errors && Array.isArray(data.errors)) {
          const error = data.errors[0];
          set({ error: error.message, isLoading: false });
          alert(`${error.message}`);
          throw new Error(error.message);
        }
      }
      //   error handling

      set({ isLoading: false });

      return data;
    } catch (error) {
      console.log('error', error);
      set({ error: error.message, isLoading: false });
      throw error;
    }
  },
}));

export default useProfileStore;
