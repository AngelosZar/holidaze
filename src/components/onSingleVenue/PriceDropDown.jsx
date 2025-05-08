import { useEffect } from 'react';
import datePickerStore from '../../stores/datePickerStore';

function PriceDropDown({ venue }) {
  const {
    nights,
    pax,
    pricePerNight,
    setPricePerNight,
    totalPrice,
    calculateTotalPrice,
  } = datePickerStore();
  useEffect(() => {
    if (venue?.price) {
      setPricePerNight(venue.price);
    }
  }, [venue?.price, setPricePerNight]);

  useEffect(() => {
    calculateTotalPrice();
  }, [nights, pricePerNight, calculateTotalPrice]);

  return (
    <div className="w-full flex flex-col text-center max-w-sm mx-auto">
      <span className="flex flex-row justify-between mt-4">
        <p>Price per night</p> <p>{pricePerNight} nok</p>
      </span>
      <span className="flex flex-row justify-between mt-4">
        <p>Booked days</p> <p>{nights} </p>
      </span>
      <span className="flex flex-row justify-between mt-4 mb-4">
        <p>Number of guests</p> <p>{pax} </p>
      </span>
      <hr />
      <span className="flex flex-row justify-between mt-4">
        <p>Cleaning fee</p> <p> 0 nok</p>
      </span>
      <span className="flex flex-row justify-between mt-4">
        <p>Taxes </p> <p>0 nok </p>
      </span>
      <hr className="my-6" />
      <span className="flex flex-row justify-between mt-4">
        <p>Total </p> <p>{totalPrice} nok</p>
      </span>
    </div>
  );
}
export default PriceDropDown;
