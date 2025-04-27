import { create } from 'zustand';
//
import { GET_USER_URL } from '../components/Constants';
// import PUT_USER_URL from '../components/Constants';
//
// import returnToken from '../components/utilities/returnToken';
// import returnUser from '../components/utilities/returnUser';
// import returnHeaders from '../components/utilities';
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

  // maybe use for all and single user

  getUserNameFromStorage: () => {
    const userFromStorage =
      localStorage.getItem('user') || sessionStorage.getItem('user');
    if (userFromStorage) {
      try {
        const userData = JSON.parse(userFromStorage);
        if (userData && userData.name) {
          set({ userName: userData.name });
          return userData.name;
        }
      } catch (error) {
        set({ error: 'Error parsing user data from storage' });
        console.error('Error parsing user data from storage:', error);
      }
    }
    return null;
  },

  getUser: async (name = '') => {
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
      // console.log('data', data);
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
