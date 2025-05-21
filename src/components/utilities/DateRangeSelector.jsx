import { useEffect } from 'react';
import dayjs from 'dayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import BasicDatePickerProvider from '../../providers/BasicDatePickerProvider';
import datePickerStore from '../../stores/datePickerStore';

function DateRangeSelector({ className }) {
  const {
    checkInDate,
    setCheckInDate,
    checkOutDate,
    setCheckOutDate,
    nights,
    setNights,
  } = datePickerStore();

  const today = dayjs();

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
          //   renderInput={params => <TextFieldWithRef {...params} />}
          //   slots={{
          //     textField: TextFieldWithRef,
          //   }}
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
          //   renderInput={params => <TextFieldWithRef {...params} />}
          //   disabled={checkInDate ? false : true}
          disabled={!checkInDate}
          //   slots={{
          //     textField: TextFieldWithRef,
          //   }}
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
