import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import dayjs from 'dayjs';

const toDayjs = date => {
  if (!date) return null;
  const d = dayjs(date);
  return d.isValid() ? d : null;
};

const serializeState = state => ({
  ...state,
  checkInDate: state.checkInDate ? state.checkInDate.toISOString() : null,
  checkOutDate: state.checkOutDate ? state.checkOutDate.toISOString() : null,
});

const deserializeState = state => {
  if (!state) return state;
  return {
    ...state,
    checkInDate: state.checkInDate ? toDayjs(state.checkInDate) : null,
    checkOutDate: state.checkOutDate ? toDayjs(state.checkOutDate) : null,
  };
};

// const datePickerStore = create(
//   // persist(
//   (get, set) => ({
//     checkInDate: null,
//     checkOutDate: null,
//     nights: 1,
//     pax: 1,
//     pricePerNight: 0,
//     totalPrice: 0,

//     setTotalPrice: total => set({ totalPrice: total }),
//     setPricePerNight: price => set({ pricePerNight: price }),

//     setCheckInDate: date => set({ checkInDate: date }),
//     setCheckOutDate: date => set({ checkOutDate: date }),
//     setNights: nights => {
//       if (nights !== get().nights) {
//         set({ nights });
//       }
//     },
//     setPax: pax => set({ pax }),
//   }),
//   {
//     name: 'datePickerStore',
//     serialize: state => JSON.stringify(serializeState(state)),
//     deserialize: str => deserializeState(JSON.parse(str)),
//   }
//   // )
// );
const datePickerStore = create((set, get) => {
  //
  let initialState = {
    checkInDate: null,
    checkOutDate: null,
    nights: 1,
    pax: 1,
    pricePerNight: 0,
    totalPrice: 0,
  };
  // save to sessionstorage
  // function saveStateToSessionStorage(state) {
  function saveState(state) {
    try {
      const serialized = JSON.stringify(serializeState(state));
      sessionStorage.setItem('datePickerStore', serialized);
      console.log('State saved to session storage:', serialized);
    } catch (error) {
      console.error('Error saving state to session storage:', error);
    }
  }
  // try to get the state from local storage //or session storage
  try {
    const savedState = sessionStorage.getItem('datePickerStore');
    if (savedState) {
      const parsedState = JSON.parse(savedState);
      // initialState = deserializeState(parsedState);
      const deserialized = deserializeState(parsedState);
      initialState = { ...initialState, ...deserialized };
      console.log('Parsed state from session storage:', parsedState);
      console.log('Deserialized state:', deserialized);
    }
  } catch (error) {
    console.log('Error getting state from sessions storage', error);
  }
  return {
    ...initialState,

    setTotalPrice: total => {
      set({ totalPrice: total });
      saveState(get());
    },
    setPricePerNight: price => {
      set({ pricePerNight: price });
      saveState(get());
    },

    setCheckInDate: date => {
      const checkInDate = toDayjs(date);
      set({ checkInDate });
      saveState(get());
    },
    setCheckOutDate: date => {
      const checkOutDate = toDayjs(date);
      set({ checkOutDate });
      saveState(get());
    },
    setNights: nights => {
      if (nights !== get().nights) {
        set({ nights });
        saveState(get());
      }
    },
    setPax: pax => {
      set({ pax });
      saveState(get());
    },

    reset: () => {
      set(initialState);
      sessionStorage.removeItem('datePickerStore');
    },
  };
});
export default datePickerStore;

// @react-refresh:247 An error occurred in the <ForwardRef(MobileDatePicker2)> component.

// Consider adding an error boundary to your tree to customize error handling behavior.
// Visit https://react.dev/link/error-boundaries to learn more about error boundaries.

// const dayjs = require('dayjs');
// const customParseFormat = require('dayjs/plugin/customParseFormat');
// dayjs.extend(customParseFormat);

// // not sure that dayjs is utilizing the format in below for ISO8601
// const iso8601Format = 'YYYY-MM-DDTHH:mm:ss.sssZ';
// const currentDate = new Date();
// console.log(dayjs(currentDate, iso8601Format, true));
// // the result is like below
// {
//    '$L': 'en',
//    '$u': undefined,
//    '$d': Invalid Date,
//    '$y': NaN,
//    '$M': NaN,
//    '$D': NaN,
//    '$W': NaN,
//    '$H': NaN,
//    '$m': NaN,
//    '$s': NaN,
//    '$ms': NaN
// }
