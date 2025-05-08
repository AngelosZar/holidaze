import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import dayjs from 'dayjs';

const toDayjs = date => {
  if (!date) return null;

  if (date && typeof date.isValid === 'function') return date;

  try {
    const d = dayjs(date);
    if (d.isValid()) {
      return d;
    } else {
      return null;
    }
  } catch (error) {
    console.error('Error converting datr to dayjs:', error);
    return null;
  }
};

const datePickerStore = create(
  devtools((set, get) => ({
    checkInDate: null,
    checkOutDate: null,
    nights: 1,
    pax: 1,
    pricePerNight: 0,
    totalPrice: 0,

    setTotalPrice: total => set({ totalPrice: total }),
    setPricePerNight: price => set({ pricePerNight: price }),

    setCheckInDate: date => {
      const dayjsDate = toDayjs(date);
      set({ checkInDate: dayjsDate });
    },

    setCheckOutDate: date => {
      const dayjsDate = toDayjs(date);
      set({ checkOutDate: dayjsDate });
    },

    setNights: nights => {
      if (nights !== get().nights) {
        set({ nights });
      }
    },
    setPax: pax => set({ pax }),

    reset: () => {
      set({
        checkInDate: null,
        checkOutDate: null,
        nights: 1,
        pax: 1,
        pricePerNight: 0,
        totalPrice: 0,
      });
    },
  }))
);

export default datePickerStore;
