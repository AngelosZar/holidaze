import BasicInfoForForm from './BasicInfoForForm';
import SetLocationInformation from './SetLocationInformation';
import SetAccommodationIncludes from './SetAccommodationIncludes';
import updateVenueStore from '../../stores/updateVenueStore';
import useGetVenueWithId from '../../hooks/useGetVenueWithId';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Popup from '../utilities/PopUp';
import IsLoadingContainer from '../utilities/IsLoadingContainer';

export function EditVenueDropDown() {
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState('');
  const [popupTitle, setPopupTitle] = useState('');
  const [popupType, setPopupType] = useState('info');
  const { id } = useParams();
  const navigate = useNavigate();
  const { venue: fetchedVenueData, isLoading, error } = useGetVenueWithId(id);
  const { submitVenueData, reset, setVenueData, toggleMetaValue, venueData } =
    updateVenueStore();
  const [storeActions] = useState(() => ({
    updateVenueData: updateVenueStore.getState().updateVenueData,
    updateLocationData: updateVenueStore.getState().updateLocationData,
    toggleMetaValue: updateVenueStore.getState().toggleMetaValue,
    submitVenueData: updateVenueStore.getState().submitVenueData,
  }));
  const storeVenueData = updateVenueStore(state => state.venueData);

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
  const handleClosePopup = () => {
    setShowSuccessPopup(false);
    setPopupTitle('');
    setPopupMessage('');
    setPopupType('info');
  };
  const handleSubmitVenueData = async (e, id, venueData) => {
    e.preventDefault();
    try {
      await submitVenueData(id, venueData);
      setPopupTitle('Venue Edited Successfully!');
      setPopupMessage('Venue Edited Successfully');
      setPopupType('success');
      setShowSuccessPopup(true);
      setTimeout(() => {
        setShowSuccessPopup(false);
        navigate('/manager/venues');
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
      setTimeout(() => {
        setShowSuccessPopup(false);
      }, 3000);
      reset();
    }
  };
  {
    isLoading && <IsLoadingContainer />;
  }
  {
    error && (
      <div>
        <h5>{error}</h5>
      </div>
    );
  }
  {
    if (!storeVenueData.id && !fetchedVenueData)
      return <div>Venue not found</div>;
  }

  return (
    <section className="w-full my-12 mx-8">
      <h3 className="mb-12">
        Edit venue: <span className="text-primary">{venueData?.name}</span>
      </h3>
      <div className="flex flex-col pb-12">
        <div className="max-w-sm ">
          <img
            src={venueData?.media?.[0]?.url}
            alt={venueData?.media?.[0]?.alt}
            className="w-full object-cover rounded-xl"
            style={{ aspectRatio: '16/9' }}
            loading="lazy"
            width="100%"
            height="auto"
          />
        </div>
      </div>
      <div className="py-12 px-4 border border-gray-200 rounded-xl bg-white shadow-md">
        <form
          onSubmit={e => handleSubmitVenueData(e, id, venueData)}
          className="relative"
        >
          {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"> */}
          <div className="flex flex-col md:flex-row flex-wrap gap-10 justify-center ">
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
