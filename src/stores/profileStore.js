import { create } from 'zustand';
import { createJSONStorage } from 'zustand/middleware';
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
        set({ error: error.message, isLoading: false });
        throw error;
      }
    },
    putProfile: async (name, userInput) => {
      set({ isLoading: true, error: null });
      const headers = returnHeaders();

      try {
        const url = `${PUT_USER_URL}${name}`;

        const res = await fetch(url, {
          method: 'PUT',
          headers,
          body: JSON.stringify(userInput),
        });

        const data = await res.json();
        returnErrors(
          res,
          data,
          set => msg => set({ error: msg }),
          val => set({ isLoading: val })
        );
      } catch (error) {
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
      } catch (error) {
        set({ error: error.message, isLoading: false });
        throw error;
      }
    },
    getProfileVenues: async (name, owner = true, bookings = true) => {
      set({ isLoading: true, error: null });
      const headers = returnHeaders();
      try {
        const res = await fetch(
          `${GET_USER_URL}${name}${VENUES_ENDPOINT}?_owner=${owner}&_bookings=${bookings}`,
          {
            method: 'GET',
            headers,
          }
        );
        const data = await res.json();

        returnErrors(
          res,
          data,
          msg => set({ error: msg }),
          val => set({ isLoading: val })
        );
        set({ isLoading: false });
        return data;
      } catch (error) {
        set({ error: error.message, isLoading: false });
        throw error;
      }
    },

    getProfileBookings: async (userName, owner = true, bookings = true) => {
      set({ isLoading: true, error: null });
      const headers = returnHeaders();
      try {
        const res = await fetch(
          `${GET_USER_URL}${userName}/${BOOKINGS_ENDPOINT}?_owner=${owner}&_bookings=${bookings}`,
          {
            method: 'GET',
            headers,
          }
        );
        const data = await res.json();

        returnErrors(
          res,
          data,
          msg => set({ error: msg }),
          val => set({ isLoading: val })
        );
        set({ isLoading: false });
        return data;
      } catch (error) {
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
