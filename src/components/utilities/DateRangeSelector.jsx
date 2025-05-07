import { forwardRef, useEffect, useMemo } from 'react';
import dayjs from 'dayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import BasicDatePickerProvider from '../../providers/BasicDatePickerProvider';
import datePickerStore from '../../stores/datePickerStore';

// @react-refresh:247 An error occurred in the <ForwardRef(MobileDatePicker2)> component.

// Consider adding an error boundary to your tree to customize error handling behavior.
// Visit https://react.dev/link/error-boundaries to learn more about error boundaries.
// https://stackoverflow.com/questions/66507643/warning-function-components-cannot-be-given-refs-warning-in-react-using-forward

// const TextFieldWithRef = forwardRef((props, ref) => {
//   return (
//     <input
//       {...props}
//       ref={ref}
//       className={`formInput2 relative ${props.className || ''}`}
//     />
//   );
// });

function DateRangeSelector({ className }) {
  // Maybe use zustand for this
  const {
    checkInDate: storedCheckInDate,
    setCheckInDate,
    checkOutDate: storedCheckOutDate,
    setCheckOutDate,
    nights,
    setNights,
    pax,
    setPax,
  } = datePickerStore();

  //   const checkInDate = storedCheckInDate || null;
  //   const checkOutDate = storedCheckOutDate || null;

  //   const checkInDate = storedCheckInDate
  //     ? dayjs(storedCheckInDate).isValid()
  //       ? dayjs(storedCheckInDate)
  //       : null
  //     : null;
  const checkInDate = useMemo(() => {
    storedCheckInDate
      ? dayjs(storedCheckInDate).isValid()
        ? dayjs(storedCheckInDate)
        : null
      : null;
  }, [storedCheckInDate]);
  //   const checkOutDate = storedCheckOutDate
  //     ? dayjs(storedCheckOutDate).isValid()
  //       ? dayjs(storedCheckOutDate)
  //       : null
  //     : null;
  const checkOutDate = useMemo(() => {
    storedCheckOutDate
      ? dayjs(storedCheckOutDate).isValid()
        ? dayjs(storedCheckOutDate)
        : null
      : null;
  }, [storedCheckOutDate]);
  const today = dayjs();
  const handleCheckInChange = newValue => {
    setCheckInDate(newValue);
  };
  const handleCheckOutChange = newValue => {
    setCheckOutDate(newValue);
  };
  //

  //   useEffect(() => {
  //     if (checkInDate) {
  //       console.log('checkInDate', checkInDate);
  //     }
  //     if (checkOutDate) {
  //       console.log('checkOutDate', checkOutDate);
  //     }
  //   }, [checkInDate, checkOutDate]);
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
      className={`flex flex-col gap-2 items-center justify-around ${
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
          // disabled={!checkInDate}
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

// DateRangeSelector.jsx:40 Uncaught TypeError: storedCheckInDate.isValid is not a function
//     at DateRangeSelector (DateRangeSelector.jsx:40:31)

//
// DateRangeSelector.jsx:16 React does not recognize the `ownerState` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `ownerstate` instead. If you accidentally passed it from a parent component, remove it from the DOM element.
// DateRangeSelector.jsx:16 Received `false` for a non-boolean attribute `error`.

// If you want to write it to the DOM, pass a string instead: error="false" or error={value.toString()}.

// If you used to conditionally omit it with error={condition && value}, pass error={condition ? value : undefined} instead.
// DateRangeSelector.jsx:16 React does not recognize the `inputProps` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `inputprops` instead. If you accidentally passed it from a parent component, remove it from the DOM element.
// DateRangeSelector.jsx:16 React does not recognize the `InputProps` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `inputprops` instead. If you accidentally passed it from a parent component, remove it from the DOM element.
