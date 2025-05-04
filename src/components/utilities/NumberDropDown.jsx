import { useState } from 'react';

function NumberDropDown({ numberOfGuests }) {
  // const maxNumberGuests = 6; // this should be from the api
  const [selectedNumber, setSelectedNumber] = useState(1);

  const handleChange = e => {
    setSelectedNumber(e.target.value);
    // move to zustang ?

    console.log(`Selected number of guests: ${e.target.value}`);
  };
  return (
    <div className="flex justify-between mt-4">
      <label htmlFor="guests" className="text-lg ">
        Number of guests
      </label>
      <select
        className="block px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
        id="number-select"
        value={selectedNumber}
        onChange={handleChange}
      >
        {Array.from({ length: numberOfGuests }, (_, i) => i + 1).map(number => (
          <option key={number} value={number}>
            {number}
          </option>
        ))}
      </select>
    </div>
  );
}
export default NumberDropDown;
