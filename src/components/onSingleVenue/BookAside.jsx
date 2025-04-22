import BasicDatePicker from '../onHomepage/DatePicker';
import NumberDropDown from '../utilities/NumberDropDown';
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
