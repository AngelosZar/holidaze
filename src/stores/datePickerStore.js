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

const datePickerStore = create(
  persist(
    (get, set) => ({
      checkInDate: null,
      checkOutDate: null,
      nights: 1,
      pax: 1,
      pricePerNight: 0,
      totalPrice: 0,

      setTotalPrice: total => set({ totalPrice: total }),
      setPricePerNight: price => set({ pricePerNight: price }),

      setCheckInDate: date => set({ checkInDate: date }),
      setCheckOutDate: date => set({ checkOutDate: date }),
      setNights: nights => {
        if (nights !== get().nights) {
          set({ nights });
        }
      },
      setPax: pax => set({ pax }),
    }),
    {
      name: 'datePickerStore',
      serialize: state => JSON.stringify(serializeState(state)),
      deserialize: str => deserializeState(JSON.parse(str)),
    }
  )
);

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
