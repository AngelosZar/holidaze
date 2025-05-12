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
    sortOrder: 'desc', // default sort order or asc
    setIsLoading: isLoading => set({ isLoading }),
    setError: error => set({ error }),
    setSingleVenue: singleVenue => set({ singleVenue }),

    getVenues: async (
      sort = '',
      limit = 6,
      offset = 1,
      owner = true,
      bookings = true
    ) => {
      // https://api.noroff.dev/api/v1/holidaze/venues?limit=1&offset=1&_owner=true&_bookings=true
      try {
        set({ isLoading: false });
        // let url = `${VENUES_URL}&_owner=${owner}&_bookings=${bookings}`;
        const url = `${VENUES_URL}?sort=${sort}&limit=${limit}&offset=${offset}&_owner=${owner}&_bookings=${bookings}`;
        const res = await fetch(url, {
          method: 'GET',
          headers: returnHeaders(),
        });
        const data = await res.json();
        // console.log('data', data);
        set({ venues: data });
        // or maybe not set the venues here ...
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
        console.log('error', error);
      }
    },

    getVenue: async (id, owner = true, bookings = false) => {
      set({ isLoading: true });
      try {
        const res = await fetch(
          `${VENUES_URL}/${id}?_owner=${owner}&_bookings=${bookings}`,
          {
            method: 'GET',
          }
        );
        const data = await res.json();
        // console.log('data', data);
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
        console.log('error:', error);
        set({ error: error });
      }
    },
    // create a venueData object for api call
    postVenue: async (venueData, owner = true, bookings = true) => {
      set({ isLoading: true });
      console.log('venueData', venueData);
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
        console.log('data', data);
        console.log('res', res);
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
        // console.log('data', data);
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
        // const data = await res.json();
        // returnErrors(
        //   res,
        //   data,
        //   set => msg => set({ error: msg }),
        //   val => set({ isLoading: val })
        // );

        set({ isLoading: false });
      } catch (error) {
        console.log('error:', error);
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
        // console.log('search data', data);
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
        console.log('error:', error);
        set({ error: error });
      }
    },
  }))
);
export default useVenueStore;

// venueData post
// {
//     "name": "string", // Required
//     "description": "string", // Required
//     "media": [
//       {
//         "url": "https://url.com/image.jpg",
//         "alt": "string"
//       }
//     ], // Optional
//     "price": 0, // Required
//     "maxGuests": 0, // Required
//     "rating": 0, // Optional (default: 0)
//     "meta": {
//       "wifi": true, // Optional (default: false)
//       "parking": true, // Optional (default: false)
//       "breakfast": true, // Optional (default: false)
//       "pets": true // Optional (default: false)
//     },
//     "location": {
//       "address": "string", // Optional (default: null)
//       "city": "string", // Optional (default: null)
//       "zip": "string", // Optional (default: null)
//       "country": "string", // Optional (default: null)
//       "continent": "string", // Optional (default: null)
//       "lat": 0, // Optional (default: 0)
//       "lng": 0 // Optional (default: 0)
//     }
//   }
// venuedata put
// {
//     "name": "string", // Optional
//     "description": "string", // Optional
//     "media": [
//       {
//         "url": "https://url.com/image.jpg",
//         "alt": "string"
//       }
//     ], // Optional
//     "price": 0, // Optional
//     "maxGuests": 0, // Optional
//     "rating": 0, // Optional
//     "meta": {
//       "wifi": true, // Optional
//       "parking": true, // Optional
//       "breakfast": true, // Optional
//       "pets": true // Optional
//     },
//     "location": {
//       "address": "string", // Optional
//       "city": "string", // Optional
//       "zip": "string", // Optional
//       "country": "string", // Optional
//       "continent": "string", // Optional
//       "lat": 0, // Optional
//       "lng": 0 // Optional
//     }
//   }
