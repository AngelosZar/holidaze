import { useEffect } from 'react';
import air_conditioner_img from '../../assets/accommodation_icons/air_conditioner.svg';
import breakfast_img from '../../assets/accommodation_icons/breakfast.svg';
import parking_img from '../../assets/accommodation_icons/parking.svg';
import pets_img from '../../assets/accommodation_icons/pets.svg';
import private_entrance_img from '../../assets/accommodation_icons/private_entrance.svg';
import shower_img from '../../assets/accommodation_icons/shower.svg';
import smart_tv_img from '../../assets/accommodation_icons/smart_tv.svg';
import wifi_img from '../../assets/accommodation_icons/wifi.svg';

export default function SetAccommodationIncludes({
  handleMetaDataChange,
  venueData,
}) {
  useEffect(() => {}, [venueData]);
  const meta = venueData?.meta || {};
  const { wifi, parking, breakfast, pets } = meta;

  const privateEntrance = true;
  const airConditioner = true;
  const shower = true;
  const smartTv = true;

  return (
    <div className="flex flex-col gap-4 max-w-sm mt-8">
      <h6 className="text-primary80 font-bold">Accommodation includes</h6>
      <div className="grid col-auto grid-cols-1 gap-4 max-w-lg sm:grid-cols-2 sm:gap-8 md:gap-4">
        <div className="flex flex-col gap-2">
          <div
            className="flex flex-row gap-2 items-center cursor-pointer"
            onClick={() => handleMetaDataChange('wifi')}
          >
            <img src={wifi_img} alt="wifi" className="w-8 h-8" />
            <p className="text- color-primary">WiFi</p>
            <span
              className={`text-xs font-medium ${
                wifi ? 'text-blue-500' : 'text-red-500'
              }`}
            >
              {wifi ? 'Included' : 'Not included'}
            </span>
          </div>
        </div>
        <div
          className="flex flex-row gap-2 items-center cursor-pointer"
          onClick={() => handleMetaDataChange('breakfast')}
        >
          <img src={breakfast_img} alt="breakfast" className="w-8 h-8" />
          <p className="text- color-primary">Breakfast</p>
          <span
            className={`text-xs font-medium ${
              breakfast ? 'text-blue-500' : 'text-red-500'
            }`}
          >
            {breakfast ? 'Included' : 'Not included'}
          </span>
        </div>
        <div
          className="flex flex-row gap-2 items-center cursor-pointer"
          onClick={() => handleMetaDataChange('parking')}
        >
          <img src={parking_img} alt="parking" className="w-8 h-8" />
          <p className="text- color-primary">Parking</p>
          <span
            className={`text-xs font-medium ${
              parking ? 'text-blue-500' : 'text-red-500'
            }`}
          >
            {parking ? 'Included' : 'Not included'}
          </span>
        </div>
        <div
          className="flex flex-row gap-2 items-center cursor-pointer"
          onClick={() => handleMetaDataChange('pets')}
        >
          <img src={pets_img} alt="pets" className="w-8 h-8" />
          <p className="text- color-primary">Pets</p>
          <span
            className={`text-xs font-medium ${
              pets ? 'text-blue-500' : 'text-red-500'
            }`}
          >
            {pets ? 'Included' : 'Not included'}
          </span>
        </div>
      </div>
      <div className="grid col-auto grid-cols-1 gap-4 max-w-lg sm:grid-cols-2 sm:gap-8 md:gap-4">
        <div className="flex flex-row gap-2 items-center cursor-pointer">
          <img
            src={private_entrance_img}
            alt="private entrance"
            className="w-8 h-8"
          />
          <p className="text- color-primary">Private entrance</p>
          <span
            className={`text-xs font-medium ${
              privateEntrance === true ? 'text-blue-500' : 'text-red-500'
            }`}
          >
            {privateEntrance ? 'Included' : 'Not included'}
          </span>{' '}
        </div>
        <div className="flex flex-row gap-2 items-center cursor-pointer">
          <img src={shower_img} alt="shower" className="w-8 h-8" />
          <p className="text- color-primary">Shower</p>
          <span
            className={`text-xs font-medium ${
              shower === true ? 'text-blue-500' : 'text-red-500'
            }`}
          >
            {shower ? 'Included' : 'Not included'}
          </span>
        </div>
        <div className="flex flex-row gap-2 items-center cursor-pointer">
          <img
            src={air_conditioner_img}
            alt="air conditioner"
            className="w-8 h-8"
          />
          <p className="text- color-primary">Air conditioner</p>
          <span
            className={`text-xs font-medium ${
              airConditioner === true ? 'text-blue-500' : 'text-red-500'
            }`}
          >
            {airConditioner ? 'Included' : 'Not included'}
          </span>
        </div>
        <div className="flex flex-row gap-2 items-center cursor-pointer">
          <img src={smart_tv_img} alt="smart tv" className="w-8 h-8" />
          <p className="text- color-primary">Smart tv</p>
          <span
            className={`text-xs font-medium ${
              smartTv === true ? 'text-blue-500' : 'text-red-500'
            }`}
          >
            {smartTv ? 'Included' : 'Not included'}
          </span>
        </div>
      </div>
    </div>
  );
}
