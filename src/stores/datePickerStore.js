import { create } from 'zustand';
import { persist } from 'zustand/middleware';
const datePickerStore = create(
  persist(
    set => ({
      checkInDate: null,
      checkOutDate: null,
      nights: 1,
      pax: 1,

      setCheckInDate: date => set({ checkInDate: date }),
      setCheckOutDate: date => set({ checkOutDate: date }),
      setNights: nights => set({ nights }),
      setPax: pax => set({ pax }),
    }),
    {
      name: 'datePickerStore',
    }
  )
);

export default datePickerStore;

// const [checkInDate, setCheckInDate] = useState(null);
// const [checkOutDate, setCheckOutDate] = useState(null);
// // const [isDateRangeAvailable, setIsDateRangeAvailable] = useState(false);
// const [nights, setNights] = useState(1);
// const [pax, setPax] = useState(1);
// const today = dayjs();
// const handleCheckInChange = newValue => {
//   setCheckInDate(newValue);
// };
// const handleCheckOutChange = newValue => {
//   setCheckOutDate(newValue);
// };
