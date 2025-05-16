import { useState } from 'react';
import createVenueStore from '../../stores/createVenueStore';

export default function BasicInfoForForm({ venueData, handleInputChange }) {
  console.log('BasicInfoForForm', venueData);
  console.log(typeof venueData);
  // const { updateVenueData } = createVenueStore();
  // const venueData = createVenueStore(state => state.venueData);
  // // console.log('venueData', venueData);
  // const handleInputChange = (field, value) => {
  //   updateVenueData({ [field]: value });
  // };

  return (
    <div className="flex flex-col gap-4 mt-8 max-w-sm">
      <h6>Basic information</h6>
      <div>
        <label htmlFor="Title">Title</label>
        <input
          type="text"
          className="w-full p-2 border border-gray-300 rounded-md"
          placeholder="Enter label"
          value={venueData.name || ''}
          onChange={e => handleInputChange('name', e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="Description">Description</label>
        <textarea
          className="w-full p-2 border border-gray-300 rounded-md"
          placeholder="Enter description"
          value={venueData.description || ''}
          onChange={e => handleInputChange('description', e.target.value)}
          maxLength={500}
          rows={4}
        ></textarea>
      </div>

      <div>
        <label htmlFor="Price">Price</label>
        <input
          type="number"
          min="0"
          className="w-full p-2 border border-gray-300 rounded-md"
          placeholder="Price per night"
          value={venueData.price || ''}
          onChange={e => handleInputChange('price', Number(e.target.value))}
        />
      </div>
      <div>
        <label htmlFor="maxGuests">Maximum number of guests</label>
        <input
          type="number"
          className="w-full p-2 border border-gray-300 rounded-md"
          placeholder="Price per night"
          value={venueData.maxGuests || '6'}
          onChange={e => handleInputChange('maxGuests', Number(e.target.value))}
        />
      </div>
      <AddMediaSection />
    </div>
  );
}

function AddMediaSection() {
  const [mediaUrl, setMediaUrl] = useState('');
  const [mediaAlt, setMediaAlt] = useState('');
  const { addMedia } = createVenueStore();
  const [error, setError] = useState(null);
  const [isUrlValid, setIsUrlValid] = useState(false);

  const validateUrl = url => {
    const regex = /^https:\/\/[\w\-\.]+\/.*[\w\-]+$/;
    return regex.test(url);
  };

  const handleAddUrl = e => {
    const url = e.target.value;
    setMediaUrl(url);
    if (url.trim() === '') {
      setError(null);
      setIsUrlValid(false);
    } else if (!validateUrl(url)) {
      setError('Please enter a valid url link)');
      setIsUrlValid(false);
    } else {
      setError(null);
      setIsUrlValid(true);
      setMediaUrl(url);
    }
  };

  const handleAddAlt = e => {
    setMediaAlt(e.target.value);
  };

  const handleAddMedia = e => {
    e.preventDefault();
    if (!mediaUrl) setError('Please add media url');
    // should the url be needed to post venue \?
    const trimmedUrl = mediaUrl.trim();
    const trimmedAlt = mediaAlt.trim();
    if (!trimmedUrl) {
      setError('Please enter a valid url');
      return;
    }
    try {
      if (isUrlValid) {
        addMedia({
          url: trimmedUrl,
          alt: trimmedAlt,
        });
        setMediaUrl('');
        setMediaAlt('');
        setError(null);
        setIsUrlValid(false);
      } else {
        setError('Please enter a valid url');
      }
    } catch (error) {
      console.log(error);
      setError(error || 'Failed to add media');
    }
  };

  return (
    <>
      <h6>add images here</h6>
      <div className="flex flex-col gap-4 mt-8 max-w-sm">
        <div>
          <label htmlFor="imgUrl">Url for images</label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded-md"
            placeholder="Enter valid image url"
            value={mediaUrl || ''}
            onChange={e => handleAddUrl(e)}
          />
          {error === 'Please enter a valid url' && (
            <p className="text-red-500">{error}</p>
          )}
        </div>
        <div>
          <label htmlFor="Description">Description</label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded-md"
            placeholder="Enter description for image"
            value={mediaAlt || ''}
            onChange={e => handleAddAlt(e)}
          ></input>
        </div>
        <button className="btn-primary" type="button" onClick={handleAddMedia}>
          Add media
        </button>
      </div>
    </>
  );
}
