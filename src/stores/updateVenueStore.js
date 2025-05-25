import { create } from 'zustand';
import useVenueStore from './venuesStore';

const updateVenueStore = create((set, get) => ({
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
  setVenueData: data => {
    set({ venueData: data });
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
  toggleMetaValue: field =>
    set(state => {
      const currentValue = state.venueData.meta?.[field] || false;

      return {
        venueData: {
          ...state.venueData,
          location: { ...state.venueData.location },
          meta: {
            ...state.venueData.meta,
            [field]: !currentValue,
          },
        },
      };
    }),
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
    }),

  submitVenueData: async (id, venueData) => {
    const { putVenue } = useVenueStore.getState();

    try {
      const data = await putVenue(id, venueData);
      return data;
    } catch (error) {
      console.error('Error:', error);
      throw error;
    }
  },
}));

export default updateVenueStore;
