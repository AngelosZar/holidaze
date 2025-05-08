import { useEffect } from 'react';
import createVenueStore from '../../stores/createVenueStore';

export default function BasicInfoForForm() {
  const { updateVenueData } = createVenueStore();

  return (
    <div className="flex flex-col gap-4 mt-8 max-w-sm">
      <h6>Basic information</h6>
      <div>
        <label htmlFor="Title">Title</label>
        <input
          type="text"
          className="w-full p-2 border border-gray-300 rounded-md"
          placeholder="Enter label"
          onChange={e => updateVenueData({ name: e.target.value })}
        />
      </div>
      <div>
        <label htmlFor="Description">Description</label>
        <textarea
          className="w-full p-2 border border-gray-300 rounded-md"
          placeholder="Enter description"
          onChange={e => updateVenueData({ description: e.target.value })}
        ></textarea>
      </div>

      <div>
        <label htmlFor="Price">Price</label>
        <input
          type="number"
          min="0"
          className="w-full p-2 border border-gray-300 rounded-md"
          placeholder="Price per night"
          onChange={e => updateVenueData({ price: e.target.value })}
        />
      </div>
      <div>
        <label htmlFor="maxGuests">Maximum number of guests</label>
        <input
          type="number"
          min="1"
          className="w-full p-2 border border-gray-300 rounded-md"
          placeholder="Price per night"
          onChange={e => updateVenueData({ maxGuests: e.target.value })}
        />
      </div>
    </div>
  );
}

// {
//   "name": "string",
//   "description": "string",
//   "media": [
//     "string"
//   ],
//   "price": 0,
//   "maxGuests": 100,
//   "rating": 5,
//   "meta": {
//     "wifi": true,
//     "parking": true,
//     "breakfast": true,
//     "pets": true
//   },
//   "location": {
//     "address": "string",
//     "city": "string",
//     "zip": "string",
//     "country": "string",
//     "continent": "string",
//     "lat": 0,
//     "lng": 0
//   }
// }
