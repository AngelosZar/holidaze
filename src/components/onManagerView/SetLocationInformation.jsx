import createVenueStore from '../../stores/createVenueStore';

export default function SetLocationInformation() {
  const { updateLocationData } = createVenueStore();
  return (
    <div className="flex flex-col gap-4 mt-8 max-w-sm">
      <h6>Location</h6>
      <div>
        <label htmlFor="Address">Address</label>
        <input
          type="text"
          className="w-full p-2 border border-gray-300 rounded-md"
          placeholder="Enter Address"
          onChange={e => updateLocationData({ address: e.target.value })}
        />
      </div>
      <div>
        <label htmlFor="city">City</label>
        <input
          type="text"
          className="w-full p-2 border border-gray-300 rounded-md"
          placeholder="Enter city"
          onChange={e => updateLocationData({ city: e.target.value })}
        />
      </div>
      <div>
        <label htmlFor="zip-code">Zip Code</label>
        <input
          type="text"
          className="w-full p-2 border border-gray-300 rounded-md"
          placeholder="Enter Zip code"
          onChange={e => updateLocationData({ zip: e.target.value })}
          // maybe turn this into a number
        />
      </div>
      <div>
        <label htmlFor="country">Country</label>
        <input
          type="text"
          className="w-full p-2 border border-gray-300 rounded-md"
          placeholder="Enter country"
          onChange={e => updateLocationData({ country: e.target.value })}
        />
      </div>
      <div>
        <label htmlFor="continent">Continent</label>
        <input
          type="text"
          className="w-full p-2 border border-gray-300 rounded-md"
          placeholder="Enter continent"
          onChange={e => updateLocationData({ continent: e.target.value })}
        />
      </div>
      <div>
        <label htmlFor="longitude">longitude</label>
        <input
          type="text"
          className="w-full p-2 border border-gray-300 rounded-md"
          placeholder="Enter longitude"
          onChange={e => updateLocationData({ lng: e.target.value })}
          // maybe turn this into a number
        />
      </div>
      <div>
        <label htmlFor="latitude">latitude</label>
        <input
          type="text"
          className="w-full p-2 border border-gray-300 rounded-md"
          placeholder="Enter latitude"
          onChange={e => updateLocationData({ lat: e.target.value })}
          // maybe turn this into a number
        />
      </div>
    </div>
  );
}
// location: {
//   address: 'string',
//   city: 'string',
//   zip: 'string',
//   country: 'string',
//   continent: 'string',
//   lat: 0,
//   lng: 0,
// },
