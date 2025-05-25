import BasicInfoForForm from './BasicInfoForForm';
import SetLocationInformation from './SetLocationInformation';
import SetAccommodationIncludes from './SetAccommodationIncludes';
import createVenueStore from '../../stores/createVenueStore';
import Popup from '../utilities/PopUp';
import { useState } from 'react';

function CreateAVenue() {
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState('');
  const [popupTitle, setPopupTitle] = useState('');
  const [popupType, setPopupType] = useState('info');
  const {
    submitVenueData,
    reset,
    updateVenueData,
    updateLocationData,
    toggleMetaValue,
    venueData,
    location,
  } = createVenueStore();

  const handleLocationChange = (field, value) => {
    updateLocationData({ [field]: value });
  };

  const handleInputChange = (field, value) => {
    updateVenueData({ [field]: value });
  };
  function handleMetaDataChange(key) {
    toggleMetaValue(key);
  }
  async function handleSubmitVenueData(e) {
    e.preventDefault();
    try {
      await submitVenueData();
      setPopupTitle('Venue Created Successfully!');
      setPopupMessage('Venue Created Successfully');
      setPopupType('success');
      setShowSuccessPopup(true);

      setTimeout(() => {
        setShowSuccessPopup(false);
      }, 3000);
      reset();
    } catch (error) {
      console.error('Error submitting venue data:', error);
      setPopupTitle('Error!');
      setPopupMessage(
        error.message || 'Failed to edit venue. Please try again.'
      );
      setPopupType('error');
      setShowSuccessPopup(true);
    }
    setTimeout(() => {
      setShowSuccessPopup(false);
    }, 3000);
  }
  const handleClosePopup = () => {
    setShowSuccessPopup(false);
    setPopupTitle('');
    setPopupMessage('');
    setPopupType('info');
  };
  return (
    <section className="w-full my-12 mx-8">
      <div className="py-12 px-4 border border-gray-200 rounded-xl bg-white shadow-md">
        <h3 className="text-primary mb-12 ml-12 text-center">Create a venue</h3>
        <form onSubmit={handleSubmitVenueData} className="relative">
          <div className="flex flex-col md:flex-row flex-wrap gap-10 justify-center ">
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
          <button
            className="btn-primary absolute bottom-0 right-12"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>

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
