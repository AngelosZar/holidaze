import { create } from 'zustand';
import useVenueStore from './venuesStore';

const createVenueStore = create((set, get) => ({
  // const { postVenue } = useVenueStore();
  //
  //   "media": [
  //     {
  //       "url": "https://url.com/image.jpg",
  //       "alt": "string"
  //     }
  //   ],
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
      address: 'string',
      city: 'string',
      zip: 'string',
      country: 'string',
      continent: 'string',
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
    console.log('newMedia', newMedia);
  },
  //   removeMedia:
  //   updateMedia:
  updateVenueData: newData => {
    set(state => ({
      venueData: { ...state.venueData, ...newData },
    }));
    console.log('newData', newData);
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
      console.log('Updated meta state:', newState.venueData.meta);
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
    console.log('newData', newData);
  },
  reset: () =>
    set({
      venueData: {},
    }),

  // submit to api event handler ?
  submitVenueData: async () => {
    const { venueData } = get();
    const { postVenue } = useVenueStore.getState();
    console.log('venueData', venueData);
    //      postVenue: async (venueData, owner = true, bookings = true) => {
    try {
      await postVenue(venueData, true, true)
        .then(res => {
          console.log('res', res);
        })
        .catch(error => {
          console.error('Error:', error);
        });
      //   allready from api call
      // set({ isLoading: false });
    } catch (error) {
      console.error('Error:', error);
    }
  },
}));
export default createVenueStore;
