import BasicInfoForForm from './BasicInfoForForm';
import SetLocationInformation from './SetLocationInformation';
import SetAccommodationIncludes from './SetAccommodationIncludes';
import createVenueStore from '../../stores/createVenueStore';
import Popup from '../utilities/PopUp';
import { useState } from 'react';
function CreateAVenue() {
  const {
    submitVenueData,
    reset,
    updateVenueData,
    updateLocationData,
    toggleMetaValue,
    venueData,
    location,
  } = createVenueStore();
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState('');
  const [popupTitle, setPopupTitle] = useState('');
  const [popupType, setPopupType] = useState('info');

  const handleLocationChange = (field, value) => {
    updateLocationData({ [field]: value });
  };

  const handleInputChange = (field, value) => {
    updateVenueData({ [field]: value });
  };
  function handleMetaDataChange(key) {
    toggleMetaValue(key);
    console.log('key', key);
  }
  async function handleSubmitVenueData(e) {
    e.preventDefault();
    console.log('handleSubmitVenueData');
    try {
      await submitVenueData();
      setPopupTitle('Venue Created Successfully!');
      setPopupMessage('Venue Created Successfully');
      setPopupType('success');
      setShowSuccessPopup(true);
      // maybe use timeout in the component itself
      setTimeout(() => {
        setShowSuccessPopup(false);
      }, 3000);
      reset();
    } catch (error) {
      console.error('Error submitting venue data:', error);
    }
  }
  const handleClosePopup = () => {
    setShowSuccessPopup(false);
    setPopupTitle('');
    setPopupMessage('');
    setPopupType('info');
  };
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
            <SetAccommodationIncludes
              handleMetaDataChange={handleMetaDataChange}
              venueData={venueData}
            />
          </div>
          <button className="btn-primary" type="submit">
            Submit
          </button>
        </form>
      </div>
      {/*  */}

      <Popup
        isOpen={showSuccessPopup}
        onClose={handleClosePopup}
        title={popupTitle}
        message={popupMessage}
        type={popupType}
      />
    </section>
  );
}

export default CreateAVenue;
