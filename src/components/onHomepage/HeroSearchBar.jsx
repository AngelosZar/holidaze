import BasicDatePicker from './DatePicker';

export default function HeroSearchBar() {
  return (
    <div
      className="grid grid-rows-3 grid-cols-1 gap-4 border-2 
                    sm:grid-rows-2 sm:grid-cols-2
                    md:grid-rows-1 md:grid-cols-3 
                    lg:grid-cols-[2fr_2fr_1fr]
                    border-primary bg-white rounded-lg p-4 
                    relative 
                    sm:top-[-100px]
                    md:top-[-200px] 
                    shadow-lg mx-4 sm:mx-auto sm:max-w-[90%]"
    >
      <div className="flex flex-col justify-center ">
        <label htmlFor="searchBar" className="text-sm pl-1 pb-1">
          Select a destination
        </label>
        <input
          type="text"
          id="searchBar"
          className="formInput2"
          placeholder="Search for accommodation"
        />
      </div>
      <div className="flex flex-col lg:flex-row gap-4 ">
        <span>
          <BasicDatePicker labelMsg={'Check In'} />
        </span>
        <span>
          <BasicDatePicker labelMsg={'Check Out'} />
        </span>
      </div>
      <div className="w-full flex justify-center items-center sm:col-span-2 md:col-span-1">
        <button className="btn btn-primary w-full max-w-[8rem]">Search</button>
      </div>
    </div>
  );
}

