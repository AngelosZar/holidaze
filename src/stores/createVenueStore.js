import { create } from 'zustand';

const createVenueStore = create((set, get) => ({
  //
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
      venueData: {},
    }),
  // submit to api event handler ?
  submitVenueData: async () => {
    const { venueData } = get();
    console.log('venueData', venueData);
    //  do the api call
  },
}));
export default createVenueStore;
