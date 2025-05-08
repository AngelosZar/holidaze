import BasicInfoForForm from './BasicInfoForForm';
import SetLocationInformation from './SetLocationInformation';
import SetAccommodationIncludes from './SetAccommodationIncludes';
// import { useState } from 'react';
function CreateAVenue() {
  return (
    <section className="w-full my-12 mx-8">
      <div className="py-12 border border-gray-200">
        <h3 className="mb-12">Create a venue</h3>
        <form action="">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <BasicInfoForForm />
            <SetLocationInformation />
            <SetAccommodationIncludes />
          </div>
        </form>
      </div>
    </section>
  );
}

export default CreateAVenue;
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
