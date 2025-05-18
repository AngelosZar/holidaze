import BasicInfoForForm from './BasicInfoForForm';
import SetLocationInformation from './SetLocationInformation';
import SetAccommodationIncludes from './SetAccommodationIncludes';
import updateVenueStore from '../../stores/updateVenueStore';
import useGetVenueWithId from '../../hooks/useGetVenueWithId';
import { use, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export function EditVenueDropDown() {
  const { id } = useParams();
  const { venue: fetchedVenueData, isLoading, error } = useGetVenueWithId(id);
  const {
    submitVenueData,
    reset,
    updateVenueData,
    updateLocationData,
    setVenueData,
    toggleMetaValue,
    venueData,
  } = updateVenueStore();
  const [storeActions] = useState(() => ({
    updateVenueData: updateVenueStore.getState().updateVenueData,
    updateLocationData: updateVenueStore.getState().updateLocationData,
    toggleMetaValue: updateVenueStore.getState().toggleMetaValue,
    submitVenueData: updateVenueStore.getState().submitVenueData,
  }));
  const storeVenueData = updateVenueStore(state => state.venueData);
  console.log('storeVenueData', storeVenueData);
  // const location = updateVenueStore(state => state.venueData.location);

  useEffect(() => {
    if (fetchedVenueData) {
      setVenueData(fetchedVenueData);
    }
  }, [setVenueData, toggleMetaValue, fetchedVenueData]);

  const handleInputChange = (field, value) => {
    storeActions.updateVenueData({ [field]: value });
  };
  const handleLocationChange = (field, value) => {
    storeActions.updateLocationData({ [field]: value });
  };
  //

  const handleMetaDataChange = field => {
    storeActions.toggleMetaValue(field);
    setVenueData({
      ...storeVenueData,
      meta: {
        ...storeVenueData.meta,
        [field]: !storeVenueData.meta?.[field],
      },
    });
  };
  //
  const handleSubmitVenueData = async (e, id, venueData) => {
    e.preventDefault();
    // console.log('handleSubmitVenueData');
    // console.log(id);
    try {
      await submitVenueData(id, venueData);
      // console.log('submitVenueData');
      reset();
    } catch (error) {
      console.error('Error submitting venue data:', error);
    }
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
        <form onSubmit={e => handleSubmitVenueData(e, id, venueData)}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <BasicInfoForForm
              venueData={venueData}
              handleInputChange={handleInputChange}
            />
            <SetLocationInformation
              location={location}
              handleLocationChange={handleLocationChange}
            />
            <SetAccommodationIncludes
              handleMetaDataChange={handleMetaDataChange}
              venueData={venueData}
            />
          </div>
          <button className="btn-primary" type="submit">
            Submit
          </button>
        </form>
      </section>
    </section>
  );
}
