import { create } from 'zustand';
import useVenueStore from './venuesStore';

const createVenueStore = create((set, get) => ({
  venueData: {
    name: '',
    description: '',
    media: [],
    price: 0,
    maxGuests: 6,
    rating: 5,
    meta: {
      wifi: true,
      parking: true,
      breakfast: true,
      pets: true,
    },
    location: {
      address: '',
      city: '',
      zip: '',
      country: '',
      continent: '',
      lat: 0,
      lng: 0,
    },
  },
  addMedia: newMedia => {
    set(state => ({
      venueData: {
        ...state.venueData,
        media: [...state.venueData.media, newMedia],
      },
    }));
  },

  updateVenueData: newData => {
    set(state => ({
      venueData: { ...state.venueData, ...newData },
    }));
  },
  updateMetaData(newData) {
    set(state => ({
      venueData: {
        ...state.venueData,
        meta: { ...state.venueData.meta, ...newData },
      },
    }));
  },
  toggleMetaValue: field => {
    set(state => {
      const newState = {
        venueData: {
          ...state.venueData,
          meta: {
            ...state.venueData.meta,
            [field]: !state.venueData.meta[field],
          },
        },
      };

      return newState;
    });
  },
  updateLocationData(newData) {
    set(state => ({
      venueData: {
        ...state.venueData,
        location: { ...state.venueData.location, ...newData },
      },
    }));
  },
  reset: () =>
    set({
      venueData: {
        name: '',
        description: '',
        media: [],
        price: 0,
        maxGuests: 6, //100,
        rating: 5,
        meta: {
          wifi: true,
          parking: true,
          breakfast: true,
          pets: true,
        },
        location: {
          address: '',
          city: '',
          zip: '',
          country: '',
          continent: '',
          lat: 0,
          lng: 0,
        },
      },
    }),

  submitVenueData: async () => {
    const { venueData } = get();
    const { postVenue } = useVenueStore.getState();

    try {
      const data = await postVenue(venueData, true, true);

      return data;
    } catch (error) {
      console.error('Error:', error);
      throw error;
    }
  },
}));
export default createVenueStore;
