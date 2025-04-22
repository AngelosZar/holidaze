import BasicDatePicker from '../onHomepage/DatePicker';

function BookAside() {
  return (
    <div className="w-full max-w-lg p-8 bg-white rounded-lg shadow-md border-2 border-primary">
      <h6>Price 1000 nok</h6>
      <hr className="my-6" />
      <div className="flex flex-col lg:flex-row gap-4 ">
        <span>
          <BasicDatePicker labelMsg={'Check In'} />
        </span>
        <span>
          <BasicDatePicker labelMsg={'Check Out'} />
        </span>
      </div>
      <hr className="my-6" />

      <NumberDropDown />
      {/* max number of guest for the venue */}
      <hr className="my-6" />

      <div className="w-full flex flex-col text-center max-w-sm mx-auto">
        <button className="btn-primary mb-4">Book</button>
        <span className="flex flex-row justify-between mt-4">
          <p>Price per night</p> <p>1000nok</p>
        </span>
        <span className="flex flex-row justify-between mt-4">
          <p>Cleaning fee</p> <p>1000nok</p>
        </span>
        <span className="flex flex-row justify-between mt-4">
          <p>Taxes </p> <p>1000nok</p>
        </span>
        <hr className="my-6" />
        <span className="flex flex-row justify-between mt-4">
          <p>Total </p> <p>1000nok</p>
        </span>
      </div>
    </div>
  );
}

export default BookAside;

function NumberDropDown() {
  return (
    <div className="flex  gap-8">
      <label htmlFor="guests" className="text-lg pl-1 pb-1">
        Number of guests
      </label>
      <select>
        {/* change to number by api- max guests */}
        {[1, 2, 3, 4, 5, 6].map(number => (
          <option key={number} value={number}>
            {number}
          </option>
        ))}
      </select>
    </div>
  );
}
