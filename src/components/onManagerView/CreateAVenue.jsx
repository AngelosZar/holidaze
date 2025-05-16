import BasicInfoForForm from './BasicInfoForForm';
import SetLocationInformation from './SetLocationInformation';
import SetAccommodationIncludes from './SetAccommodationIncludes';
import createVenueStore from '../../stores/createVenueStore';

function CreateAVenue() {
  const { submitVenueData, reset, updateVenueData, updateLocationData } =
    createVenueStore();

  const venueData = createVenueStore(state => state.venueData);

  const location = createVenueStore(state => state.venueData.location);

  const handleLocationChange = (field, value) => {
    updateLocationData({ [field]: value });
  };

  const handleInputChange = (field, value) => {
    updateVenueData({ [field]: value });
  };

  async function handleSubmitVenueData(e) {
    e.preventDefault();
    console.log('handleSubmitVenueData');
    try {
      await submitVenueData();
      console.log('submitVenueData');
      reset();
    } catch (error) {
      console.error('Error submitting venue data:', error);
    }
  }

  return (
    <section className="w-full my-12 mx-8">
      <div className="py-12 border border-gray-200">
        <h3 className="mb-12">Create a venue</h3>
        <form onSubmit={handleSubmitVenueData}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <BasicInfoForForm
              handleInputChange={handleInputChange}
              venueData={venueData}
            />
            <SetLocationInformation
              location={location}
              handleLocationChange={handleLocationChange}
            />
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
