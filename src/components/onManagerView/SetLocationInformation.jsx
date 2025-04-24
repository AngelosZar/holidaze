//

export default function SetLocationInformation() {
  return (
    <div className="flex flex-col gap-4 mt-8 max-w-sm">
      <h6>Location</h6>
      <div>
        <label htmlFor="Address">Address</label>
        <input
          type="text"
          className="w-full p-2 border border-gray-300 rounded-md"
          placeholder="Enter Address"
        />
      </div>
      <div>
        <label htmlFor="city">City</label>
        <input
          type="text"
          className="w-full p-2 border border-gray-300 rounded-md"
          placeholder="Enter city"
        />
      </div>
      <div>
        <label htmlFor="zip-code">Zip Code</label>
        <input
          type="text"
          className="w-full p-2 border border-gray-300 rounded-md"
          placeholder="Enter Zip code"
        />
      </div>
      <div>
        <label htmlFor="country">Country</label>
        <input
          type="text"
          className="w-full p-2 border border-gray-300 rounded-md"
          placeholder="Enter country"
        />
      </div>
      <div>
        <label htmlFor="continent">Continent</label>
        <input
          type="text"
          className="w-full p-2 border border-gray-300 rounded-md"
          placeholder="Enter continent"
        />
      </div>
      <div>
        <label htmlFor="longitude">longitude</label>
        <input
          type="text"
          className="w-full p-2 border border-gray-300 rounded-md"
          placeholder="Enter longitude"
        />
      </div>
      <div>
        <label htmlFor="latitude">latitude</label>
        <input
          type="text"
          className="w-full p-2 border border-gray-300 rounded-md"
          placeholder="Enter latitude"
        />
      </div>
    </div>
  );
}
