import { useEffect, useState } from 'react';
import createVenueStore from '../../stores/createVenueStore';
import useVenueStore from '../../stores/venuesStore';
import { set } from 'date-fns';

export default function BasicInfoForForm() {
  const { updateVenueData } = createVenueStore();

  return (
    <div className="flex flex-col gap-4 mt-8 max-w-sm">
      <h6>Basic information</h6>
      <div>
        <label htmlFor="Title">Title</label>
        <input
          type="text"
          className="w-full p-2 border border-gray-300 rounded-md"
          placeholder="Enter label"
          onChange={e => updateVenueData({ name: e.target.value })}
        />
      </div>
      <div>
        <label htmlFor="Description">Description</label>
        <textarea
          className="w-full p-2 border border-gray-300 rounded-md"
          placeholder="Enter description"
          onChange={e => updateVenueData({ description: e.target.value })}
        ></textarea>
      </div>

      <div>
        <label htmlFor="Price">Price</label>
        <input
          type="number"
          min="0"
          className="w-full p-2 border border-gray-300 rounded-md"
          placeholder="Price per night"
          onChange={e => updateVenueData({ price: Number(e.target.value) })}
        />
      </div>
      <div>
        <label htmlFor="maxGuests">Maximum number of guests</label>
        <input
          type="number"
          min="1"
          className="w-full p-2 border border-gray-300 rounded-md"
          placeholder="Price per night"
          onChange={e => updateVenueData({ maxGuests: Number(e.target.value) })}
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

  // const regex=

  const handleAddUrl = e => {
    const url = e.target.value;
    setMediaUrl(url);
  };
  const handleAddAlt = e => {
    setMediaAlt(e.target.value);
  };
  const handleAddMedia = e => {
    e.preventDefault();
    console.log('click');
    console.log(e.target.value);
    // handle if no media url or media alt
    if (!mediaUrl || !mediaAlt) {
      setError('Please add media url and alt text');
      return;
    }
    if (!mediaUrl) setError('Please add media url');
    if (!mediaAlt) setError('Please add media Alternative text');
    const trimmedUrl = mediaUrl.trim();
    const trimmedAlt = mediaAlt.trim();
    if (!trimmedUrl) {
      setError('Please enter a vali url');
      return;
    }
    // trim and check if mediaUrl is a valid image url regex ?
    // display error if not valid
    // else
    // addMedia({ url: mediaUrl, alt: mediaAlt });
    // setMediaUrl('');
    // setMediaAlt('');
    //  reset errorand  reset media
    addMedia({
      url: trimmedUrl,
      alt: trimmedAlt,
    });
    // reset media
    setMediaUrl('');
    setMediaAlt('');
    setError(null);
    setIsUrlValid(false);
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
            // validate if url is valid image ur  add same on alt ? but alt not needed?
            // className={`w-full p-2 border rounded-md ${
            //   error ? 'border-red-500' : ''
            // }`}
            placeholder="Enter valid image url"
            // onChange={e => handleAddMedia(e)}
            value={mediaUrl}
            onChange={e => handleAddUrl(e)}
          />
        </div>
        <div>
          <label htmlFor="Description">Description</label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded-md"
            placeholder="Enter description for image"
            // onChange={e => handleAddMedia(e)}
            value={mediaAlt}
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
