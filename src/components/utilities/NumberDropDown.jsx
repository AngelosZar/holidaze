import { useEffect } from 'react';
import datePickerStore from '../../stores/datePickerStore';

function NumberDropDown({ maxNumberOfGuests }) {
  const { pax, setPax } = datePickerStore();

  const handleChange = e => {
    setPax(e.target.value);
  };
  useEffect(() => {
    if (pax) {
      setPax(pax);
    }
  }, [pax, setPax]);

  return (
    <div className="flex justify-between mt-4">
      <label htmlFor="guests" className="text-lg ">
        Number of guests
      </label>
      <select
        className="block px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
        id="number-select"
        value={pax}
        onChange={handleChange}
      >
        {Array.from({ length: maxNumberOfGuests }, (_, i) => i + 1).map(
          number => (
            <option key={number} value={number}>
              {number}
            </option>
          )
        )}
      </select>
    </div>
  );
}
export default NumberDropDown;
