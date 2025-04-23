import Layout from '../components/layout/Layout';
import { UserOnHeroSection } from '../components/onProfile/UserOnHeroSection';
import CurrentBookingsSection from '../components/onManagerView/CurrentBookingsSection';
//
import wifi from '../../src/assets/accommodation_icons/wifi.svg';
import air_conditioner from '../../src/assets/accommodation_icons/air_conditioner.svg';
import breakfast from '../../src/assets/accommodation_icons/breakfast.svg';
import parking from '../../src/assets/accommodation_icons/parking.svg';
import pets from '../../src/assets/accommodation_icons/pets.svg';
import smart_tv from '../../src/assets/accommodation_icons/smart_tv.svg';
import shower from '../../src/assets/accommodation_icons/shower.svg';
import private_entrance from '../../src/assets/accommodation_icons/private_entrance.svg';

function VenueManagerView() {
  return (
    <Layout>
      <UserOnHeroSection />
      <CurrentBookingsSection />
      <EditVenueDropDown />
    </Layout>
  );
}

export default VenueManagerView;

function EditVenueDropDown() {
  return (
    <section className="w-full mt-12 mb-12">
      <div className="flex flex-col md:flex-row justify-evenly items-center">
        <div className="max-w-sm ">
          <img
            src="https://images.unsplash.com/photo-1745173036546-c56551790fb8?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="img"
            className="w-full object-cover rounded-xl"
            style={{ aspectRatio: '1/1' }}
            loading="lazy"
            width="100%"
            height="auto"
          />
        </div>
        <div>
          <h1>calendar</h1>
        </div>
      </div>
      <div>
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

function SetAccommodationIncludes() {
  return (
    <div className="flex flex-col gap-4 max-w-sm mt-8">
      <h6>Accommodation includes</h6>
      <div className="grid col-auto grid-cols-1 gap-4 max-w-lg sm:grid-cols-2 sm:gap-8">
        <div className="flex flex-col gap-2">
          <div className="flex flex-row gap-2 items-center hover:bg-gray-100 ">
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
function SetLocationInformation() {
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
function BasicInfoForForm() {
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
