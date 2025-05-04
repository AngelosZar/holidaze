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
import { useState } from 'react';
function VenueInfoSection({ venue, isLoading, error }) {
  // const { venueLocation, setVenueLocation } = useState();
  function returnTotalAmmount(nights, price) {
    // const price = venue.price;
    // const nights = 2;
    // return guests * price;
  }

  return (
    <section className="px-8">
      <div className="grid grid-cols-1 xl:grid-cols-2">
        <div className="flex flex-col">
          <h5 className="pb-4">{venue.name}</h5>
          <p className="text-lg font-semibold">
            Located in: {venue?.location?.city} - {venue?.location?.country}
          </p>
          <p className="">
            <span className="font-bold">Maximum Guests: </span>
            {venue?.maxGuests}
          </p>
          <div className="flex flex-row gap-2 max-w-sm mb-2">
            <span>{venue?.rating} stars</span>
            {/* // create a function to give a random
            number between 0 and 100 */}
            <span>100 Reviews</span>
          </div>
          <div className="border-t-2 border-primary max-w-60 mb-2">
            <img
              src={venue?.owner?.avatar?.url}
              alt={venue?.owner?.avatar?.alt || 'img'}
              className="rounded-full w-22 h-22 object-cover inset-0 my-2"
            />
            <p>
              <span className="font-bold">Host:</span> {venue?.owner?.name}
            </p>
          </div>
          <div className="border-y-2 border-primary max-w-md py-4">
            <p className="text-lg font-semibold">Easy check in</p>
            <p className="text-lg font-semibold">
              Free cancellations for 48 hours
            </p>
            <p className="text-lg font-semibold">Sustainable</p>
          </div>
          <p className="max-w-md pt-4">{venue.description}</p>
          <AccommodationIncludes venue={venue} />
        </div>
        <div className="">
          <BookAside venue={venue} />
        </div>
      </div>

      {/* <CalendarAside /> */}
      <MapSection />
    </section>
  );
}

export default VenueInfoSection;

function AccommodationIncludes(venue) {
  return (
    <div className="w-full mb-8 py-12">
      <h5 className="mb-4">Accommodation includes </h5>
      <div className="grid col-auto grid-cols-1 gap-4 max-w-lg sm:grid-cols-2 sm:gap-8">
        <div className="flex flex-col gap-2">
          <div className="flex flex-row gap-2 items-center">
            <img src={wifi} alt="Wifi" className="w-8 h-8" />
            <p className="text-">Wifi</p>
            {/* set line across to what is not offered */}
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
