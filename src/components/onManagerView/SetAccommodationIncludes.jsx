import air_conditioner from '../../assets/accommodation_icons/air_conditioner.svg';
import breakfast from '../../assets/accommodation_icons/breakfast.svg';
import parking from '../../assets/accommodation_icons/parking.svg';
import pets from '../../assets/accommodation_icons/pets.svg';
import private_entrance from '../../assets/accommodation_icons/private_entrance.svg';
import shower from '../../assets/accommodation_icons/shower.svg';
import smart_tv from '../../assets/accommodation_icons/smart_tv.svg';
import wifi from '../../assets/accommodation_icons/wifi.svg';

export default function SetAccommodationIncludes() {
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
