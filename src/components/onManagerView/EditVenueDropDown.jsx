import BasicInfoForForm from './BasicInfoForForm';
import SetLocationInformation from './SetLocationInformation';
import SetAccommodationIncludes from './SetAccommodationIncludes';
import updateVenueStore from '../../stores/updateVenueStore';
import useGetVenueWithId from '../../hooks/useGetVenueWithId';
import useEffect from 'react';
import { useParams } from 'react-router-dom';
export function EditVenueDropDown() {
  const { id } = useParams();
  const { venue: venueData, isLoading, error } = useGetVenueWithId(id);
  const { submitVenueData, reset, updateVenueData } = updateVenueStore();
  console.log('venueData', venueData);

  const handleInputChange = (field, value) => {
    updateVenueData({ [field]: value });
  };
  {
    isLoading && <p>Loading...</p>;
  }
  {
    error && <p>{error}</p>;
  }
  {
    !venueData && <p>No venue found</p>;
    // show image or something
  }

  return (
    <section className="w-full my-12 mx-8">
      <h3 className="mb-12">Edit venue dropdown</h3>
      <div className="flex flex-col md:flex-row justify-evenly items-center">
        <div className="max-w-sm ">
          <img
            src={venueData?.media?.[0]?.url}
            alt={venueData?.media?.[0]?.alt}
            className="w-full object-cover rounded-xl"
            style={{ aspectRatio: '1/1' }}
            loading="lazy"
            width="100%"
            height="auto"
          />
        </div>
        {/* <div>s
          <h1>calendar</h1>
        </div> */}
      </div>
      <section className="py-12 border border-gray-200">
        <form action="">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <BasicInfoForForm
              venueData={venueData}
              handleInputChange={handleInputChange}
            />
            <SetLocationInformation />
            <SetAccommodationIncludes />
          </div>
          <button className="btn-primary" type="submit">
            Submit
          </button>
        </form>
      </section>
    </section>
  );
}
