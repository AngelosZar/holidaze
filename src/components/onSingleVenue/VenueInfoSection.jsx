import BookAside from './BookAside';
import CalendarAside from './CalendarAside';
import MapSection from './MapSection';
// import wifi_icon from '../../assets/accomodation_icons/wifi.png';
import wifi from '../../assets/accommodation_icons/wifi.svg';
import air_conditioner from '../../assets/accommodation_icons/air_conditioner.svg';
import breakfast from '../../assets/accommodation_icons/breakfast.svg';
import parking from '../../assets/accommodation_icons/parking.svg';
import pets from '../../assets/accommodation_icons/pets.svg';
import smart_tv from '../../assets/accommodation_icons/smart_tv.svg';
import shower from '../../assets/accommodation_icons/shower.svg';
import private_entrance from '../../assets/accommodation_icons/private_entrance.svg';
function VenueInfoSection() {
  return (
    <section className="px-8">
      <div className="grid grid-cols-1 xl:grid-cols-2">
        <div className="flex flex-col">
          <h4 className="pb-4">Name of venue</h4>
          <p className="">number of guests</p>
          <div className="flex flex-row gap-2 max-w-sm mb-2">
            <span>5stars</span>
            <span>100 Reviews</span>
          </div>
          <div className="border-t-2 border-primary max-w-60 mb-2">
            <img
              src="https://images.unsplash.com/photo-1570158268183-d296b2892211?q=80&w=2187&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              className="rounded-full w-22 h-22 object-cover inset-0 my-2"
            />
            <p>host name </p>
          </div>
          <div className="border-y-2 border-primary max-w-md py-4">
            <p className="text-lg font-semibold">Easy check in</p>
            <p className="text-lg font-semibold">
              Free cancellations for 48 hours
            </p>
            <p className="text-lg font-semibold">Sustainable</p>
          </div>
          <p className="max-w-md pt-4">
            This is the description : Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in{' '}
          </p>
          <AccommodationIncludes />
        </div>
        <div className="">
          <BookAside />
        </div>
      </div>

      {/* <CalendarAside /> */}
      <MapSection />
    </section>
  );
}

export default VenueInfoSection;

function AccommodationIncludes() {
  return (
    <div className="w-full mb-8">
      <h5 className="mb-4">Accommodation includes </h5>
      <div className="grid col-auto grid-cols-1 gap-4 max-w-lg sm:grid-cols-2 sm:gap-8">
        <div className="flex flex-col gap-2">
          <div className="flex flex-row gap-2 items-center">
            <img src={wifi} alt="Wifi" className="w-8 h-8" />
            <p className="text-">Wifi</p>
          </div>
          <div className="flex flex-row gap-2 items-center">
            <img src={breakfast} alt="breakfast" className="w-8 h-8" />
            <p className="text- color-primary">Breakfast</p>
          </div>
          <div className="flex flex-row gap-2 items-center">
            <img src={parking} alt="parking" className="w-8 h-8" />
            <p className="text- color-primary">Parking</p>
          </div>
          <div className="flex flex-row gap-2 items-center">
            <img src={pets} alt="pets" className="w-8 h-8" />
            <p className="text- color-primary">Pets</p>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex flex-row gap-2 items-center">
            <img
              src={private_entrance}
              alt="private entrance"
              className="w-8 h-8"
            />
            <p className="text- color-primary">Private entrance</p>
          </div>
          <div className="flex flex-row gap-2 items-center">
            <img src={shower} alt="shower" className="w-8 h-8" />
            <p className="text- color-primary">Shower</p>
          </div>
          <div className="flex flex-row gap-2 items-center">
            <img
              src={air_conditioner}
              alt="air conditioner"
              className="w-8 h-8"
            />
            <p className="text- color-primary">Air conditioner</p>
          </div>
          <div className="flex flex-row gap-2 items-center">
            <img src={smart_tv} alt="smart tv" className="w-8 h-8" />
            <p className="text- color-primary">Smart tv</p>
          </div>
        </div>
      </div>
    </div>
  );
}
