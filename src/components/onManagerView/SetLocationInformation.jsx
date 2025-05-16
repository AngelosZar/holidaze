export default function SetLocationInformation({
  location,
  handleLocationChange,
}) {
  return (
    <div className="flex flex-col gap-4 mt-8 max-w-sm">
      <h6>Location</h6>
      <div>
        <label htmlFor="Address">Address</label>
        <input
          type="text"
          className="w-full p-2 border border-gray-300 rounded-md"
          placeholder="Enter Address"
          value={location?.address || ''}
          onChange={e => handleLocationChange('address', e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="city">City</label>
        <input
          type="text"
          className="w-full p-2 border border-gray-300 rounded-md"
          placeholder="Enter city"
          value={location?.city || ''}
          onChange={e => handleLocationChange('city', e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="zip-code">Zip Code</label>
        <input
          type="number"
          className="w-full p-2 border border-gray-300 rounded-md"
          placeholder="Enter Zip code"
          value={location?.zip || ''}
          onChange={e => handleLocationChange('zip', e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="country">Country</label>
        <input
          type="text"
          className="w-full p-2 border border-gray-300 rounded-md"
          placeholder="Enter country"
          value={location?.country || ''}
          onChange={e => handleLocationChange('country', e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="continent">Continent</label>
        <input
          type="text"
          className="w-full p-2 border border-gray-300 rounded-md"
          placeholder="Enter continent"
          value={location?.continent || ''}
          onChange={e => handleLocationChange('continent', e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="longitude">longitude</label>
        <input
          type="number"
          className="w-full p-2 border border-gray-300 rounded-md"
          placeholder="Enter longitude"
          value={location?.lng || ''}
          onChange={e => updateLocationData({ lng: e.target.value })}
        />
      </div>
      <div>
        <label htmlFor="latitude">latitude</label>
        <input
          type="number"
          className="w-full p-2 border border-gray-300 rounded-md"
          placeholder="Enter latitude"
          value={location?.lat || ''}
          onChange={e => updateLocationData({ lat: e.target.value })} //
        />
      </div>
    </div>
  );
}
