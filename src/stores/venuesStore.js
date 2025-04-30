import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { VENUES_URL } from '../components/Constants';
import returnHeaders from '../components/utilities/returnHeaders';
import returnErrors from '../components/utilities/returnErrors';

const useVenueStore = create(
  persist(set => ({
    singleVenue: {},
    venues: [],
    isLoading: false,
    error: null,
    setIsLoading: isLoading => set({ isLoading }),
    setError: error => set({ error }),

    getVenues: async (
      //   sort = '',
      //   sortOrder = '',
      limit = 6,
      offset = 1,
      owner = true,
      bookings = true
    ) => {
      // https://api.noroff.dev/api/v1/holidaze/venues?limit=1&offset=1&_owner=true&_bookings=true
      try {
        set({ isLoading: false });
        // let url = `${VENUES_URL}&_owner=${owner}&_bookings=${bookings}`;
        let url = `${VENUES_URL}?limit=${limit}&offset=${offset}&_owner=${owner}&_bookings=${bookings}`;
        const res = await fetch(url, {
          method: 'GET',
          headers: returnHeaders(),
        });
        const data = await res.json();
        console.log('data', data);
        set({ venues: data });
        // or maybe not set the venues here ...
        returnErrors(
          res,
          data,
          set => msg => set({ error: msg }),
          val => set({ isLoading: val })
        );
        set({ isLoading: false });
        return data;
      } catch (error) {
        set({ error: returnErrors(error) });
        console.log('error', error);
      }
    },

    getVenue: async id => {
      set({ isLoading: true });
      try {
        const res = await fetch(`${VENUES_URL}/${id}`, {
          method: 'GET',
          headers: returnHeaders(),
        });
        const data = await res.json();
        console.log('data', data);
        set({ singleVenue: data });
        returnErrors(
          res,
          data,
          set => msg => set({ error: msg }),
          val => set({ isLoading: val })
        );
        set({ isLoading: false });
        return data;
      } catch (error) {
        console.log('error:', error);
        set({ error: returnErrors(error) });
      }
    },
    // postVenue: async () => {},
    // putVenue: async () => {},
    // deleteVenue: async () => {},
  }))
);
export default useVenueStore;
