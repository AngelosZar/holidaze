import { useState } from 'react';
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

  return (
    <div>
      <BasicDatePickerProvider>
        <DatePicker label="Check in" />
        <DatePicker label="Check out" />
      </BasicDatePickerProvider>
    </div>
  );
}

export default DateRangeSelector;
