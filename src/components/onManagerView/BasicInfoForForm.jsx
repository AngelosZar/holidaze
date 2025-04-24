export default function BasicInfoForForm() {
  return (
    <div className="flex flex-col gap-4 mt-8 max-w-sm">
      <h6>Basic information</h6>
      <div>
        <label htmlFor="Title">Title</label>
        <input
          type="text"
          className="w-full p-2 border border-gray-300 rounded-md"
          placeholder="Enter label"
        />
      </div>
      <div>
        <label htmlFor="Description">Description</label>
        <textarea
          className="w-full p-2 border border-gray-300 rounded-md"
          placeholder="Enter description"
        ></textarea>
      </div>

      <div>
        <label htmlFor="Price">Price</label>
        <input
          type="number"
          min="0"
          className="w-full p-2 border border-gray-300 rounded-md"
          placeholder="Price per night"
        />
      </div>
      <div>
        <label htmlFor="maxGuests">Maximum number of guests</label>
        <input
          type="number"
          min="1"
          className="w-full p-2 border border-gray-300 rounded-md"
          placeholder="Price per night"
        />
      </div>
    </div>
  );
}
