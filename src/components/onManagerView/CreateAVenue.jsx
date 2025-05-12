import BasicInfoForForm from './BasicInfoForForm';
import SetLocationInformation from './SetLocationInformation';
import SetAccommodationIncludes from './SetAccommodationIncludes';
import createVenueStore from '../../stores/createVenueStore';
import { useEffect } from 'react';
// import { useState } from 'react';
function CreateAVenue() {
  const { submitVenueData, reset } = createVenueStore();

  async function handleSubmitVenueData(e) {
    e.preventDefault();
    console.log('handleSubmitVenueData');
    submitVenueData();
    reset();
    // reset is not working
    // img is not uploaded
  }
  // useEffect(() => {});
  return (
    <section className="w-full my-12 mx-8">
      <div className="py-12 border border-gray-200">
        <h3 className="mb-12">Create a venue</h3>
        <form onSubmit={handleSubmitVenueData}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <BasicInfoForForm />
            <SetLocationInformation />
            <SetAccommodationIncludes />
          </div>
          <button className="btn-primary" type="submit">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}

export default CreateAVenue;
