import { create } from 'zustand';
import useVenueStore from './venuesStore';

const createVenueStore = create((set, get) => ({
  venueData: {
    name: '', //'string',
    description: '', //'string',
    media: [], //['string'],
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
  addMedia: newMedia => {
    set(state => ({
      venueData: {
        ...state.venueData,
        media: [...state.venueData.media, newMedia],
      },
    }));
    // console.log('newMedia', newMedia);
  },
  // if time
  //   removeMedia:
  //   updateMedia:
  updateVenueData: newData => {
    set(state => ({
      venueData: { ...state.venueData, ...newData },
    }));
    // console.log('newData', newData);
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
      // console.log('Updated meta state:', newState.venueData.meta);
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
    // console.log('newData', newData);
  },
  reset: () =>
    set({
      venueData: {
        name: '', //'string',
        description: '', //'string',
        media: [], //['string'],
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

  // submit to api event handler ?
  submitVenueData: async () => {
    const { venueData } = get();
    const { postVenue } = useVenueStore.getState();
    // console.log('venueData', venueData);
    //      postVenue: async (venueData, owner = true, bookings = true) => {
    try {
      const data = await postVenue(venueData, true, true);
      // console.log('data', data);
      return data;
    } catch (error) {
      console.error('Error:', error);
      throw error;
    }
  },
}));
export default createVenueStore;
