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
    sortOrder: 'desc',
    setIsLoading: isLoading => set({ isLoading }),
    setError: error => set({ error }),
    setSingleVenue: singleVenue => set({ singleVenue }),
    clearSingleVenue: () => set({ singleVenue: {} }),
    getVenues: async (
      sort = '',
      limit = 6,
      offset = 1,
      owner = true,
      bookings = true
    ) => {
      try {
        set({ isLoading: false });

        const url = `${VENUES_URL}?sort=${sort}&limit=${limit}&offset=${offset}&_owner=${owner}&_bookings=${bookings}`;
        const res = await fetch(url, {
          method: 'GET',
        });
        const data = await res.json();

        set({ venues: data });

        returnErrors(
          res,
          data,
          msg => set({ error: msg }),
          val => set({ isLoading: val })
        );
        set({ isLoading: false });
        return data;
      } catch (error) {
        set({ error: error });
      }
    },

    getVenue: async (id, owner = true, bookings = true) => {
      set({ isLoading: true });
      try {
        const res = await fetch(
          `${VENUES_URL}/${id}?_owner=${owner}&_bookings=${bookings}`,
          {
            method: 'GET',
          }
        );
        const data = await res.json();
        set({ singleVenue: data.data });
        returnErrors(
          res,
          data,
          msg => set({ error: msg }),
          val => set({ isLoading: val })
        );
        set({ isLoading: false });
        return data;
      } catch (error) {
        set({ error: error });
      }
    },

    postVenue: async (venueData, owner = true, bookings = true) => {
      set({ isLoading: true });

      const headers = returnHeaders();
      try {
        const res = await fetch(
          `${VENUES_URL}?_owner=${owner}&_bookings=${bookings}`,
          {
            method: 'POST',
            headers,
            body: JSON.stringify(venueData),
          }
        );
        const data = await res.json();

        returnErrors(
          res,
          data,
          set => msg => set({ error: msg }),
          val => set({ isLoading: val })
        );
        set({ isLoading: false });
        return data;
      } catch (error) {
        set({ error: error });
      }
    },

    putVenue: async (id, venueData) => {
      set({ isLoading: true });
      try {
        const res = await fetch(`${VENUES_URL}/${id}`, {
          method: 'PUT',
          headers: returnHeaders(),
          body: JSON.stringify(venueData),
        });
        const data = await res.json();

        returnErrors(
          res,
          data,
          set => msg => set({ error: msg }),
          val => set({ isLoading: val })
        );
        set({ isLoading: false });
        return data;
      } catch (error) {
        set({ error: error });
      }
    },
    deleteVenue: async id => {
      set({ isLoading: true });
      try {
        await fetch(`${VENUES_URL}/${id}`, {
          method: 'DELETE',
          headers: returnHeaders(),
        });

        set({ isLoading: false });
      } catch (error) {
        set({ error: error });
      }
    },
    searchVenues: async (
      query,
      limit = 6,
      offset = 1,
      owner = true,
      bookings = true
    ) => {
      set({ isLoading: true });
      try {
        const res = await fetch(
          `${VENUES_URL}/search?q=${query}&limit=${limit}&offset=${offset}&_owner=${owner}&_bookings=${bookings}`,
          {
            method: 'GET',
          }
        );

        const data = await res.json();

        set({ venues: data });
        returnErrors(
          res,
          data,
          set => msg => set({ error: msg }),
          val => set({ isLoading: val })
        );
        set({ isLoading: false });
        return data;
      } catch (error) {
        set({ error: error });
      }
    },
  }))
);
export default useVenueStore;
