import dayjs from 'dayjs';
import { useEffect } from 'react';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import BasicDatePickerProvider from '../../providers/BasicDatePickerProvider';
import datePickerStore from '../../stores/datePickerStore';
import isSameOrAfter from 'dayjs/plugin/isSameOrAfter';
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore';
import utc from 'dayjs/plugin/utc';

dayjs.extend(isSameOrAfter);
dayjs.extend(isSameOrBefore);
dayjs.extend(utc);
//
function DateRangeSelector({ className, venueBookings }) {
  const {
    checkInDate,
    setCheckInDate,
    checkOutDate,
    setCheckOutDate,
    nights,
    setNights,
  } = datePickerStore();

  const today = dayjs();
  console.log('today', venueBookings);
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
  // create a function to visualize the dates that are not available
  const isDateBooked = date => {
    if (!venueBookings || venueBookings.length === 0) {
      return false;
    }

    const dayjsDate = dayjs(date);
    console.log('Checking date:', dayjsDate.format('YYYY-MM-DD'));

    const isBooked = venueBookings.some(booking => {
      const bookingStartStr = booking.dateFrom.split('T')[0];
      const bookingEndStr = booking.dateTo.split('T')[0];

      const bookingStart = dayjs(bookingStartStr);
      const bookingEnd = dayjs(bookingEndStr);

      const isInRange =
        dayjsDate.isSameOrAfter(bookingStart, 'day') &&
        dayjsDate.isSameOrBefore(bookingEnd, 'day');

      return isInRange;
    });

    return isBooked;
  };
  // const isDayAvailable = date => {};

  const isCheckoutDateInvalid = date => {
    if (!checkInDate || !venueBookings || venueBookings.length === 0)
      return false;
    const dayjsDate = dayjs(date);
    return venueBookings.some(booking => {
      const bookingStart = dayjs(booking.dateFrom);
      const bookingEnd = dayjs(booking.dateTo);

      return (
        checkInDate.isBefore(bookingEnd, 'day') &&
        dayjsDate.isAfter(bookingStart, 'day') // use dayjsDate instead of date
      );
    });
  };

  //
  useEffect(() => {
    if (
      checkInDate &&
      checkOutDate &&
      checkInDate.isValid() &&
      checkOutDate.isValid()
    ) {
      const diff = checkOutDate.diff(checkInDate, 'day');
      //   setNights(diff);
      if (diff !== nights) {
        setNights(diff);
      }
      console.log('Nights:', diff);
    }
  }, [checkInDate, checkOutDate, nights, setNights]);

  return (
    <div
      className={`flex flex-row gap-2 items-center justify-around ${
        className || ''
      }`}
    >
      <BasicDatePickerProvider>
        <DatePicker
          label="Check in"
          value={checkInDate || null}
          onChange={handleCheckInChange}
          minDate={today}
          maxDate={dayjs().add(1, 'year')}
          shouldDisableDate={date => {
            // Convert to dayjs and check conditions
            const dayjsDate = dayjs(date);
            return dayjsDate.isBefore(today, 'day') || isDateBooked(date);
          }}
          slotProps={{
            textField: {
              size: 'small',
              sx: { width: '150px' },
            },
          }}
        />

        <DatePicker
          label="Check out"
          value={checkOutDate || null}
          onChange={handleCheckOutChange}
          minDate={checkInDate}
          disabled={!checkInDate}
          shouldDisableDate={date => {
            if (!checkInDate) return true;

            const dayjsDate = dayjs(date);

            return (
              dayjsDate.isSameOrBefore(checkInDate, 'day') ||
              isCheckoutDateInvalid(date) ||
              isDateBooked(date)
            );
          }}
          slotProps={{
            textField: {
              size: 'small',
              sx: { width: '150px' },
            },
          }}
        />
      </BasicDatePickerProvider>
    </div>
  );
}

export default DateRangeSelector;
