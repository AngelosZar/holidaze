import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import returnToken from '../components/utilities/returnToken';
import returnErrors from '../components/utilities/returnErrors';
//
import {
  GET_USER_URL,
  PUT_USER_URL,
  MEDIA_ENDPOINT,
  BOOKINGS_ENDPOINT,
  VENUES_ENDPOINT,
} from '../components/Constants';

import returnHeaders from '../components/utilities/returnHeaders';

const useProfileStore = create(
  (set, get) => ({
    accessToken: returnToken(),
    user: '',
    userName: '',
    // single user
    userData: {
      userName: '',
      email: '',
      bio: '',
      avatarUrl: '',
      avatarAlt: '',
      bannerUrl: '',
      bannerAlt: '',
      venueManager: false,
    },
    //
    // list of users ?
    users: [],
    isLoading: false,
    error: null,

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

    setUserData: userData => {
      set({ userData });
    },

    setIsLoading: isLoading => {
      set({ isLoading });
    },

    setError: error => {
      set({ error });
    },

    getUser: async name => {
      set({ isLoading: true, error: null });
      // loading spinner
      const headers = returnHeaders();

      try {
        const res = await fetch(`${GET_USER_URL}${name}`, {
          method: 'GET',
          headers,
        });
        const { data } = await res.json();
        returnErrors(
          res,
          data,
          set => msg => set({ error: msg }),
          val => set({ isLoading: val })
        );
        return { data };
      } catch (error) {
        // console.log('error', error);
        set({ error: error.message, isLoading: false });
        throw error;
      }
    },
    putProfile: async (name, userInput) => {
      set({ isLoading: true, error: null });
      const headers = returnHeaders();
      console.log('headers', headers);
      // create a function to return an object with it
      // Update or set bio, venueManager, banner and avatar properties.

      try {
        console.log(`PUT_USER_URL${name}`);
        const url = `${PUT_USER_URL}${name}`;
        console.log('url', url);
        const res = await fetch(url, {
          method: 'PUT',
          headers,
          body: JSON.stringify(userInput),
        });
        console.log(res);
        const data = await res.json();
        returnErrors(
          res,
          data,
          set => msg => set({ error: msg }),
          val => set({ isLoading: val })
        );

        // // error handlling
        console.log('data', data);
      } catch (error) {
        console.log('error', error);
        set({ error: error.message, isLoading: false });
        throw error;
      }
    },

    putProfileMedia: async (name, media) => {
      set({ isLoading: true, error: null });
      const headers = returnHeaders();
      try {
        const res = await fetch(`${PUT_USER_URL}${name}${MEDIA_ENDPOINT}`, {
          method: 'PUT',
          headers,
          body: JSON.stringify(media),
        });
        const { data } = await res.json();
        returnErrors(
          res,
          data,
          set => msg => set({ error: msg }),
          val => set({ isLoading: val })
        );
        // error handlling
        console.log('data', data);
      } catch (error) {
        console.log('error', error);
        set({ error: error.message, isLoading: false });
        throw error;
      }
    },
    getProfileVenues: async name => {
      set({ isLoading: true, error: null });
      const headers = returnHeaders();
      try {
        const res = await fetch(`${GET_USER_URL}${name}${VENUES_ENDPOINT}`, {
          method: 'GET',
          headers,
        });
        const data = await res.json();
        console.log('data', data);

        returnErrors(
          res,
          data,
          msg => set({ error: msg }),
          val => set({ isLoading: val })
        );
        set({ isLoading: false });
        return data;
      } catch (error) {
        console.log('error', error);
        set({ error: error.message, isLoading: false });
        throw error;
      }
    },

    getProfileBookings: async userName => {
      set({ isLoading: true, error: null });
      const headers = returnHeaders();
      try {
        const res = await fetch(
          `${GET_USER_URL}${userName}${BOOKINGS_ENDPOINT}`,
          {
            method: 'GET',
            headers,
          }
        );
        const data = await res.json();
        console.log('data', data);

        returnErrors(
          res,
          data,
          msg => set({ error: msg }),
          val => set({ isLoading: val })
        );
        set({ isLoading: false });
        return data;
      } catch (error) {
        console.log('error', error);
        set({ error: error.message, isLoading: false });
        throw error;
      }
    },
  }),

  {
    name: 'profile-storage',
    storage: createJSONStorage(() => sessionStorage),
  }
);

export default useProfileStore;
