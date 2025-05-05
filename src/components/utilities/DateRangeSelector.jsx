import { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import BasicDatePickerProvider from '../../providers/BasicDatePickerProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { Stack } from '@mui/material';

function DateRangeSelector() {
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);
  // const [isDateRangeAvailable, setIsDateRangeAvailable] = useState(false);
  const [nights, setNights] = useState(1);
  const [pax, setPax] = useState(1);

  const handleCheckInChange = newValue => {
    setCheckInDate(newValue);
  };
  const handleCheckOutChange = newValue => {
    setCheckOutDate(newValue);
  };
  //
  useEffect(() => {
    if (checkInDate) {
      console.log('checkInDate', checkInDate);
    }
    if (checkOutDate) {
      console.log('checkOutDate', checkOutDate);
    }
  }, [checkInDate, checkOutDate]);
  //
  useEffect(() => {
    if (checkInDate && checkOutDate) {
      const diff = checkOutDate.diff(checkInDate, 'day');
      setNights(diff);
      console.log('Nights:', diff);
    }
  }, [checkInDate, checkOutDate]);

  return (
    <div>
      <BasicDatePickerProvider>
        <DatePicker
          label="Check in"
          value={checkInDate}
          onChange={handleCheckInChange}
        />
        <DatePicker
          label="Check out"
          value={checkOutDate}
          onChange={handleCheckOutChange}
        />
      </BasicDatePickerProvider>
    </div>
  );
}

export default DateRangeSelector;

// checkInDate
// Object { "$L": "en", "$u": undefined, "$d": Date Fri May 09 2025 00:00:00 GMT+0200 (Central European Summer Time), "$y": 2025, "$M": 4, "$D": 9, "$W": 5, "$H": 0, "$m": 0, "$s": 0, … }
// ​
// "$D": 9
// ​
// "$H": 0
// ​
// "$L": "en"
// ​
// "$M": 4
// ​
// "$W": 5
// ​
// "$d": Date Fri May 09 2025 00:00:00 GMT+0200 (Central European Summer Time)
// ​
// "$isDayjsObject": true
// ​
// "$m": 0
// ​
// "$ms": 0
// ​
// "$s": 0
// ​
// "$u": undefined
// ​
// "$x": Object {  }
// ​
// "$y": 2025
